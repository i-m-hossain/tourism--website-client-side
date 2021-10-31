import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';

const Order = ({ order }) => {
    const {service} =order
    console.log(order);
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={service.img} />
                <Card.Body>
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text>
                        {service.description.slice(0,140)}
                    </Card.Text>
                    <Button variant="danger">Delete Order</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Order;