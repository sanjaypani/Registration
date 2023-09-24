import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
export const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e)=> {
        e.preventDefault();
        console.log("email : "+ email);
        console.log("password : "+ password);
        console.log("name : "+ name);
    }

    const onFormSwitch = (e) => {
        e.preventDefault();
        navigate('/');
    }

    return (

        <div className="wrapper bg-dark d-flex align-items-center justify-content-center w-100">
            <div className="login">
                <h2 className='mb-3'>Register</h2>
                <form className="register-form" onSubmit={handleSubmit}>
                    <div className='form-group mb-2'>
                        <label htmlFor="Full name">Full Name</label>
                        <input className='form-control'
                               value={name}
                               onChange={(e) => setName(e.target.value)}
                               type="text" placeholder="your full name"
                               id="name"
                               name="name"/>
                    </div>

                    <div className='form-group mb-2'>
                        <label className='form-label' htmlFor="email">Email</label>

                        <input className='form-control'
                               value={email}
                               onChange={(e) => setEmail(e.target.value)}
                               type="email" placeholder="your email"
                               id="email"
                               name="email"/>
                    </div>

                    <div className='form-group mb-2'>
                        <label htmlFor={password}>Password</label>

                        <input className='form-control'
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}
                               type="password"
                               placeholder="*********"
                               id="password"
                               name="password"/>
                    </div>
                    <button className="btn btn-success w-100" type={"submit"}>Register</button>
                </form>
                <button className="btn btn-success block mt-2" onClick={onFormSwitch}>Already have an account? Login here</button>
            </div>
        </div>
    )
}