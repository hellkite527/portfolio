import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

export default function Banner({socialMedia}) {
  return (
    <Row>
      <Col className="banner">
        <Row>
          <Col>
            <div className="mb-5">
              <h1 className="text-uppercase">
                <b className="highlight">Greetings!</b> My name is Vincent Pableo<br />and I&apos;m a front-end web developer
              </h1>
              <p className='fw-lighter fst-italic'>and also a geek and a nerd</p>
            </div>
            <Row>
              <Col>
                {
                  socialMedia.map(media => (
                    <Button key={`btn-${media.icon}`} href={media.url} target="_blank" className="social-media-btn">
                      <i className={`bi bi-${media.icon}`}></i>
                    </Button>
                  ))
                }
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}