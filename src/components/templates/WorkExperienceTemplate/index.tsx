import { WorkExperience } from 'models/data'
import { useUserProvider } from 'providers/UserProvider'
import { Container, Col, Row } from 'components/atoms'
import { WorkCard } from 'components/organisms'

export const WorkExperienceTemplate = () => {
  const { workExperienceContext } = useUserProvider()

  return (
    <Row id='Experiences' className='workExpBg'>
      <Col className='py-5'>
        <h2 className='text-center my-4'>Employment History</h2>
        <Container>
          <Row>
            <Col>
              {
                Array.isArray(workExperienceContext) &&
                workExperienceContext.map((
                  exp: WorkExperience, index: number
                ) => <WorkCard key={index} work={exp} index={index} />)
              }
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  )
}
