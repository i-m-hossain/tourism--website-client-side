import React from 'react';
import { Col, Row } from 'react-bootstrap';
import logo from '../../../images/bottom-logo.png'

const Footer = () => {
    return (
        <div className="px-2 mx-1">
            <Row className="bg-dark text-light p-5" >
                <Col xs={6} md={4}>
                    <div>
                        <img src={logo} alt="" />
                        <p className="text-left">Happy Events and Entertainment is considered Top Event Management Companies existing here in San Francisco. We are a rapidly uprising company and have been striving through thick and thin in order to develop ourselves as the Event Event Planner San Francisco and also ensure to reach the highest peak of perfection in every work and field we take on. </p>
                    </div>
                </Col>
                <Col xs={3} md={4}>
                    <h3>USEFUL LINKS</h3>
                    <div className="ms-5 p-5 d-flex flex-column align-items-start">
                        <li >My Orders</li>
                        <li>Manage All Orders</li>
                    </div>
                </Col>
                <Col xs={3} md={4}>
                    <h3>CONTACT INFO</h3>
                    <div className="ms-5 p-5 d-flex flex-column align-items-start">
                        <div>
                            <p>
                                San Francisco, CA 94102, US
                            </p>
                        </div>
                        <div>
                            <p>
                                events@example.com
                            </p>
                        </div>
                        <div>
                            <p>
                                +1 000 123 1234
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Footer;