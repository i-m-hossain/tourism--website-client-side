import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import Member from './Member';

const Team = () => {
    const [members, setMembers] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/members')
        .then(res => setMembers(res.data))
    }, [])
    return (
        <div>
            <h2>Our creative team</h2>
            <Row sm={2} md={4} className="m-5">
               {
                   members.map(member => <Member member={member} key={member._id}></Member>)
               }
            </Row>
        </div>
    );
};

export default Team;