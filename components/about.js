import React from 'react';

import Image from 'react-bootstrap/Image'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

class About extends React.Component {
  render() {
    return (
      <>
        <Row>
          <Col style={{ height: '100vh' }} className="d-flex align-items-center">
            <Row>
              <Col xs={{ span: 3, offset: 1}}>
                <Image className="rounded-circle img-fluid" src='/vincent-pableo.jpg' />
              </Col>
              <Col xl={{offset: 1}}>
                <h2 className="text-center my-4">About Me</h2>
                <p className="fs-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis massa sapien, vitae faucibus turpis suscipit ut. Nullam nec fringilla ipsum. Vestibulum eget ante eget erat fringilla facilisis eget congue tellus. Morbi vitae pretium urna. Nullam lobortis posuere urna, ut convallis risus condimentum posuere. Quisque non velit eu elit fringilla iaculis. Duis eget odio magna. Pellentesque mattis lacus in dolor viverra viverra.</p>

                <Row>
                  <Col>
                    <h4>What do I do:</h4>
                    <ListGroup variant="flush">
                      <ListGroup.Item variant="dark">Cras justo odio</ListGroup.Item>
                      <ListGroup.Item variant="dark">Dapibus ac facilisis in</ListGroup.Item>
                      <ListGroup.Item variant="dark">Morbi leo risus</ListGroup.Item>
                      <ListGroup.Item variant="dark">Porta ac consectetur ac</ListGroup.Item>
                    </ListGroup>
                  </Col>
                  <Col>
                    <h4>What other stuff do I do:</h4>
                    <ListGroup variant="flush">
                      <ListGroup.Item variant="dark">Cras justo odio</ListGroup.Item>
                      <ListGroup.Item variant="dark">Dapibus ac facilisis in</ListGroup.Item>
                      <ListGroup.Item variant="dark">Morbi leo risus</ListGroup.Item>
                      <ListGroup.Item variant="dark">Porta ac consectetur ac</ListGroup.Item>
                    </ListGroup>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>

      </>
    )
  }
}

export default About;
