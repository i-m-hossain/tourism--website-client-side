
import { Card, Col, Button } from 'react-bootstrap';
const Service = ({ service, addToCart}) => {
    
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={service.img} />
                <Card.Body>
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text>
                        {service.description?.slice(0, 150)}...
                    </Card.Text>
                    <Button variant="primary" onClick={() => addToCart(service)}>Book now</Button>
                </Card.Body>
            </Card>
        </Col>
    )
};

export default Service;