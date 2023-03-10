import {useUserProvider} from 'providers/UserProvider';
import {Col, Row} from 'components/atoms';
import {SocialMedia} from 'components/organisms';

export const FooterTemplate = () => {
  const {socialMediaContext, bioInformationContext} = useUserProvider();
  const currentYear = new Date().getFullYear();

  return (
    <Row className='footer'>
      <Col>
        <div className='footer-social'>
          <SocialMedia socialMedia={socialMediaContext}/>
        </div>
        <p className='mt-4 mb-0'>
          Crafted by <span className='highlight'>{bioInformationContext?.fullname}</span> ©{' '}
          {currentYear}
        </p>
      </Col>
    </Row>
  );
}
