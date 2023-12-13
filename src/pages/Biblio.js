import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Row, Container } from 'react-bootstrap';
import biblio1 from '../assets/img/biblio1.jpeg'
import biblio2 from '../assets/img/biblio2.jpeg'
import biblio3 from '../assets/img/biblio3.jpeg'
import biblio4 from '../assets/img/biblio4.jpeg'
import biblio5 from '../assets/img/biblio5.jpeg'
import biblio6 from '../assets/img/biblio6.jpeg'
import biblio7 from '../assets/img/biblio7.jpeg'
import biblio8 from '../assets/img/biblio8.jpeg'
import biblio9 from '../assets/img/biblio9.jpg'

const Biblio = () => {
    return (
        <Container>
            <Row className='mb-4'>
                <Col>
                    <Card style={{ width: '25rem' }}>
                        <Card.Img variant="top" src={biblio1} />
                        <Card.Body>
                            <Card.Title>Speak English</Card.Title>
                            <Card.Text>
                                Este libro es una guía completa y fácil de entender para aprender gramática inglesa. Con explicaciones claras y ejercicios prácticos, es ideal tanto para principiantes como para estudiantes intermedios que desean mejorar su comprensión y uso del idioma.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '25rem' }}>
                        <Card.Img variant="top" src={biblio2} />
                        <Card.Body>
                            <Card.Title>Firts learn</Card.Title>
                            <Card.Text>
                                Esta obra es un recurso indispensable para enriquecer el vocabulario en inglés. Con definiciones claras, ejemplos contextualizados y actividades, ayuda a expandir el conocimiento léxico y a mejorar las habilidades de comunicación en inglés.
                            </Card.Text>
                            <Button variant="primary">Grammar</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '25rem' }}>
                        <Card.Img variant="top" src={biblio3} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Esta guía clásica de estilo y redacción ofrece consejos concisos y útiles para escribir en inglés de manera clara y efectiva. Esencial para estudiantes, escritores y profesionales que buscan perfeccionar sus habilidades de escritura en inglés.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>

            <Row className='mb-4'>
                <Col>
                    <Card style={{ width: '25rem' }}>
                        <Card.Img variant="top" src={biblio4} />
                        <Card.Body>
                            <Card.Title>Speak English</Card.Title>
                            <Card.Text>
                                Este libro es una guía completa y fácil de entender para aprender gramática inglesa. Con explicaciones claras y ejercicios prácticos, es ideal tanto para principiantes como para estudiantes intermedios que desean mejorar su comprensión y uso del idioma.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '25rem' }}>
                        <Card.Img variant="top" src={biblio5} />
                        <Card.Body>
                            <Card.Title>Firts learn</Card.Title>
                            <Card.Text>
                                Esta obra es un recurso indispensable para enriquecer el vocabulario en inglés. Con definiciones claras, ejemplos contextualizados y actividades, ayuda a expandir el conocimiento léxico y a mejorar las habilidades de comunicación en inglés.
                            </Card.Text>
                            <Button variant="primary">Grammar</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '25rem' }}>
                        <Card.Img variant="top" src={biblio6} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Esta guía clásica de estilo y redacción ofrece consejos concisos y útiles para escribir en inglés de manera clara y efectiva. Esencial para estudiantes, escritores y profesionales que buscan perfeccionar sus habilidades de escritura en inglés.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
            <Row className='mb-4'>
                <Col>
                    <Card style={{ width: '25rem' }}>
                        <Card.Img variant="top" src={biblio7} />
                        <Card.Body>
                            <Card.Title>Speak English</Card.Title>
                            <Card.Text>
                                Este libro es una guía completa y fácil de entender para aprender gramática inglesa. Con explicaciones claras y ejercicios prácticos, es ideal tanto para principiantes como para estudiantes intermedios que desean mejorar su comprensión y uso del idioma.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '25rem' }}>
                        <Card.Img variant="top" src={biblio8} />
                        <Card.Body>
                            <Card.Title>Firts learn</Card.Title>
                            <Card.Text>
                                Esta obra es un recurso indispensable para enriquecer el vocabulario en inglés. Con definiciones claras, ejemplos contextualizados y actividades, ayuda a expandir el conocimiento léxico y a mejorar las habilidades de comunicación en inglés.
                            </Card.Text>
                            <Button variant="primary">Grammar</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '25rem' }}>
                        <Card.Img variant="top" src={biblio9} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Esta guía clásica de estilo y redacción ofrece consejos concisos y útiles para escribir en inglés de manera clara y efectiva. Esencial para estudiantes, escritores y profesionales que buscan perfeccionar sus habilidades de escritura en inglés.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </Container>

    );
}
export default Biblio;