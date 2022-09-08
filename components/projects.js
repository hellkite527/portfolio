import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function projCard(project,index) {
  let projHeader;       

  if (project.url != '') {
    projHeader = (
      <Card.Title className="mb-0 text-reset">
        <Card.Link href={project.url} target="_blank">
          {project.name} <i className="bi bi-box-arrow-up-right"></i>
        </Card.Link>
      </Card.Title>
    )
  } else {
    projHeader = <Card.Title className="mb-0">{project.name}</Card.Title>
  }

  return (
    <Col xs={12} md={4} className="mb-4" key={`${index}-${project.name}`}>
      <Card className='h-100' bg='dark' text='white' border="light">
        <Card.Header>
          { projHeader }
        </Card.Header>
        <Card.Body>
          {
            project.period.from != '' && project.period.till != '' && <Card.Subtitle className="mb-3 text-muted">
              <i className="bi bi-calendar3"></i> {project.period.from} - {project.period.till}
            </Card.Subtitle>
          }
          <Card.Text style={{ whiteSpace: 'pre-line' }}>
            {project.description}
          </Card.Text>

          {
            project.techStack.map(tech => <Badge bg="secondary" className="me-1 mb-1">{ tech }</Badge>)
          }
        </Card.Body>
      </Card>
    </Col>
  );
}

export default function Projects({projects}) {
  return (
    <Row >
      <Col>
        <h2 className="text-center my-4">Character Feats</h2>
        <Row>
          {
            projects.map((project,index) => projCard(project,index) )
          }
        </Row>
      </Col>
    </Row>
  )
}