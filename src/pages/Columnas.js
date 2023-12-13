import React from 'react';
import { Col, Row,Container } from 'react-bootstrap';
import col1 from '../assets/img/col1.jpg'
import col2 from '../assets/img/col2.webp'
import col3 from '../assets/img/col3.jpg'
import col4 from '../assets/img/col4.jpg'

const Columnas = () => {
  return (
        <Container>
            <Row className='mb-4'>
                <Col>
                    <img
                        src={col1}
                        alt="Primera imagen col"
                    />
                   <h2>Servicios culturales</h2>
                   <p>La contribución del CBA es el brindar espacios cuidadosamente equipados para la realización de eventos socio-culturales como aporte al crecimiento de nuestra ciudad.</p>

                </Col>
                <Col>
                    <img
                        src={col2}
                        alt="Segunda imagen col"
                    />
                   <h2>Talleres</h2>
                    <p>El fomentar tus capacidades intelectuales y motrices es uno de nuestros objetivos, y con las aulas y laboratorios es posible!</p>
                </Col>
                <Col>
                    <img
                        src={col3}
                        alt="Segunda imagen col"
                    />
                   <h2>Talleres</h2>
                    <p>El fomentar tus capacidades intelectuales y motrices es uno de nuestros objetivos, y con las aulas y laboratorios es posible!</p>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <img
                        src={col4}
                        alt="Segunda imagen col"
                    />
                </Col>
                <Col md={8}>
                    <h2>Cursos de verano e invierno</h2>
                    <h3>
                    🌞 Este verano, potenciá la creatividad de tus hijos con los cursos del CBA Santa Cruz. 💚🎨 Descubrí un mundo de posibilidades artísticas. Incribilos ahora y dejalos explorar su lado creativo. 🚀 Inicio de clases: 11 de diciembre ¡Inscripciones abiertas! 
                    </h3>
                </Col>
                
            </Row>
        </Container>
  )
}
export default Columnas;