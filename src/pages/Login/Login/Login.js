import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useFirebase from '../../../hooks/useFirebase';
const Login = () => {
    const { signInUsingGoogle, processLogin, toggleLogin, isLogin, handleNameChange, handleRegistration, handleEmailChange, handlePasswordChange, error } = useAuth();
    return (
        <div className="d-flex justify-content-center mt-5">
            <div className="w-25 border p-2 py-5 rounded-3 shadow-lg bg-white">
                <h2 className="text-primary"> </h2>
                <h2 className="text-primary">Please {isLogin ? "Login" : "Register"}</h2>
                <form onSubmit={handleRegistration}>
                    {!isLogin && <div className="form-floating mb-3">
                        <input onBlur={handleNameChange} type="text" className="form-control" id="floatingInput" placeholder="name@example.com" required />
                        <label htmlFor="floatingInput">Full Name</label>
                    </div>}
                    <div className="form-floating mb-3">
                        <input onBlur={handleEmailChange} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input onBlur={handlePasswordChange} type="password" className="form-control" id="floatingPassword" placeholder="Password" required />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div class="form-check">
                        <input onChange={toggleLogin} class="form-check-input" type="checkbox" id="gridCheck1" />
                        <label class="form-check-label" htmlFor="gridCheck1"> Already Registered?</label>
                    </div>
                    <div className="form-floating mt-3">
                        <button className="btn btn-primary px-3">{isLogin ? "Login" : "Register"} With Email</button>
                    </div>

                </form>
                <div>-------Or-------------</div>
                <button onClick={signInUsingGoogle} className="btn btn-primary">Login With Google</button>

                <div className="text-danger">
                    {error}
                </div>
            </div>

        </div>
    );
};

export default Login;