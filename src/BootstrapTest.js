import {Container,Row,Col,Carousel,Form,Button}from 'react-bootstrap'

export  const BootstrapTest =(props)=>{
    return(
        <Container className='mt-5 mb-5'>
        <Row>
            <Col>
           {props.left}
            </Col>

            <Col>
            {props.right}

            </Col>
            </Row>
       </Container>
    )
}