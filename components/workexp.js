import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

export default function Workexp({key, exp}) {
  return (
    <Card key={key} className='mb-3'>
      <Card.Body>
        <Card.Title>{exp.jobTitle}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          <Nav className="flex-column flex-md-row">
            <Nav.Item className='me-2 mb-2'>
              <i class="bi bi-building"></i> {exp.employer}
            </Nav.Item>
            <Nav.Item className='me-2 mb-2'>
              <i class="bi bi-calendar3"></i> {exp.workPeriod.from} - {exp.workPeriod.till}
            </Nav.Item>
            {
              exp.location.city != '' && exp.location.country != '' && <Nav.Item>
                <i class="bi bi-globe"></i> {exp.location.city}, {exp.location.country}
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