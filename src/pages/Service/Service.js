import React from 'react';

const Service = (props) => {
    const { img, name, description } = props.service;
    return (
        <div className="card col-lg-3 m-4 border-1  rounded-3" >
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <button href="#" className="btn btn-primary">View details</button>
            </div>
        </div>
    );
};

export default Service;