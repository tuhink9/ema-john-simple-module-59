import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    // const navigate = useNavigate();

    const handleNameBlur = event => {
        setName(event.target.value);
    }
    const handleAddressBlur = event => {
        setAddress(event.target.value);
    }
    const handlePhoneNumberBlur = event => {
        setPhoneNumber(event.target.value);
    }
    const handleCreateUser = event => {
        event.preventDefault();
        const shipping = {name, email, address, phoneNumber};
        console.log(shipping); 
    }
    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Shipping Information!</h1>
                <form onSubmit={handleCreateUser} action="">
                <div className="input-group">
                    <label htmlFor='name'>Name</label>
                    <input onBlur={handleNameBlur} type="text" name="text" id="" required/>
                </div>
                <div className="input-group">
                    <label htmlFor='email'>Email</label>
                    <input value={user?.email} readOnly type="email" name="email" id="" required/>
                </div>
                <div className="input-group">
                    <label htmlFor='address'>Address</label>
                    <input onBlur={handleAddressBlur} type="text" name="address" id="" required/>
                </div>
                <div className="input-group">
                    <label htmlFor='phone-number'>Phone Number</label>
                    <input onBlur={handlePhoneNumberBlur} type="text" name="phone-number" id="" required/>
                </div>
                {/* <p style={{color: 'red'}}>{error}</p> */}
                <input className='form-submit' type="submit" value="SignUp" />
                </form>
                <p>
                    Already Have An Account? <Link className='form-link' to='/login'>Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Shipment;