import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import Image from 'next/image'

export default function Banner({socialMedia}) {
  return (
    <Row>
      <Col style={{ height: '100vh' }} className="text-center d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            {/* <Image className="rounded-circle" src='/vincent-pableo.jpg' width={150} height={150} /> */}
            <div className="mb-5">
              <h1 className="text-uppercase">
                <b>Greetings!</b> My name is Vincent Pableo<br />and I'm a front-end web developer
              </h1>
              <p className='fw-lighter fst-italic'>and also a geek and a nerd</p>
            </div>
            <Row>
              <Col>
                {
                  socialMedia.map(media => (
                    <Button key={`btn-${media.icon}`} variant="outline-light" href={media.url} target="_blank" className="me-2">
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