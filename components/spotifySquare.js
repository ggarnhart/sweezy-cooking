import { Row, Col } from "react-bootstrap";
export default function SpotifySquare({ link, songTitle }) {
  function renderSpotifyTitle() {
    const options = [
      "This Recipe Bumps",
      "Let's Jam Out",
      "Recipes Groove Too",
      "Your Food Loves our Music Playlist",
    ];
    return options[Math.floor(Math.random() * options.length)];
  }
  function renderSongTitle() {
    const options = [
      "Tap to jam out",
      "Tap to listen",
      "Tap to start the party",
    ];

    if (songTitle) {
      return (
        <p className="lighter">
          Tap to listen to <span className="heaviest">{songTitle}</span>
        </p>
      );
    } else {
      return options[Math.floor(Math.random() * options.length)];
    }
  }
  return (
    <Row>
      <Col sm={12} md={12} lg={12}>
        <a href={link} target="_blank" className="fancy-box-link">
          <div className="fancy-box fancy-flex spotify-green">
            <h1>{renderSpotifyTitle()}</h1>
            {renderSongTitle()}
          </div>
        </a>
      </Col>
    </Row>
  );
}
