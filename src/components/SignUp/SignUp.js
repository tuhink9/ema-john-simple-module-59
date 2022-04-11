import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css'

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleconfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }
    if (user){
        navigate('/shop');
    }
    const handleFormOnSubmit = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Your password did not match!');
            return;
        }
        if (password.length < 8) {
            setError('Password must be atleast 8 characters');
            return;
        }
            createUserWithEmailAndPassword(email, password)
         
    }
    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Sign Up</h1>
                <form onSubmit={handleFormOnSubmit} action="">
                <div className="input-group">
                    <label htmlFor='email'>Email</label>
                    <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>
                </div>
                <div className="input-group">
                    <label htmlFor='password'>Password</label>
                    <input onBlur={handlePasswordBlur} type="password" name="password" id="" required/>
                </div>
                <div className="input-group">
                    <label htmlFor='confirm-password'>Confirm Password</label>
                    <input onBlur={handleconfirmPasswordBlur} type="password" name="confirm-password" id="" required/>
                </div>
                <p style={{color: 'red'}}>{error}</p>
                <input className='form-submit' type="submit" value="SignUp" />
                </form>
                <p>
                    Already Have An Account? <Link className='form-link' to='/login'>Login</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;