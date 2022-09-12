import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function projCard(project,index) {
  let projHeader;       

  if (project.url != '') {
    projHeader = (
      <Card.Title className="mb-0 text-reset">
        <Card.Link href={project.url} target="_blank">
        <i className="bi bi-journal-code highlight"></i> {project.name} <i className="bi bi-box-arrow-up-right"></i>
        </Card.Link>
      </Card.Title>
    )
  } else {
    projHeader = <Card.Title className="mb-0"><i className="bi bi-journal-code highlight"></i> {project.name}</Card.Title>
  }

  return (
    <Col xs={12} md={4} className="mb-4" key={`${index}-${project.name}`}>
      <Card className='projectCard'>
        <Card.Header>
          { projHeader }
        </Card.Header>
        <Card.Body>
          {
            project.period.from != '' && project.period.till != '' && <Card.Subtitle className="mb-3">
              <i className="bi bi-calendar3 highlight"></i> {project.period.from} - {project.period.till}
            </Card.Subtitle>
          }
          <Card.Text style={{ whiteSpace: 'pre-line' }}>
            {project.description}
          </Card.Text>

          {
            project.techStack.map(tech => <Badge className="me-1 mb-1 dark-accent-bg">{ tech }</Badge>)
          }
        </Card.Body>
      </Card>
    </Col>
  );
}

export default function Projects({projects}) {
  return (
    <Row id='Projects' className='projListBg'>
      <Col className='py-5'>
        <h2 className="text-center my-4">Endeavors</h2>
        <Container>
          <Row>
            {
              projects.map((project,index) => projCard(project,index) )
            }
          </Row>
        </Container>
      </Col>
    </Row>
  )
}