import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className=" notfound">
            <div className="">
                <div className="text-white">
                    <h2 className="">ERROR 404 <br />NOT FOUND</h2>
                    <p>You may have mis-typed the URL. <br /> Or the page has been removed.
                        <br /> Actually, there is nothing to see here...<br />
                        Click on the links below to do something, Thanks!</p>
                </div>
            </div>
        </div>
    );
};

export default NotFound;