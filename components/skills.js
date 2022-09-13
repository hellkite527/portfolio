import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function SkillCard({skills}) {
  return (
    <Col xs={12} md={5}>
      <Card className='biocard'>
        <Card.Body>
          <h3>Skill Proficiencies</h3>

          <Row className='mb-4'>
            {
              skills.map(skill => (
                <Col key={`skill-${skill}`} xs={12} md={6}>
                  <Card.Text>
                    <i className="bi bi-check-circle highlight"></i> {skill}
                  </Card.Text>
                </Col>
              ))
            }
          </Row>

          <Card.Text>
            <i>* There are more to the list hence it is better to get yourself a copy of the character sheet (Resume)</i>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
