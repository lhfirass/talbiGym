import Container from 'react-bootstrap/Container';
import { Row, Col, Button } from 'react-bootstrap';

const Hero = () => {
    return ( 
        <>
        <div className="Xcontainer">
        <Container className="Xhero">
                <h2 className="Xtitle t-w">
                    Your Results. <br />
                    Your Way.
                </h2>
                <p className="XsubTit t-w">
                    $0 intiation
                    use any time, any where and start working on your health before
                    it's too late. @tabliGym
                </p>
                <div className="Xaction">
                    <button className='Xbtn1'>Buy it Now.</button>
                    <button className='Xbtn2'>watch how it work </button>
                </div>
            </Container>
        </div>
        </>
    );
}

export default Hero;