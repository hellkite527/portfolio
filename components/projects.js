import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

export default function Projects({key, proj}) {
  let projHeader;       

  if (proj.url != '') {
    projHeader = <Card.Title><Card.Link href={proj.url} target="_blank">{proj.name} <i class="bi bi-box-arrow-up-right"></i></Card.Link></Card.Title>
  } else {
    projHeader = <Card.Title>{proj.name}</Card.Title>
  }

  return (
    <Card key={key} className='h-100'>
      <Card.Header>
        { projHeader }
      </Card.Header>
      <Card.Body>
        {
          proj.period.from != '' && proj.period.till != '' && <Card.Subtitle className="mb-3 text-muted">
            <i class="bi bi-calendar3"></i> {proj.period.from} - {proj.period.till}
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