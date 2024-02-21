import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Banner = () =>{
    
    return (
        <Navbar expand="lg" className="bg-body-tertiary" fixed="bottom">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav className="me-auto">
                    <Nav.Link href="#home">Service</Nav.Link>
                    <Nav.Link href="#link">Chat</Nav.Link>
                    <Nav.Link href="#link">Profile</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
    
    
}

export default Banner;