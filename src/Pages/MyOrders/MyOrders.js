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
    const handleDelete = (id) => {
        const confirm = window.confirm('Are you sure want to delete?');
        if (confirm) {
            axios.delete(`http://localhost:5000/orders/${id}`)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        
                        const restOrders = myOrders.filter(order=> order._id !== id)
                        console.log(restOrders);
                        console.log(id);
                        setMyOrders(restOrders)
                    }
                })
        }

    }

    return (
        <div>
            <Row md={3} xs={1} className="m-5">
                {
                    myOrders.map(order => <Order order={order} handleDelete={handleDelete} key={order._id} ></Order>)
                }
            </Row>

        </div>
    );
};

export default MyOrders;