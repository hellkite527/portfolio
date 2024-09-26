import { ProjectsHandled } from 'models/data'
import { useUserProvider } from 'providers/UserProvider'
import { Col, Container, Row } from 'components/atoms'
import { ProjectCard } from 'components/organisms'

export const ProjectsTemplate = () => {
  const { projectsHandledContext } = useUserProvider()
  return (
    <Row id='Projects' className='projListBg'>
      <Col className='py-5'>
        <h2 className='text-center my-4'>Endeavors</h2>
        <Container>
          <Row>
            {
              Array.isArray(projectsHandledContext) &&
              projectsHandledContext.map((
                project: ProjectsHandled, index: number
              ) => <ProjectCard key={index} project={project} index={index} />)
            }
          </Row>
        </Container>
      </Col>
    </Row>
  )
}
