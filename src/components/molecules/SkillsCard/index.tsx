import {Card, CardBody, CardText, Col, Row} from "components/atoms";

type SkillCardProps = {
  skills: string[] | undefined;
}

export const SkillCard = (skills: SkillCardProps) => {
  return (
    <Col xs={12} md={5}>
      <Card className='biocard'>
        <CardBody>
          <h3>Skill Proficiencies</h3>

          <Row className='mb-4'>
            {Array.isArray(skills) && skills.map((skill: string) => (
              <Col key={`skill-${skill}`} xs={12} md={6}>
                <CardText>
                  <i className='bi bi-check-circle highlight'></i> - {skill}
                </CardText>
              </Col>
            ))}
          </Row>

          <CardText>
            <i>
              * There are more to the list hence it is better to get yourself a
              copy of the character sheet (Resume)
            </i>
          </CardText>
        </CardBody>
      </Card>
    </Col>
  );
}
