import { Row, Col, Container } from "react-bootstrap";
import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Moment from "react-moment";
import Link from "next/link";

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
        <Link
          className="recipe-link"
          href={`/recipe/${this.state.displayArray[0].count}`}
        >
          <div
            className="recipe-link landing-main spotify-green center-vertically"
            style={{
              backgroundImage: `radial-gradient(
                36% 128%,
                rgba(86, 86, 86, 0.4) 37%,
                rgba(86, 86, 86, 0.7) 100%
              ), url(${this.state.displayArray[0].main_image})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <Container>
              <Row className="white-text">
                <Col>
                  <Fade bottom>
                    <h6 className="heaviest heavier">
                      <Moment format="MMMM DD, YYYY">
                        {this.state.displayArray[0].date_added}
                      </Moment>
                    </h6>
                    <h1 className="lighter">
                      {this.state.displayArray[0].recipe_title}
                    </h1>
                    <p>{this.state.displayArray[0].recipe_description}</p>
                  </Fade>
                </Col>
              </Row>
            </Container>
          </div>
        </Link>
      );
  };

  renderOverlapItems = () => {
    if (
      this.state.displayArray.length > 1 &&
      undefined !== this.state.displayArray[0].date_added
    ) {
      var items = [];
      for (var i = 1; i < this.state.displayArray.length; i++) {
        items.push(
          <Link href={`/recipe/${this.state.displayArray[i].count}`}>
            <Col
              lg={3}
              md={6}
              key={`${i} ${this.state.displayArray[i].recipe_title}`}
            >
              <div
                className="overlap-item"
                style={{
                  backgroundImage: `radial-gradient(
                36% 128%,
                rgba(86, 86, 86, 0.6) 37%,
                rgba(86, 86, 86, 0.6) 100%
              ), url(${this.state.displayArray[i].main_image})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <Fade bottom>
                  <h6 className="heaviest heavier">
                    <Moment format="MMMM DD, YYYY">
                      {this.state.displayArray[i].date_added}
                    </Moment>
                  </h6>
                  <h3 className="lighter">
                    {this.state.displayArray[i].recipe_title}
                  </h3>
                  <p className="overlap-item-description">
                    {this.state.displayArray[i].tagline}
                  </p>
                </Fade>
              </div>
            </Col>
          </Link>
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
    return (
      <div>
        {/* <div className="nav-bar center-vertically">
          <h3>Sweezy Cooking</h3>
        </div> */}
        {this.renderContent()}
      </div>
    );
  }
}
export default Landing;
