import { Row, Col } from "react-bootstrap";
import React, { Component } from "react";
class RecipeStep extends Component {
  state = {
    completed: false,
  };

  renderImage() {
    if (this.props.imageLink) {
      return <img src={this.props.imageLink} className="recipe-step-image" />;
    }
  }

  toggleComplete() {
    if (!this.state.completed) {
      this.setState({ completed: true });
    } else {
      this.setState({ completed: false });
    }
  }

  renderStep() {
    if (this.state.completed) {
      return (
        <div className="step-completed">
          <h3>You've completed this step.</h3>
          <p>Click again to reopen.</p>
        </div>
      );
    } else {
      return (
        <div className="fancy-box">
          {this.renderImage()}
          <h2 className="heavier">Step {this.props.stepCount}</h2>
          <p>{this.props.details}</p>
        </div>
      );
    }
  }

  render() {
    return (
      <Row onClick={() => this.toggleComplete()}>
        <Col lg={12}>{this.renderStep()}</Col>
      </Row>
    );
  }
}

export default RecipeStep;
