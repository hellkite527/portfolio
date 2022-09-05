import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import Image from 'next/image'

export default function Banner({social}) {
  return (
    <>
      {/* <Image className="rounded-circle" src='/vincent-pableo.jpg' width={150} height={150} /> */}
      <h1 className="text-uppercase mb-5">
        Greetings! My name is <b>Vincent Pableo</b><br />and I'm a front-end web developer
      </h1>
      <Row>
        <Col>
          <Button variant="outline-light" href={social.linkedin} target="_blank" className="me-2">
            <i class="bi bi-linkedin"></i>
          </Button>
          <Button variant="outline-light" href={social.github} target="_blank" className="me-2">
            <i class="bi bi-github"></i>
          </Button>
          <Button variant="outline-light" href={social.discord} target="_blank" className="me-2">
            <i class="bi bi-discord"></i>
          </Button>
          <Button variant="outline-light" href={social.facebook} target="_blank" className="me-2">
            <i class="bi bi-messenger"></i>
          </Button>
          <Button variant="outline-light" href={social.twitter} target="_blank">
            <i class="bi bi-twitter"></i>
          </Button>
        </Col>
      </Row>
    </>
  );
}