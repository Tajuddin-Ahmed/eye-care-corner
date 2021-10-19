import React from 'react';
import { Link } from 'react-router-dom';

const HomeData = (props) => {
    const { id, img, name, description } = props.service;
    const url = `/servicedetails/${id}`;
    return (
        <div className="card col-lg-5 m-4 border-1 rounded-3" >
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <Link className="text-decoration-none btn btn-primary" to={url}> View Details </Link>
            </div>
        </div>
    );
};

export default HomeData;