import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

export default function Projects({proj}) {
  let projHeader;       

  if (proj.url != '') {
    projHeader = <Card.Title className="mb-0"><Card.Link href={proj.url} target="_blank">{proj.name} <i className="bi bi-box-arrow-up-right"></i></Card.Link></Card.Title>
  } else {
    projHeader = <Card.Title className="mb-0">{proj.name}</Card.Title>
  }

  return (
    <Card className='h-100' key={proj.name} bg='dark' text='white'>
      <Card.Header>
        { projHeader }
      </Card.Header>
      <Card.Body>
        {
          proj.period.from != '' && proj.period.till != '' && <Card.Subtitle className="mb-3 text-muted">
            <i className="bi bi-calendar3"></i> {proj.period.from} - {proj.period.till}
          </Card.Subtitle>
        }
        <Card.Text style={{ whiteSpace: 'pre-line' }}>
          {proj.description}
        </Card.Text>

        {
          proj.techStack.map(tech => <Badge bg="secondary" className="me-1 mb-1">{ tech }</Badge>)
        }
      </Card.Body>
    </Card>
  );
}