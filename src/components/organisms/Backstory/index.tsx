import { Button, Card, CardBody, CardText, Col } from 'components/atoms'

export const BackstoryCard = () => {
  return (
    <Col xs={12} md={7} className='mb-3 mb-md-0'>
      <Card className='biocard'>
        <CardBody>
          <h3>Backstory</h3>
          <CardText>
            A front-end web developer based in the Philippines and does{' '}
            <b className='highlight'>
              Front-End Development, creating templates for sites or apps, and a
              touch of photo editing
            </b>
            . His journey in web development started back in 2009 and has been
            on it after 12 years. The career path that he chose has led him to
            into a very diverse choice of industries including{' '}
            <b className='highlight'>finance and real estate</b> as well as
            variety of projects such as{' '}
            <b className='highlight'>
              company websites, online banking, e-commerce websites
            </b>{' '}
            just to name a few.
          </CardText>
          <CardText>
            Outside of his profession, he does immerse himself with some
            activities with his trusty friends that promotes cooperation such as
            D&amp;D or video games.
          </CardText>
          <div className='d-grid gap-2'>
            <Button
              variant='outline-success'
              className='cv-btn'
              target='_blank'
              rel='noopener noreferrer'
              href='https://drive.google.com/file/d/1p6727BmUOfGjw83IKEfDZCb_4mNlBa8r/view?usp=sharing'
            >
              <i className='bi bi-file-earmark-pdf-fill' /> Get a copy of the
              character sheet (Download resume)
            </Button>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}
