import { Row, Col, Container } from "react-bootstrap";
import React, { Component } from "react";
import Fade from "react-reveal/Fade";

class Landing extends Component {
  state = {
    data: [],
    displayArray: [],
    percentComplete: 0,
  };
  componentDidMount() {
    this.setState({ data: this.props.data });
    this.setState({ displayArray: this.state.data });
    setInterval(this.cycle, 20000);
    var displayArray = this.props.data;

    // sort by date
    displayArray = displayArray.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    this.setState({ displayArray: displayArray });
  }
  cycle = () => {
    var temporaryArray = this.state.displayArray;
    var oldFirstIndex = temporaryArray[0];
    for (var i = 0; i < temporaryArray.length - 1; i++) {
      temporaryArray[i] = temporaryArray[i + 1];
    }
    temporaryArray[temporaryArray.length - 1] = oldFirstIndex;
    this.setState({ displayArray: temporaryArray });
  };

  // i'm not going to take care of the background here because i don't want the css state to be updated twice.
  renderFirstItem = () => {
    if (this.state.displayArray.length > 0)
      return (
        <div
          className="landing-main spotify-green center-vertically"
          style={{
            backgroundImage: `radial-gradient(
                36% 128%,
                rgba(86, 86, 86, 0.4) 37%,
                rgba(86, 86, 86, 0.7) 100%
              ), url(${this.state.displayArray[0].image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <Container>
            <Row className="white-text">
              <Col>
                <Fade bottom>
                  <h6 className="heaviest heavier">
                    {this.state.displayArray[0].date}
                  </h6>
                  <h1 className="lighter">
                    {this.state.displayArray[0].title}
                  </h1>
                  <p>{this.state.displayArray[0].description}</p>
                </Fade>
              </Col>
            </Row>
          </Container>
        </div>
      );
  };

  renderOverlapItems = () => {
    if (
      this.state.displayArray.length > 1 &&
      undefined !== this.state.displayArray[0].date
    ) {
      var items = [];
      for (var i = 1; i < this.state.displayArray.length; i++) {
        items.push(
          <Col lg={3} md={6} key={`${i} ${this.state.displayArray[i].title}`}>
            <div
              className="overlap-item"
              style={{
                backgroundImage: `radial-gradient(
                36% 128%,
                rgba(86, 86, 86, 0.6) 37%,
                rgba(86, 86, 86, 0.6) 100%
              ), url(${this.state.displayArray[i].image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <Fade bottom>
                <h6 className="heaviest heavier">
                  {this.state.displayArray[i].date}
                </h6>
                <h3 className="lighter">{this.state.displayArray[i].title}</h3>
                <p>{this.state.displayArray[i].description}</p>
              </Fade>
            </div>
          </Col>
        );
      }
      return items;
    }
  };

  renderContent = () => {
    if (
      this.props.data &&
      this.props.data.length >= 0 &&
      this.state.displayArray.length >= 0
    ) {
      return (
        <div>
          {this.renderFirstItem()}
          <Container>
            <Row className="overlap">{this.renderOverlapItems()}</Row>
          </Container>
        </div>
      );
    } else {
      return <h1>Loading</h1>;
    }
  };
  render() {
    return <div>{this.renderContent()}</div>;
  }
}
export default Landing;
