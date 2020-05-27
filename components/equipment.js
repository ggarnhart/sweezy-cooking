import { Container, Row, Col } from "react-bootstrap";

export default function Equipment() {
  return (
    <div className="equipment">
      <Container>
        <Row>
          <Col className="center-text">
            <hr />
            <h2 className="lighter serif">Kitchen Tools</h2>
          </Col>
        </Row>
        <br />
        <Row>
          <Col sm={12} md={6} lg={4}>
            <h4 className="center-text heaviest">Knives</h4>
            <ul>
              <li>Beginner: $65</li>
              <li>Intermediate: $95</li>
              <li>Professional: $100</li>
            </ul>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <h4 className="center-text heaviest">Knives</h4>
            <ul>
              <li>Beginner: $65</li>
              <li>Intermediate: $95</li>
              <li>Professional: $100</li>
            </ul>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <h4 className="center-text heaviest">Knives</h4>
            <ul>
              <li>Beginner: $65</li>
              <li>Intermediate: $95</li>
              <li>Professional: $100</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
