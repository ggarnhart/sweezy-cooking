import { Row, Col } from "react-bootstrap";
import { render } from "react-dom";

export default function Ingredients({ indgredientArray }) {
  function renderIngredients() {
    if (indgredientArray) {
      var ingredients = indgredientArray.map(function (cur) {
        return (
          <p className="lighter" key={cur._id}>
            {cur.quantity} <span className="heaviest">{cur.unit}</span>{" "}
            {cur.type}
          </p>
        );
      });
      return ingredients;
    }
  }
  if (
    undefined !== indgredientArray &&
    (indgredientArray[0].quantity !== "" ||
      indgredientArray[0].type !== "" ||
      indgredientArray[0].unit !== "")
  ) {
    return (
      <Row>
        <Col lg={12}>
          <div className="fancy-box">
            <h2>Ingredients</h2>
            {renderIngredients()}
          </div>
        </Col>
      </Row>
    );
  } else {
    return <div></div>;
  }
}
