import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return ( 
        <Navbar expand="lg" className="bg-body-tertiary bg-black p-0">
                <Container className='bg-black'>
                    <img className='Xlogo' src="pictures/logo.png" alt="logo" />
                    <Navbar.Brand href="#home" className='font-weight-bold'>TALBI GYM</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">About</Nav.Link>
                        <Nav.Link href="#link">Who</Nav.Link>
                        <Nav.Link href="#home">Testemonial</Nav.Link>
                        <Nav.Link href="#link">Buy</Nav.Link>
                        <Nav.Link href="#home">Contact</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
        </Navbar>
    );
}

export default Header;