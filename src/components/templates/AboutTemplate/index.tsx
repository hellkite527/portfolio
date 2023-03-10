import {useUserProvider} from 'providers/UserProvider';
import {Col, Container, Row} from 'components/atoms';
import {BioCard, SkillCard} from 'components/molecules';
import {BackstoryCard} from 'components/organisms';

export const About = () => {
  const {bioInformationContext, skillsContext} = useUserProvider();

  return (
    <Row id='About'>
      <Col className='about'>
        <Container>
          <Row>
            <Col xs={12} className='text-center mb-3 mb-md-5'>
              <h2 className='mb-0'>Character Profile</h2>
            </Col>

            <BioCard dateOfBirth={bioInformationContext?.dateOfBirth} />
            <BackstoryCard />
            <SkillCard skills={skillsContext} />
          </Row>
        </Container>
      </Col>
    </Row>
  );
};
