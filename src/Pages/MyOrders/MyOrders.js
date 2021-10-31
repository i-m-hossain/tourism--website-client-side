import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Order from './Order';

const MyOrders = () => {
    const { user } = useAuth()
    const [orders, setOrders] = useState([])
    const [myOrders, setMyOrders] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/orders')
            .then(res => {
                setOrders(res.data)
            })
    }, [])
    useEffect(() => {
        const myOrders = orders.filter(order => order.userDetails.email === user.email)
        setMyOrders(myOrders)
    }, [orders])

    return (
        <div>
            <Row md={3} xs={1} className="m-5">
                {
                    myOrders.map(order => <Order order={order} key={order._id} ></Order>)
                }
            </Row>

        </div>
    );
};

export default MyOrders;