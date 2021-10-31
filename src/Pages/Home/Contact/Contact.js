import React from 'react';

const Contact = () => {
    return (
        <div className="bg-light p-4 mt-5">
            <h2 className="mb-4">Let’s Get it Started!</h2>
            <form className="d-flex flex-column justify-content-center align-items-center ">
                <div className="d-flex justify-content-center">
                    <div className="d-flex flex-column align-items-start me-3">
                        <label htmlFor="" >Name:</label> <br />
                        <input type="text" placeholder="your name" className="p-2 mb-2" />
                    </div>
                    <div className="d-flex flex-column align-items-start">
                        <label htmlFor="" >phone number:</label> <br />
                        <input type="text" placeholder="your phone number" className="p-2 mb-2" />
                    </div>
                    
                </div>
                <div className="d-flex flex-column align-items-start">
                    <label htmlFor="" >Message:</label> <br />
                    <textarea name="" id="" cols="53" rows="5"></textarea>
                </div>
                <input type="submit" value="CALL ME BACK" className="bg-warning rounded-pill px-5 py-2 border-0 m-2 " />
            </form>
        </div>
    );
};

export default Contact;