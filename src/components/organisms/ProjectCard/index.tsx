import {ProjectsHandled} from "models/data";
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
} from "components/atoms";

export type ProjectCardProps ={
  project: ProjectsHandled | undefined;
  index: number;
}

export const ProjectCard = ({project, index}: ProjectCardProps) => {
  let projHeader: any;

  if (project?.url != '') {
    projHeader = (
      <CardTitle className='mb-0 text-reset'>
        <CardLink href={project?.url} target='_blank'>
          <i className='bi bi-journal-code gray'></i> {project?.name}{' '}
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
    <Col xs={12} md={4} className='mb-4' key={`${index}-${project?.name}`}>
      <Card className='projectCard'>
        <CardHeader>{projHeader}</CardHeader>
        <CardBody>
          {project?.period.from != '' && project?.period.till != '' && (
            <CardSubtitle className='mb-3'>
              <i className='bi bi-calendar3 gray'></i> {project?.period.from} -{' '}
              {project?.period.till}
            </CardSubtitle>
          )}
          <CardText style={{ whiteSpace: 'pre-line' }}>
            {project?.description}
          </CardText>

          {project?.techStack.map((tech: any) => (
            <Badge
              className='me-1 mb-1 darkAccent-bg'
              key={`${index}-${project?.name}-${tech}`}
            >
              {tech}
            </Badge>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
}