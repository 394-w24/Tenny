import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import {getCoordinatesForLocation} from '../utilities/geocodeUtils';

const Banner = ({favor_coord, setFavor_coord}) => {

    const [locationName, setLocationName] = useState('');
    // Step 2: Update this state variable as the user types
    const handleInputChange = (event) => {
        setLocationName(event.target.value);
    };
    const onSubmit = async (event) => {
        event.preventDefault();
        // Use locationName state variable's value to get coordinates
        try {
          const coords = await getCoordinatesForLocation(locationName);
          setFavor_coord([coords.lat, coords.lon]);
        } catch (error) {
          console.error('Error fetching coordinates:', error);
        }
    };
    return(
        <div>
        <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
            <Container>
            <Navbar.Brand href="#home">Tenny</Navbar.Brand>
            <Form inline>
                <Row>
                <Col xs="auto">
                    <Form.Control
                    type="text"
                    placeholder="Search"
                    className=" mr-sm-2"
                    value={locationName} // Set the input element's value to our state variable
                    onChange={handleInputChange} // Update the state variable every time the user types
                    />
                </Col>
                <Col xs="auto">
                    <Button onClick={onSubmit} type="submit">Submit</Button>
                </Col>
                </Row>
            </Form>
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