import { Container, Col, Row } from "react-bootstrap";
import { Play } from "react-feather";
export default function RecipeSplash({ pictureLink, videoLink, recipeTitle }) {
  function renderTitleBox() {
    if (videoLink) {
      return (
        <div className="recipe-splash-title-box">
          <h2>{recipeTitle}</h2>
          <a href={videoLink} className="play-circle-link">
            <Play color="white" size={24} />
          </a>
        </div>
      );
    } else {
      return (
        <div className="recipe-splash-title-box">
          <h2>{recipeTitle}</h2>
        </div>
      );
    }
  }
  return (
    <div className="full-height recipeSplash center-vertically">
      <Container>
        <Row>
          <Col sm={12} md={12} lg={5}>
            {renderTitleBox()}
          </Col>
        </Row>
      </Container>
      <style jsx>{`
        .recipeSplash {
          background-image: url(${pictureLink});
          background-size: cover;
          background-position: center;
        }
      `}</style>
    </div>
  );
}
