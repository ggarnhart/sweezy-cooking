import { Row, Col } from "react-bootstrap";
export default function SpotifySquare({ link, songTitle }) {
  function renderSpotifyTitle() {
    const options = [
      "This Recipe Bumps",
      "Let's Jam Out",
      "Recipes Groove Too",
      "Your Food Loves this Song",
    ];
    return options[Math.floor(Math.random() * options.length)];
  }
  return (
    <Row>
      <Col sm={12} md={12} lg={12}>
        <a href={link} target="_blank" className="fancy-box-link">
          <div className="fancy-box fancy-flex spotify-green">
            <h1>{renderSpotifyTitle()}</h1>
            <p className="lighter">
              Tap to listen to <span className="heaviest">{songTitle}</span>
            </p>
          </div>
        </a>
      </Col>
    </Row>
  );
}
