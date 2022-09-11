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
    <Col xs={12} md={{span: 2, offset: 1}} className='mb-3 mb-md-0'>
      <Card bg='dark' border="light">
        <Card.Body>
          <Image className="rounded-circle img-thumbnail mb-3 border border-dark" src='/vincent-pableo.jpg' />
          <Card.Text>
            <b>Name:</b> Vincent Pableo
            <br />
            <b>Age:</b> { getAge(dateOfBirth) }
            <br />
            <b>Class:</b> Lv12 Front-End Developer
            <br />
            <b>EXP points:</b> 100,000
            <br />
            <b>Alignment:</b> Chaotic Good (<i className="bi bi-emoji-laughing-fill"></i>)
            <br />
            <b>Languages:</b> Filipino, English
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}