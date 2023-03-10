import {
  Card,
  CardBody,
  CardHeader,
  CardSubtitle,
  CardTitle,
  CardText,
  Container,
  Col,
  Nav,
  NavItem,
  Row
} from 'components/atoms';

import { useUserProvider } from 'providers/UserProvider';

export const workCard = (exp: any, index: number) => {
  return (
    <Card className='workCard' key={`${index}-${exp.jobTitle}`}>
      <CardHeader>
        <CardTitle className='mb-0'>
          <i className='bi bi-journal-bookmark-fill highlight'></i>{' '}
          {exp.jobTitle}
        </CardTitle>
      </CardHeader>
      <CardBody>
        <CardSubtitle className='mb-2'>
          <Nav className='flex-column flex-md-row'>
            <NavItem className='me-3 mb-2'>
              <i className='bi bi-building highlight'></i> {exp.employer}
            </NavItem>
            <NavItem className='me-3 mb-2'>
              <i className='bi bi-calendar3 highlight'></i>{' '}
              {exp.workPeriod.from} - {exp.workPeriod.till}
            </NavItem>
            {exp.location.city != '' && exp.location.country != '' && (
              <NavItem>
                <i className='bi bi-globe highlight'></i> {exp.location.city},{' '}
                {exp.location.country}
              </NavItem>
            )}
          </Nav>
        </CardSubtitle>
        <CardText style={{ whiteSpace: 'pre-line' }}>
          {exp.description}
        </CardText>
      </CardBody>
    </Card>
  );
}

export const WorkExperience = (experiences:any) => {
  const {workExperienceContext} = useUserProvider();

  return (
    <Row id='Experiences' className='workExpBg'>
      <Col className='py-5'>
        <h2 className='text-center my-4'>Employment History</h2>
        <Container>
          <Row>
            <Col>{experiences.map((exp: any, index: number) => workCard(exp, index))}</Col>
          </Row>
        </Container>
      </Col>
    </Row>
  );
}
