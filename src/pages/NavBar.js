import { Navbar, Container, Nav } from "react-bootstrap"
import { useState, useEffect } from "react"
import navcon1 from '../assets/img/nav-icon1.svg';
import navcon2 from '../assets/img/nav-icon2.svg';
import navcon3 from '../assets/img/nav-icon3.svg';
import { Outlet, Link } from "react-router-dom";


const NavBar = () => {

    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('home');


    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(true);
            }
        }
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll);
    }, [])


    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }


    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>


                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-text" to="/">Inicio</Link>
                        <Link className="nav-text" to="/virtual">Virtual</Link>
                        <Link className="nav-text" to="/instalaciones">Instalaciones</Link>
                        <Link className="nav-text" to="/biblioteca">Biblioteca</Link>
                        <Link className="nav-text" to="/programas">Programas</Link>
                        <Link className="nav-text" to="/examen">seguridad</Link>
                        <Link className="nav-text" to="/institucion">Institucion</Link>
                        <Link className="nav-text" to="/personal">Personal</Link>
                        <Link className="nav-text" to="/contactos">Contactos</Link>
                        <Link className="nav-text" to="/mas">Mas</Link>
                        <Outlet />
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="#"> <img src={navcon1} alt="" /></a>
                            <a href="#"> <img src={navcon2} alt="" /></a>
                            <a href="#"> <img src={navcon3} alt="" /></a>
                        </div>
                        <button className="vvd" onClick={() => console.log('Conectado')}><span>Iniciar sesion</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}
export default NavBar;