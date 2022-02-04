
import React from 'react';
import '../signup/Signup.scss'
import { userAxios } from '../../services/userSevice';
import { login } from '../../services/userSevice';
import { Button, TextField } from '@material-ui/core';


function Signup() {

    const fullName = / dsd /;
    const email = / sd/;
    const password = / sd /;
    const number = /  ds /;

    

        const [update, setUpdate] = React.useState({ fullName: ' ', email: ' ', password: ' ', phone: ' ' })


        const [nameHelperText, setNameHelperText] = React.useState("");
        const [nameError, setNameError] = React.useState(false);
        const [emailHelperText, setEmailHelperText] = React.useState("");
        const [emailError, setEmailError] = React.useState(false);
        const [passwordHelperText, setPasswordHelperText] = React.useState("");
        const [passwordError, setPasswordError] = React.useState(false);
        const [numberHelperText, setNumberHelperText] = React.useState("");
        const [numberError, setNumberError] = React.useState(false);
    
        const changeName = (e) => {
            setUpdate({...update,fullName:e.target.value})
        }
        const changeEmail = (e) => {
            setUpdate({...update,email:e.target.value})
        }
        const changePassword = (e) => {
            setUpdate({...update,password:e.target.value})
        }
        const changeNumber = (e) => {
            setUpdate({...update,phone:e.target.value})
        }


        const submit = () => {
            if (fullName.test(update.fullName)) {
                setNameError(false);
                setNameHelperText(" ");
            } else {
                setNameError(true);
                setNameHelperText("Enter name");
            } 
            if (email.test(update.email)) {
                setEmailError(false);
                setEmailHelperText(" ");
            } else {
                setEmailError(true);
                setEmailHelperText("Enter email")
            } 
            if (password.test(update.password)) {
                setPasswordError(false);
                setPasswordHelperText(" ");
            } else {
                setPasswordError(true);
                setPasswordHelperText("Enter password");
            } 
            if (number.test(update.password)) {
                setNumberError(false);
                setNumberHelperText(" ")
            } else {
                setNumberError(true);
                setNumberHelperText("Enter Number")
            }
    
        
            login(update).then((res)=>{
                console.log(res)
                
            }).catch((err)=>{
                console.log(err)
                
            })
        }
    return <div>
        <div className='signup'>
           
        <TextField className='fullName' type='text' variant="outlined" label="First Name"
            onChange={changeName} error={nameError} helperText={nameHelperText}/>
            <TextField className='emailInput' type='email' variant="outlined" label="Email Id"
            onChange={changeEmail} error={emailError} helperText={emailHelperText}/>
            <TextField className='passwordSignup' type='password' variant="outlined" label="Password"
            onChange={changePassword} error={passwordError} helperText={passwordHelperText}/>
            <TextField className='numSignup' type='number' variant="outlined" label="Number"
            onChange={changeNumber} error={numberError} helperText={numberHelperText}/>
            <button className='signupButton' style={{ backgroundColor: '#A03037' }}  onClick={submit}> SignUp </button>
        </div>
    </div>;
}

export default Signup;