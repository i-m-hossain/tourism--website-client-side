import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../images/slider (1).png'
import img2 from '../../../images/slider (2).jpg'
import img3 from '../../../images/slider (3).jpg'

const Banner = () => {
   
        const [index, setIndex] = useState(0);

        const handleSelect = (selectedIndex, e) => {
            setIndex(selectedIndex);
        };

        return (
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Masquarade parties</h3>
                        <p>Our facility is the best place to host a birthday party in Los Angeles.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Annevarseries</h3>
                        <p>From birthdays to anniversaries, theme parties to religious gatherings.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Birthday Parties</h3>
                        <p>
                            Decorations are mostly theme-based and are typically based on rich, traditional colors.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
 }
export default Banner;