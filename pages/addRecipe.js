import { useForm } from "@statickit/react";
import { Row, Col, Container, Button } from "react-bootstrap";
import IngredientFields from "../components/ingredientFields";
import StepFields from "../components/stepFields";

export default function AddRecipe() {
  const [state, handleSubmit] = useForm("recipeForm");

  if (state.succeeded) {
    return (
      <div className="offwhite-bg min-full-height">
        <div className="nav-bar-inline center-vertically">
          <h3>Sweezy Cooking</h3>
        </div>
        <Container>
          <Row>
            <Col>
              <h1>Thanks for your submission!</h1>
              <p>Refresh the page to submit another recipe.</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  return (
    <div className="offwhite-bg min-full-height">
      <div className="nav-bar-inline center-vertically">
        <h3>Sweezy Cooking</h3>
      </div>
      <Container>
        <form className="recipe-form" onSubmit={handleSubmit}>
          <Row className="margin-top-five">
            <Col>
              <h1>Recipe Builder</h1>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <h5>Recipe Basics</h5>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <label className="field-label" htmlFor={"password"}>
                Authentication Password
              </label>
              <div className="field">
                <input
                  name="password"
                  type="password"
                  placeholder="Authentication Password"
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <label className="field-label" htmlFor={"recipe_title"}>
                Recipe Title
              </label>
              <div className="field">
                <input
                  name="recipe_title"
                  type="text"
                  placeholder="Recipe Title"
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={6}>
              <label className="field-label" htmlFor={"recipe_hashtag"}>
                Recipe Hashtag
              </label>
              <div className="field">
                <input
                  name="recipe_hashtag"
                  type="text"
                  placeholder="#sweezyHummus"
                />
              </div>
            </Col>

            <Col sm={12} md={6}>
              <label className="field-label" htmlFor={"tagline"}>
                Recipe Tagline
              </label>
              <div className="field">
                <input
                  name="tagline"
                  type="text"
                  id={"tagline"}
                  placeholder="A quick, zesty dish."
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={4} sm={12}>
              <label className="field-label" htmlFor={"spotify_link"}>
                Recipe Song
              </label>
              <div className="field">
                <input
                  name="spotify_link"
                  type="text"
                  placeholder="https://open.spotify.com/track/2374M0fQpWi3dLnB54qaLX?si=GUUaIKXLTwSG7GKxa8j1LQ"
                />
              </div>
            </Col>
            <Col md={4} sm={12}>
              <label className="field-label" htmlFor={"main_image"}>
                Recipe Image
              </label>
              <div className="field">
                <input
                  name="main_image"
                  type="text"
                  id={"recipeHeaderImage"}
                  placeholder="https://images.unsplash.com/photo-1585193273888-c687ecba807e"
                />
              </div>
            </Col>
            <Col>
              <label className="field-label" htmlFor={"recipe_video"}>
                Recipe Video
              </label>
              <div className="field">
                <input
                  name="recipe_video"
                  type="text"
                  id={"recipe_video"}
                  placeholder="https://vm.tiktok.com/K1JaHc/"
                />
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <label className="field-label" htmlFor={"recipe_description"}>
                Recipe Description
              </label>

              <div className="fieldTA">
                <textarea
                  name="recipe_description"
                  id="recipeDescription"
                  type="text"
                  placeholder="Chipotle, Cava, and Pei Wei have revolutionized fast-casual dining..."
                />
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <label className="field-label" htmlFor={"servings"}>
                Estimated Servings
              </label>
              <div className="field">
                <input
                  name="servings"
                  type="number"
                  id={"tagline"}
                  placeholder="4"
                />
              </div>
            </Col>
            <Col>
              <label className="field-label" htmlFor={"time"}>
                Duration
              </label>
              <div className="field">
                <input
                  name="time"
                  type="text"
                  id={"time"}
                  placeholder="1 hour and 20 minutes"
                />
              </div>
            </Col>
          </Row>
          <IngredientFields />
          <StepFields />
          <br />
          <Button type="submit" disabled={state.submitting}>
            Submit
          </Button>
        </form>
      </Container>
    </div>
  );
}
