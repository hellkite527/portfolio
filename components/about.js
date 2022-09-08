import React from 'react';

import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

class About extends React.Component {
  render() {
    return (
      <>
        <Row>
          <Col style={{ minHeight: '100vh' }} className="d-flex align-items-center font-monospace">
            <div>
              <Row>
                <Col xs={12} className="text-center mb-5">
                  <h2>Character Profile</h2>
                </Col>
                <Col xs={{span: 10, offset: 1}} md={{span: 2, offset: 1}}>
                  <Card bg='dark' border="light">
                    <Card.Body>
                      <Image className="rounded-circle img-thumbnail mb-3 border border-dark" src='/vincent-pableo.jpg' />
                      <Card.Text>
                        Name: Vincent Pableo
                        <br />
                        Age: 34
                        <br />
                        Class: Lv12 Front-End Developer
                        <br />
                        EXP points: 100,000
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={{span: 10, offset: 1}} md={{span: 5, offset: 0}}>
                  <Card bg='dark' border="light">
                    <Card.Body>
                      <h3>Character Backstory</h3>
                      <Card.Text>
                        A front-end web developer based in the Philippines and does Front-End Development, creating templates for sites or apps, and a touch of photo editing. His journey in web development started back in 2009 and has been on it after 12 years. The career path that he chose has led him to into a very diverse choice of industries including finance and real estate as well as variety of projects such as company websites, online banking, e-commerce websites just to name a few.
                      </Card.Text>
                      <Card.Text>
                        Outside of his profession, he does immerse himself with some activities with his trusty friends that promotes cooperation such as D&amp;D or video games.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={{span: 10, offset: 1}} md={{ span: 3, offset: 0 }}>
                  <Card bg='dark' border="light">
                    <Card.Body>
                      <h3>Skill Proficiencies</h3>
                      <ul>
                        <li>Nullam vitae nunc id sapien tincidunt volutpat.</li>
                        <li>Mauris rhoncus ipsum eu turpis mollis ullamcorper.</li>
                        <li>Quisque consequat nibh vitae massa accumsan iaculis.</li>
                        <li>Aliquam ultricies augue vitae consequat eleifend.</li>
                        <li>Sed consequat libero at magna tempus, vitae dapibus dui congue.</li>
                        <li>Sed at risus nec tortor imperdiet sollicitudin.</li>
                        <li>Nam at enim dignissim, scelerisque sem ac, rhoncus lacus.</li>
                      </ul>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

      </>
    )
  }
}

export default About;
