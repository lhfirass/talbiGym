import Container from 'react-bootstrap/Container';
import { Button, Card, Col, Row } from 'react-bootstrap';

const Buy = () => {
    return ( 
        <>
            <Container>
                <Row>
                    <Col>
                        <p className="buyTitle">buy now</p>
                        <p className="buyNotes">buy notes</p>
                    </Col>
                    <Col>
                        <img src="" alt="image" />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Buy;