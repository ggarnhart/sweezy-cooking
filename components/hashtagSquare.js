import { Row, Col } from "react-bootstrap";

export default function HashtagSquare({ hashtag }) {
  function renderHashtag() {
    if (hashtag) {
      return hashtag;
    } else {
      return "#sweezyMeal";
    }
  }
  function hashtagLink() {
    if (hashtag) {
      return `https://instagram.com/explore/tags/${hashtag}`;
    } else {
      return `https://instagram.com/explore/tags/sweezyMeal`;
    }
  }
  return (
    <Row>
      <Col lg={12}>
        <a href={hashtagLink()} target="_blank" className="fancy-box-link">
          <div className="fancy-box hashtag-color fancy-flex white-text">
            <h2 className="heaviest">Eat Up!</h2>
            <p>
              Share it with us using the hashtag{" "}
              <span className="heaviest">{renderHashtag()}</span>.
            </p>

            <p className="smaller-font">Tap to Explore.</p>
          </div>
        </a>
      </Col>
    </Row>
  );
}
