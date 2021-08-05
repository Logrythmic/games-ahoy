import { Card, Container, Col, Row, Image } from 'react-bootstrap';
import profile from '../../Luqmaan.jpeg';

function About () {
  return(
    <>
      <Container className="about-container">
        <Row>
          <Col xs={1} md={1} lg={1} className='img-vert'>
            <Image src={profile} roundedCircle />
          </Col>
        </Row>
        <Card
        bg='light'
        style={{ width: '18rem' }}
        className="mb-2 text-center"
        >
        <Card.Header>About Me</Card.Header>
        <Card.Body>
          <Card.Title> Luqmaan Bradford </Card.Title>
          <Card.Text>
            Full Stack Developer <b><i>|| </i> </b>  
            Project Manager <b><i>|| </i> </b> 
            IT Technician
          </Card.Text>
        </Card.Body>
      </Card>
      </Container>
      

      
    </>
  )
}

export default About;