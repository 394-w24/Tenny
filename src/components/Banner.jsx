import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Banner = () => {

    return(
        <div>
        <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
            <Container>
            <Navbar.Brand href="#home">Tenny</Navbar.Brand>
            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                    Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                    Separated link
                    </NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse> */}
            </Container>
        </Navbar>
        <Navbar expand="lg" className="bg-body-tertiary" fixed="bottom">
            <Container>
            <Navbar.Brand href="#home" placement="end">
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-`} />
                <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-`}
                aria-labelledby={`offcanvasNavbarLabel-expand-`}
                placement="end"
                />
            </Navbar.Brand>
            </Container>
        </Navbar>
        </div>
    )

}

export default Banner;