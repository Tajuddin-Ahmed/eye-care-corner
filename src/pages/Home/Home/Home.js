import React, { useEffect, useState } from 'react';
import useServices from '../../../hooks/useServices';
import banner from '../../../images/banner/banner6.png'
import Services from '../../Services/Services';
import HomeData from './HomeData';
import './Home.css';


const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    const servicesForHome = services.filter(service => service.id < 5);
    return (
        <div>
            <div className="row">
                <div className="col-lg-12">
                    <img width="100%" src={banner} alt="" />
                </div>
            </div>
            <div className="mt-0">
                <h1>Our Services</h1>
                <div className="row g-4 ms-5">
                    {
                        servicesForHome.map(service => <HomeData
                            key={service.id}
                            service={service}
                        ></HomeData>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;