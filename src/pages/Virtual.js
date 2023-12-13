import React from 'react'
import { Col, Row, Container } from 'react-bootstrap';
import virtual1 from '../assets/img/virtual1.webp'
import virtual2 from '../assets/img/virtual2.png'
import virtual3 from '../assets/img/virtual3.png'
import virtual4 from '../assets/img/virtual4.jpeg'
const Virtual = () => {
  return (
    <Container>
      <Row className='mb-4'>
        <Col>
          <img
            src={virtual1}
            alt="Primera imagen col"
          />
        </Col>
        <Col md={8}>
          <h2>Talleres</h2>
          <h4>SmartClass es un conjunto de recursos para  el aprendizaje el inglés en línea. Trabajamos con las editoriales y organizaciones líderes a nivel mundial para ofrecer cursos en línea de alta calidad a estudiantes de todo el mundo.

            ¿Qué diferencia hay entre la SmartClass (online) y la presencial?

            Respecto a la malla de contenidos de nuestros cursos online y cursos presenciales, podemos señalar que ambas mallas curriculares están basadas en el Marco Común Europeo de Referencia para las Lenguas (MCER), un conjunto de estándares reconocidos internacionalmente que establecen las destrezas y competencias que se pueden esperar de cada nivel de dominio del inglés.

            Sin embargo         </h4>
        </Col>
      </Row>
      <h2>Beneficios de las Clases Virtuales</h2>
      <Row className="mt-4">
        <Col md={4}>
          <img
            src={virtual2}
            alt="Flexibilidad de horario"
            className="img-fluid"
          />
          <h3>Flexibilidad de horario</h3>
          <p>Accede a tus clases desde cualquier lugar y en el momento que más te convenga.</p>
        </Col>
        <Col md={4}>
          <img
            src={virtual3}
            alt="Acceso a recursos digitales"
            className="img-fluid"
          />
          <h3>Acceso a recursos digitales</h3>
          <p>Utiliza una variedad de recursos en línea para mejorar tu aprendizaje.</p>
        </Col>
        <Col md={4}>
          <img
            src={virtual4}
            alt="Interacción global"
            className="img-fluid"
          />
          <h3>Interacción global</h3>
          <p>Conecta con personas de todo el mundo y comparte experiencias culturales.</p>
        </Col>
      </Row>
    </Container>
  )
}
export default Virtual;