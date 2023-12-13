import React from 'react'
import { Container, Card } from 'react-bootstrap';
const Mas = () => {
  return (
    <Container className="mt-4">
      <h2>Acerca de</h2>
      <Card>
        <Card.Body>
          <Card.Title>Datos Curiosos</Card.Title>
          <Card.Text>
            <ul>
              <li>La institución fue fundada en el año XXXX por [Nombre del Fundador] con el propósito de [Propósito de la Institución].</li>
              <li>El primer edificio de la institución se construyó utilizando [Material/es] proveniente/s de [Origen del Material].</li>
              <li>La primera clase impartida fue sobre [Tema de la Clase] y tuvo lugar en [Lugar donde se llevó a cabo].</li>
              <li>El nombre de la institución fue inspirado por [Razón de la Inspiración del Nombre].</li>
              <li>La institución ha crecido desde sus inicios, expandiendo su oferta educativa a [Número de Programas/Areas] áreas diferentes de estudio.</li>
            </ul>
            <p>Estos son solo algunos de los datos curiosos sobre la historia y creación de nuestra institución. ¡Estamos orgullosos de nuestra trayectoria y continuamos buscando la excelencia en la educación!</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Mas;