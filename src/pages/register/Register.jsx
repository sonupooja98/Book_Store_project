import '../register/Register.scss'
import React from 'react';


function Register() {
    return (
        <div className='Register'>
            {/* <p className='inRegister'>Register</p><br></br> */}
            <input className='inputcont' type='text' placeholder='Email Id' helpertext='Email Id' ></input> <br></br>
            <input className='passinputcont' type='password' placeholder='Password' helpertext='password' ></input>
            <br></br>
            <button className='Registerbutton' style={{ backgroundColor: '#A03037' }}> Register </button>
            <p className='Barside'>OR</p>

            <div className='mainButton'>
                <button className='facebutton' style={{ backgroundColor: '#4266B2' }} variant="contained">Facebook</button>
                <button className='googlebutton' variant="contained">Google</button>
            </div>

        </div>
    );
}

export default Register;