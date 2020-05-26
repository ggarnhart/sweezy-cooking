import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Plus, Minus } from "react-feather";
class StepFields extends Component {
  state = {
    count: 1,
    steps: [],
  };
  componentDidMount() {
    this.renderSteps();
  }
  renderSteps() {
    var steps = [];
    for (var i = 0; i < this.state.count; i++) {
      steps.push(
        <Row key={`ingredient ${i}`}>
          <Col>
            <label className="field-label" htmlFor={`step${i} image`}>
              Optional Image for Current Step
            </label>
            <div className="field">
              <input
                name={`step ${i} image`}
                type="text"
                placeholder="https://images.unsplash.com/photo-1585193273888-c687ecba807e"
              />
            </div>
            <label className="field-label" htmlFor={`step ${i}`}>
              Step Instructions
            </label>
            <div className="fieldTA">
              <textarea
                name={`step ${i}`}
                type="text"
                placeholder="Heat the oven to 375 and pray..."
              />
              <input hidden value={`stepEND${i}`} name={`stepEND${i}`} />
            </div>
          </Col>
        </Row>
      );
    }

    this.setState({ steps: steps });
  }

  addStep = () => {
    var cur = this.state.count;
    cur = cur + 1;
    this.setState({ count: cur }, () => {
      this.renderSteps();
    });
  };

  subtractStep = () => {
    if (this.state.count > 1) {
      var cur = this.state.count;
      cur = cur + -1;
      this.setState({ count: cur }, () => {
        this.renderSteps();
      });
    }
  };

  render() {
    return (
      <div>
        <Row>
          <Col>
            <h5>Steps</h5>
          </Col>
        </Row>
        {this.state.steps}
        <Row className="">
          <div className="margin-left">
            <Button
              onClick={() => this.addStep()}
              className="plus-minus-button"
            >
              <Plus size={18} />
            </Button>
            <Button
              onClick={() => this.subtractStep()}
              className="plus-minus-button"
            >
              <Minus size={18} />
            </Button>
          </div>
        </Row>
      </div>
    );
  }
}

export default StepFields;
