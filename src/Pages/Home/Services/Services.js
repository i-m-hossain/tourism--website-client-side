import React, { useEffect, useState } from 'react';
import { CardGroup, Container, Row, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router';
import useCart from '../../../hooks/useCart';
import Service from './Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const history = useHistory()
    useEffect(() => {
        fetch('https://cryptic-beach-46798.herokuapp.com/services/')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setIsLoading(false)
            })

    }, [])

    const addToCart = (service) => {
        history.push(`/place-order/${service._id}`)
    };
    return (
        <Container className="mt-5">
            <h2 className="mb-4">Services</h2>
            {
                !isLoading ?
                    <Row xs={1} md={3} className="g-4">
                        {services.map(service => <Service key={service._id} service={service} addToCart={addToCart}></Service>)}
                    </Row> 
                    :
                    <Spinner animation="border" variant="warning" />
            }

        </Container>
    );
};

export default Services;