import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function BackstoryCard() {
  return (
    <Col xs={12} md={{span: 5, offset: 0}} className='mb-3 mb-md-0'>
      <Card className='listCard'>
        <Card.Body>
          <h3>Backstory</h3>
          <Card.Text>
            A front-end web developer based in the Philippines and does <span className='highlight'>Front-End Development, creating templates for sites or apps, and a touch of photo editing</span>. His journey in web development started back in 2009 and has been on it after 12 years. The career path that he chose has led him to into a very diverse choice of industries including <span className='highlight'>finance and real estate</span> as well as variety of projects such as <span className='highlight'>company websites, online banking, e-commerce websites</span> just to name a few.
          </Card.Text>
          <Card.Text>
            Outside of his profession, he does immerse himself with some activities with his trusty friends that promotes cooperation such as D&amp;D or video games.
          </Card.Text>
          <div className='d-grid gap-2'>
            <Button
              variant="outline-success"
              className='cv-btn'
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1p6727BmUOfGjw83IKEfDZCb_4mNlBa8r/view?usp=sharing"
            >
              <i className="bi bi-file-earmark-pdf-fill"></i> Get a copy of the character sheet (Download resume)
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}