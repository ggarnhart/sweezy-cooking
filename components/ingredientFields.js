import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Plus, Minus } from "react-feather";
class IngredientFields extends Component {
  state = {
    count: 1,
    ingredients: [],
  };

  componentDidMount() {
    this.renderIngredients();
  }

  addIngredient = () => {
    var cur = this.state.count;
    cur = cur + 1;
    this.setState({ count: cur }, () => {
      this.renderIngredients();
    });
  };

  subtractIngredient = () => {
    if (this.state.count > 1) {
      var cur = this.state.count;
      cur = cur + -1;
      this.setState({ count: cur }, () => {
        this.renderIngredients();
      });
    }
  };

  renderIngredients() {
    var ingredients = [];
    for (var i = 0; i < this.state.count; i++) {
      ingredients.push(
        <Row key={`ingredient${i}`}>
          <Col>
            <div className="field">
              <input
                name={`ingredient${i}quantity`}
                type="text"
                placeholder="1/2 or 2"
              />
            </div>
          </Col>

          <Col>
            <div className="field">
              <input
                name={`ingredient${i}unit`}
                type="text"
                placeholder="tsps, cups, or grams"
              />
            </div>
          </Col>
          <Col>
            <div className="field">
              <input
                name={`ingredient${i}type`}
                type="text"
                placeholder="flour or minced garlic"
              />
              <input
                type="hidden"
                value={`ingredientEND${i}`}
                name={`ingredientEND${i}`}
              />
            </div>
          </Col>
        </Row>
      );
    }

    this.setState({ ingredients: ingredients });
  }
  render() {
    return (
      <div>
        <Row>
          <Col>
            <h5>Ingredients</h5>
          </Col>
        </Row>
        {this.state.ingredients}
        <Row className="">
          <div className="margin-left">
            <Button
              onClick={() => this.addIngredient()}
              className="plus-minus-button"
            >
              <Plus size={18} />
            </Button>
            <Button
              onClick={() => this.subtractIngredient()}
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

export default IngredientFields;
