import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function BioCard({dateOfBirth}) {
  const getAge = (dateString) => {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age
  }

  return (
    <Col xs={12} md={12} className='mb-3'>
      <Card className='biocard'>
        <Card.Body>
          <div className='bioAlign'>
            <div>
              <Image className="profilePic" src='/vincent-pableo.jpg' alt="Vincent Pableo" />
            </div>
            <div><b>Name:</b> Vincent Pableo</div>
            <div><b>Age:</b> { getAge(dateOfBirth) }</div>
            <div><b>Class:</b> Front-End Developer</div>
            <div><b>Languages:</b> Filipino, English</div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  )
}