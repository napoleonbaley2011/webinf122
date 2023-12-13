import React from 'react'
import Card from 'react-bootstrap/Card';
import insta1 from '../assets/img/insta1.jpg'
import insta2 from '../assets/img/insta2.jpeg'

const Instalaciones = () => {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={insta1} />
        <Card.Body>
          <Card.Text>
            <h4>Descubre nuestras modernas y completas instalaciones diseñadas para potenciar el aprendizaje y el desarrollo integral de nuestros estudiantes. Nuestro colegio cuenta con aulas espaciosas y equipadas con la última tecnología, laboratorios de ciencias, áreas deportivas con canchas polideportivas, gimnasio y espacios verdes que fomentan el esparcimiento y la recreación. Además, disponemos de biblioteca, salas de arte y música, ofreciendo un entorno propicio para el crecimiento académico y personal de nuestros alumnos. ¡Explora nuestras instalaciones y sé parte de nuestra comunidad educativa comprometida con la excelencia
</h4>
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Img variant="bottom" src={insta2} />
        <Card.Body>
          <Card.Text>
            <h4>Nuestro amplio y acogedor patio escolar es el corazón de la diversión y la interacción entre nuestros estudiantes. Diseñado para fomentar la creatividad, el juego y el compañerismo, nuestro espacio al aire libre ofrece un entorno seguro y estimulante. Con áreas verdes, zonas de juego equipadas con columpios, juegos de trepar y toboganes, nuestro patio es el lugar perfecto para que los niños exploren, se diviertan y fortalezcan sus habilidades motoras. Además, contamos con áreas designadas para actividades al aire libre como clases de educación física, eventos culturales y recreativos. ¡En nuestro patio, la diversión y el aprendizaje van de la mano, creando experiencias inolvidables para nuestros alumnos!</h4>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}

export default Instalaciones;