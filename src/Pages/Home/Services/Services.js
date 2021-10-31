import React, { useEffect, useState } from 'react';
import { CardGroup, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import useCart from '../../../hooks/useCart';
import Service from './Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    const history = useHistory()
    const [cart, setCart] = useCart([])
    useEffect(() => {
        fetch('https://cryptic-beach-46798.herokuapp.com/services/')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    
    const addToCart = (service) => { 
        history.push(`/place-order/${service._id}`)
    };
    console.log(cart);
    return (
        <Container >
            <h2>Services</h2>
            <Row xs={1} md={3} className="g-4">
                {services.map(service => <Service key={service._id} service={service} addToCart={addToCart}></Service>)}
            </Row>
        </Container>
    );
};

export default Services;