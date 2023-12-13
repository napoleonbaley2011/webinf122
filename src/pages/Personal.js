import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import personal1 from '../assets/img/personal1.jpeg'
import personal2 from '../assets/img/personal2.jpeg'
import personal3 from '../assets/img/personal3.jpeg'

 const Personal = () => {
  return (
    <Container className="mt-4">
      <h2>Nuestros Docentes</h2>
      <Row className="mt-4">
        <Col md={4}>
          <img
            src={personal1}
            alt="Docente 1"
            className="img-fluid"
          />
           <h3>John Doe</h3>
          <p>John Doe es un profesor altamente calificado con más de 10 años de experiencia en la enseñanza del idioma inglés. Posee certificaciones internacionales y ha trabajado en diversas instituciones educativas, proporcionando a los estudiantes un enfoque dinámico y efectivo para aprender inglés.</p>
        
        </Col>
        <Col md={4}>
          <img
            src={personal2}
            alt="Docente 2"
            className="img-fluid"
          />
          <h3>David Johnson</h3>
          <p>David Johnson es un instructor experimentado con habilidades excepcionales en la enseñanza de inglés. Su enfoque interactivo y su capacidad para adaptarse a diferentes estilos de aprendizaje lo han convertido en un mentor apreciado por sus estudiantes, quienes han alcanzado resultados sobresalientes bajo su tutela.</p>
        
        </Col>
        <Col md={4}>
          <img
            src={personal3}
            alt="Docente 3"
            className="img-fluid"
          />
          <h3>Jane Smith</h3>
          <p>Jane Smith es una docente apasionada por la enseñanza del inglés como segundo idioma. Ha obtenido múltiples certificaciones y ha participado en programas educativos internacionales. Su enfoque centrado en el estudiante y su dedicación han contribuido al éxito de muchos de sus alumnos.</p>
        
        </Col>
      </Row>
    </Container>
  )
}
export default Personal;