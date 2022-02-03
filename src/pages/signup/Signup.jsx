
import React from 'react';
import '../signup/Signup.scss'


function Signup() {
    return <div>
        <div className='signup'>
           
            <input className='firstname' type='text' placeholder='Full Name' helpertext='Full Name' ></input> 
            <input className='emailId' type='email' placeholder='Email Id' helpertext='Email Id' ></input>
            <input className='password' type='password' placeholder='Password' helpertext='Password' ></input>
            <input className='numsignup' type='number' placeholder='Number' helpertext='Number' ></input>
           
            <button className='signupButton' style={{ backgroundColor: '#A03037' }}> SignUp </button>
        </div>
    </div>;
}

export default Signup;