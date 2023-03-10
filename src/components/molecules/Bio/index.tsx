import {getAge} from 'utils';
import {Card, CardBody, Col, Image} from 'components/atoms';

export const BioCard = (dateOfBirth: any) => {
  return (
    <Col xs={12} md={12} className='mb-3'>
      <Card className='biocard'>
        <CardBody>
          <div className='bioAlign'>
            <div>
              <Image
                className='profilePic'
                src='/vincent-pableo.jpg'
                alt='Vincent Pableo'
              />
            </div>
            <div>
              <b>Name:</b> Vincent Pableo
            </div>
            <div>
              <b>Age:</b> {getAge(dateOfBirth)}
            </div>
            <div>
              <b>Class:</b> Front-End Developer
            </div>
            <div>
              <b>Languages:</b> 
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
}
