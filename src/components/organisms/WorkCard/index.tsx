import {WorkExperience} from 'models/data';
import {
  Card,
  CardBody,
  CardHeader,
  CardSubtitle,
  CardTitle,
  CardText,
  Nav,
  NavItem,
} from 'components/atoms';

export type WorkCardProps ={
  work: WorkExperience | undefined;
  index: number;
}

export const WorkCard = ({work, index}: WorkCardProps) => {
  return (
    <Card className='workCard' key={`${index}-${work?.jobTitle}`}>
      <CardHeader>
        <CardTitle className='mb-0'>
          <i className='bi bi-journal-bookmark-fill highlight'></i>{' '}
          {work?.jobTitle}
        </CardTitle>
      </CardHeader>
      <CardBody>
        <CardSubtitle className='mb-2'>
          <Nav className='flex-column flex-md-row'>
            <NavItem className='me-3 mb-2'>
              <i className='bi bi-building highlight'></i> {work?.employer}
            </NavItem>
            <NavItem className='me-3 mb-2'>
              <i className='bi bi-calendar3 highlight'></i>{' '}
              {work?.workPeriod.from} - {work?.workPeriod.till}
            </NavItem>
            {work?.location.city != '' && work?.location.country != '' && (
              <NavItem>
                <i className='bi bi-globe highlight'></i> {work?.location.city},{' '}
                {work?.location.country}
              </NavItem>
            )}
          </Nav>
        </CardSubtitle>
        <CardText style={{ whiteSpace: 'pre-line' }}>
          {work?.description}
        </CardText>
      </CardBody>
    </Card>
  );
}