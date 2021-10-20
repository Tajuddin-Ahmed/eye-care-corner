import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const ServiceDetail = () => {
    const [services, setServices] = useState([]);
    const { serviceId } = useParams();
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [services]);
    const service = services.find(service => service.id == serviceId);
    return (
        <div className="card">
            <img width="50%" height="50%" src={service?.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{service?.name}</h5>
                <p className="card-text">{service?.description}</p>
            </div>
        </div>
    );
};

export default ServiceDetail;