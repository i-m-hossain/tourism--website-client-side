import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import Member from './Member';

const Team = () => {
    const [members, setMembers] = useState([])
    useEffect(()=>{
        axios.get('https://cryptic-beach-46798.herokuapp.com/members')
        .then(res => setMembers(res.data))
    }, [])
    return (
        <div className="mt-5">
            <h2 className="mb-4">Our creative team</h2>
            <Row sm={2} md={4} className="mx-5">
               {
                   members.map(member => <Member member={member} key={member._id}></Member>)
               }
            </Row>
        </div>
    );
};

export default Team;