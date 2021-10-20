import React from 'react';
import about from '../../images/banner/team.png'

const About = () => {
    return (
        <div className="d-flex justify-content-center my-5">
            <div>
                <h2 className="text-uppercase mb-5">About us</h2>
                <p>We are ready to help you relating your eye. You may contact us if you issue any problems in your eye.</p>
                <img src={about} alt="" />
            </div>
        </div>
    );
};

export default About;