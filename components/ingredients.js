import { Row, Col } from "react-bootstrap";

export default function Ingredients({ indgredientArray }) {
  function renderIngredients() {
    if (indgredientArray) {
      var ingredients = indgredientArray.map(function (cur) {
        return (
          <p className="lighter">
            {cur.amount} <span className="heaviest">{cur.unit}</span>{" "}
            {cur.ingredient}
          </p>
        );
      });
      return ingredients;
    }
  }
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
}
