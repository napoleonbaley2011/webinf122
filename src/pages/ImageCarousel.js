import React from 'react';
import caru1 from '../assets/img/ExampleCarouselImage.jpg';
import caru2 from '../assets/img/caru2.png';
import caru3 from '../assets/img/caru3.jpg';

import { Col, Row } from 'react-bootstrap';
import col1 from '../assets/img/col1.jpg'
import col2 from '../assets/img/col2.webp'
import col3 from '../assets/img/col3.jpg'
import col4 from '../assets/img/col4.jpg'

import { Carousel, Container } from 'react-bootstrap';

const ImageCarousel = () => {
  return (
    <Container>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={caru1}
            alt="Primera imagen"
          />
          {/* Resto del código para esta imagen */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={caru2}
            alt="Segunda imagen"
          />
          {/* Resto del código para esta imagen */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={caru3}
            alt="Otra imagen"
          />
          {/* Resto del código para esta imagen */}
        </Carousel.Item>
        {/* Agregar más imágenes con la misma estructura si es necesario */}
      </Carousel>
      <Row className='my-5 '>
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

  );
};
export default ImageCarousel;