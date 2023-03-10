import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  CardLink,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Container,
  Row
} from "components/atoms";

export const projCard = (project: any, index: number) => {
  let projHeader: any;

  if (project.url != '') {
    projHeader = (
      <CardTitle className='mb-0 text-reset'>
        <CardLink href={project.url} target='_blank'>
          <i className='bi bi-journal-code gray'></i> {project.name}{' '}
          <i className='bi bi-box-arrow-up-right'></i>
        </CardLink>
      </CardTitle>
    );
  } else {
    projHeader = (
      <CardTitle className='mb-0'>
        <i className='bi bi-journal-code gray'></i> {project.name}
      </CardTitle>
    );
  }

  return (
    <Col xs={12} md={4} className='mb-4' key={`${index}-${project.name}`}>
      <Card className='projectCard'>
        <CardHeader>{projHeader}</CardHeader>
        <CardBody>
          {project.period.from != '' && project.period.till != '' && (
            <CardSubtitle className='mb-3'>
              <i className='bi bi-calendar3 gray'></i> {project.period.from} -{' '}
              {project.period.till}
            </CardSubtitle>
          )}
          <CardText style={{ whiteSpace: 'pre-line' }}>
            {project.description}
          </CardText>

          {project.techStack.map((tech: any) => (
            <Badge
              className='me-1 mb-1 darkAccent-bg'
              key={`${index}-${project.name}-${tech}`}
            >
              {tech}
            </Badge>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
}

export const Projects = (projects: any) => {
  return (
    <Row id='Projects' className='projListBg'>
      <Col className='py-5'>
        <h2 className='text-center my-4'>Endeavors</h2>
        <Container>
          <Row>
            {projects.map((project: any, index: number) => projCard(project, index))}
          </Row>
        </Container>
      </Col>
    </Row>
  );
}
