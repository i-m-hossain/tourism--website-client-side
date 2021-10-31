import axios from 'axios';
import React, { useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';

const ServiceItem = ({ service, index, handleDeleteService }) => {
    return (
        <tr>
             <td>{index + 1}</td>
            <td>{service.title}</td>
            <td><Button variant="danger" onClick={() => handleDeleteService(service._id)}>Delete</Button></td>
        </tr>
    );
};

export default ServiceItem;