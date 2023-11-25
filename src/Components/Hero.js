import Container from 'react-bootstrap/Container';

const Hero = () => {
    return ( 
        <>
            <Container className='Xhero'>
                <p className="title">title</p>
                <p className="subTitle">subtitle</p>
                <button>action button</button>
            </Container>
        </>
    );
}

export default Hero;