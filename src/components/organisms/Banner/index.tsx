import {useUserProvider} from 'providers/UserProvider';
import {Col, Row} from 'components/atoms';
import {SocialMedia} from '../SocialMedia';

export const Banner = () => {
  const {socialMediaContext, bioInformationContext} = useUserProvider();

  return (
    <Row>
      <Col className='banner'>
        <Row>
          <Col>
            <div className='mb-4'>
              <h1 className='text-uppercase'>
                <b className='darkAccent'>Greetings!</b> My name is {bioInformationContext?.fullname}
                <br />
                and I&apos;m a front-end web developer
              </h1>
              <p className='fw-lighter fst-italic fs-3'>
                and also a geek and a nerd
              </p>
            </div>
            <Row>
              <Col>
                <SocialMedia socialMedia={socialMediaContext}/>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
