import React from 'react';
import { Card, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

const Member = ({member}) => {
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={member.image_url} />
                <ListGroup className="list-group-flush">
                    <ListGroupItem>{member.name}</ListGroupItem>
                    <ListGroupItem>{member.role}</ListGroupItem>
                </ListGroup>
            </Card>
        </Col>
    );
};

export default Member;