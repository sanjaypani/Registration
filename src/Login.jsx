import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {useNavigate} from 'react-router-dom';
export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e)=> {
        e.preventDefault();
        console.log("email : "+ email);
        console.log("password : "+ password);
        navigate('/Contact');
    }

    const onFormSwitch = (e) => {
        e.preventDefault();
        navigate('/Register');
    }

    return (
        <div className="wrapper bg-dark d-flex align-items-center justify-content-center w-100">
            <div className="login">
                <h2 className="mb-3">Login</h2>
                <form className="needs-validation" onSubmit={handleSubmit}>
                        <div className='form-group was-validated mb-2'>
                            <label className='form-label' htmlFor="email">Email</label>
                            <input className='form-control'
                                   required
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}
                                   type="email"
                                   placeholder="your email"
                                   id="email"
                                   name="email"/>
                            <div className="invalid-feedback">
                                Please enter you email id
                            </div>
                        </div>

                        <div className='form-group was-validated mb-2'>
                            <label className='form-label' htmlFor={password}>Password</label>
                            <input className='form-control'
                                   required
                                   value={password}
                                   onChange={(e) => setPassword(e.target.value)}
                                   type="password"
                                   placeholder="*********"
                                   id="password"
                                   name="password"/>
                            <div className="invalid-feedback">
                                Please enter you password
                            </div>
                        </div>

                        <div className='form-group form-check mb-2'>
                            <input className="form-check-input" type="checkbox"></input>
                            <label className='form-check-label' htmlFor='check'>Remember me</label>
                        </div>

                        <button className='btn btn-success w-100' type="submit">Login</button>
                        <button className="btn btn-success block mt-2" onClick={onFormSwitch}>Don't have an account? Register here</button>
                    </form>
            </div>

        </div>


    )
}