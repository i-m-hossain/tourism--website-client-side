import axios from 'axios';
import React, { useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';

const OrderItem = ({ order, index, handleDeleteOrder }) => {
    const [status, setStatus] = useState(order.status)
    const [isLoading, setIsLoading] = useState(false)
    console.log('initial status', status);
    const handleUpdateOrderStatus = (id) => {
        setIsLoading(true)
        axios.put(`http://localhost:5000/orders/update/${id}`, { status: !status })
            .then(res => {
                console.log(res.data);
                console.log('final status', status);
                if (res.data.modifiedCount) {
                    setStatus(!status)
                    setIsLoading(false)
                }
            })
    }
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{order.service.title}</td>
            <td><img src={order.service.img} height="60px" width="60" alt="" /></td>
            <td>
                <Button variant="warning" onClick={() => handleUpdateOrderStatus(order._id)}>
                    {isLoading ?
                        <Spinner animation="border" size="sm" /> :
                        <span>{status ? "Approved" : "Pending"}</span>
                    }

                </Button> </td>
            <td><Button variant="danger" onClick={() => handleDeleteOrder(order._id)}>Delete</Button></td>
        </tr>
    );
};

export default OrderItem;