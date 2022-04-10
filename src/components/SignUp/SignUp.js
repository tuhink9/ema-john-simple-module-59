import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'

const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Sign Up</h1>
                <form action="">
                <div className="input-group">
                    <label htmlFor='email'>Email</label>
                    <input type="email" name="email" id="" required/>
                </div>
                <div className="input-group">
                    <label htmlFor='password'>Password</label>
                    <input type="password" name="password" id="" required/>
                </div>
                <div className="input-group">
                    <label htmlFor='confirm-password'>Confirm Password</label>
                    <input type="password" name="confirm-password" id="" required/>
                </div>
                <input className='form-submit' type="submit" value="SignUp" />
                </form>
                <p>
                    Already Have An Account? <Link className='form-link' to='/login'>Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;