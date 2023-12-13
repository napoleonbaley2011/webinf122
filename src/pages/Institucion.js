import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
const Institucion = () => {
  return (
    <Container className="mt-4">
      <h2>Nuestra Institución</h2>
      <Row className="mt-4">
        <Col>
          <h3>¿Quiénes somos?</h3>
          <p>Somos un colegio comprometido con la enseñanza del idioma inglés, ofreciendo un entorno educativo de calidad para nuestros estudiantes.</p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h3>Nuestro Método de Enseñanza</h3>
          <p>Utilizamos un enfoque comunicativo y dinámico para enseñar inglés, centrado en la práctica constante, la interacción y el desarrollo de habilidades lingüísticas.</p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h3>Nuestra Filosofía</h3>
          <p>Nuestro objetivo es no solo enseñar inglés, sino también fomentar la confianza, la creatividad y el pensamiento crítico en nuestros estudiantes para que puedan ser ciudadanos del mundo.</p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h3>Cómo Trabajamos</h3>
          <p>Trabajamos en un entorno colaborativo y motivador, con profesores capacitados y recursos modernos para garantizar una experiencia educativa enriquecedora.</p>
        </Col>
      </Row>
    </Container>
  )
}
export default Institucion;