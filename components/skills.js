import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function SkillCard({skills}) {
  return (
    <Col xs={12} md={{ span: 3, offset: 0 }}>
      <Card bg='dark' border="light">
        <Card.Body>
          <h3>Skill Proficiencies</h3>
          <Card.Text>
            {
              skills.map(skill => <><i className="bi bi-check-circle text-info"></i> {skill} <br/> </> )
            }
          </Card.Text>
          <Card.Text>
            <i>* There are more to the list hence it is better to get yourself a copy of the character sheet (Resume)</i>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
