import { Row, Col } from "react-bootstrap";

export default function HashtagSquare({ hashtag }) {
  return (
    <Row>
      <Col lg={12}>
        <a
          href={`https://instagram.com/explore/tags/${hashtag}`}
          target="_blank"
          className="fancy-box-link"
        >
          <div className="fancy-box hashtag-color fancy-flex white-text">
            <h2 className="heaviest">Eat Up!</h2>
            <p>
              Share it with us using the hashtag{" "}
              <span className="heaviest">#{hashtag}</span>.
            </p>

            <p className="smaller-font">Tap to Explore.</p>
          </div>
        </a>
      </Col>
    </Row>
  );
}
