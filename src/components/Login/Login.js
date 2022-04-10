import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h1>Login</h1>
                <div className="input-group">
                    <label htmlFor='email'>Email</label>
                    <input type="email" name="" id="" />
                    <label htmlFor='email'>Password</label>
                    <input type="password" name="" id="" />
                </div>
            </div>
        </div>
    );
};

export default Login;