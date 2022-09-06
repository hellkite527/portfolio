import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function workCard(exp, index) {
  return (
    <Card className='mb-3' bg='dark' text='white' key={`${index}-${exp.jobTitle}`}>
      <Card.Header>
        <Card.Title className="mb-0">
          {exp.jobTitle}
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Subtitle className="mb-2 text-muted">
          <Nav className="flex-column flex-md-row">
            <Nav.Item className='me-2 mb-2'>
              <i className="bi bi-building"></i> {exp.employer}
            </Nav.Item>
            <Nav.Item className='me-2 mb-2'>
              <i className="bi bi-calendar3"></i> {exp.workPeriod.from} - {exp.workPeriod.till}
            </Nav.Item>
            {
              exp.location.city != '' && exp.location.country != '' && <Nav.Item>
                <i className="bi bi-globe"></i> {exp.location.city}, {exp.location.country}
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
    <Row>
      <Col>
        <h2 className="text-center my-4">Work Experiences</h2>
        {
          experiences.map((exp, index) => workCard(exp, index) )
        }
      </Col>
    </Row>
  );
}