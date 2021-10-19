import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const ServiceDetail = () => {
    const [services, setServices] = useState([]);
    const { serviceId } = useParams();
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, []);
    // console.log(service);
    return (
        <div>
            <h1>Details</h1>
            {/* <p>{service?.name}</p> */}
        </div>
    );
};

export default ServiceDetail;