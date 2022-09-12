import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

function workCard(exp, index) {
  return (
    <Card className='workCard' key={`${index}-${exp.jobTitle}`}>
      <Card.Header>
        <Card.Title className="mb-0">
          <i className="bi bi-journal-bookmark-fill highlight"></i> {exp.jobTitle}
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Subtitle className="mb-2">
          <Nav className="flex-column flex-md-row">
            <Nav.Item className='me-3 mb-2'>
              <i className="bi bi-building highlight"></i> {exp.employer}
            </Nav.Item>
            <Nav.Item className='me-3 mb-2'>
              <i className="bi bi-calendar3 highlight"></i> {exp.workPeriod.from} - {exp.workPeriod.till}
            </Nav.Item>
            {
              exp.location.city != '' && exp.location.country != '' && <Nav.Item>
                <i className="bi bi-globe highlight"></i> {exp.location.city}, {exp.location.country}
              </Nav.Item>
            }
          </Nav>
        </Card.Subtitle>
        <Card.Text style={{ whiteSpace: 'pre-line' }}>
          {exp.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default function Workexp({experiences}) {
  return (
    <Row id='Experiences' className='workExpBg'>
      <Col className='py-5'>
        <h2 className="text-center my-4">Employment History</h2>
        <Container>
          <Row>
            <Col>
              {
                experiences.map((exp, index) => workCard(exp, index) )
              }
            </Col>
          </Row>
        </Container>

      </Col>
    </Row>
  );
}