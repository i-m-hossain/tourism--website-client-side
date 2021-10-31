import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import useCart from '../../hooks/useCart';

const PlaceOrder = () => {
    const { user } = useAuth()
    const [service, setService] = useState({})
    const { register, handleSubmit,reset } = useForm();
    const { id } = useParams()
    useEffect(() => {
        axios.get(`https://cryptic-beach-46798.herokuapp.com/services/${id}`)
            .then(res => setService(res.data))
    }, [])
    const onSubmit = data => {
        axios.post("https://cryptic-beach-46798.herokuapp.com/order/add", {userDetails: data, service, status: 0})
        .then(res=> {
            if (res.data.insertedId) {
                alert("Your order is placed");
                reset()
            }
        })
    };
    return (
        <div className="m-5">
            <h2 className="mb-5">Place Order </h2>
            <Row>
                <Col>

                    <Card>
                        <Card.Img variant="top" src={service.img} />
                        <Card.Body>
                            <Card.Title>{service.title}</Card.Title>
                            <Card.Text>
                                {service.description}
                            </Card.Text>
                        </Card.Body>
                    </Card>


                </Col>
                <Col>
                    <h4>User details</h4>
                    
                    <div className="d-flex justify-content-center">
                        <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column w-50">
                            <input defaultValue={user.displayName} {...register("name", { required: true, maxLength: 20 })} className="p-2 mb-2" />
                            <input defaultValue={user.email} {...register("email", { required: true })} className="p-2 mb-2"/>
                            <input {...register("address", { required: true })} placeholder="your address" className="p-2 mb-2"/>
                            <input type="date" {...register("date", { required: true })}  className="p-2 mb-2"/>
                            
                            <input type="number" {...register("phone")} placeholder="your phone number" className="p-2 mb-2" />
                            <input type="submit" value="Place Order" className="p-2 mb-2"/>
                        </form>
                    </div>

                </Col>
            </Row>



        </div>
    );
};

export default PlaceOrder;