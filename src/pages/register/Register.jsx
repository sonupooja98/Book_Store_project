import '../register/Register.scss'
import React from 'react';
import { login } from '../../services/userSevice';
import { Button, TextField } from '@material-ui/core';
import { useHistory } from "react-router-dom";





function Register() {
    let history= new useHistory();


    const email = /sonapatila1998@gmail.com/;
    const password = /Sona@1998/;
    const [update, setUpdate] = React.useState({ email: ' ', password: ' ' })

    const [emailHelperText, setEmailHelperText] = React.useState("")
    const [passwordHelperText, setPasswordHelperText] = React.useState("");
    const [emailError, setEmailError] = React.useState(false);
    const [passwordError, setPasswordError] = React.useState(false);




    

    const changeemail = (e) => {
        setUpdate({ ...update, email: e.target.value })
    }
    const changepassword = (e) => {
        setUpdate({ ...update, password: e.target.value })
    }
    const submit = () => {
        console.log("is it working")
        if (email.test(update.email)) {
            console.log("If working")
            setEmailError(false);
            setEmailHelperText(" ");
        } else {
            console.log("Error")
            setEmailError(true);
            setEmailHelperText("Enter an email")
        }
        if (password.test(update.password)) {
            setPasswordError(false);
            setPasswordHelperText(" ")
        } else {
            setPasswordError(true);
            setPasswordHelperText("Enter a Password")
        }


        
        login(update).then((res) => {
            console.log(res)

            localStorage.setItem('token', res.data.result.accessToken)
            console.log(localStorage.setItem('token', res.data.result.accessToken))
            history.push("/home")

        }).catch((err) => {
            console.log(err)

        })
    }



    return (
        <div className='Register'>

            <TextField style={{ backgroundColor: 'white' }} className="emailInput" type='text' id="outlined-email" label="Email Id" variant="outlined"
                onChange={changeemail} error={emailError} helperText={emailHelperText} />
           
            <TextField style={{ backgroundColor: 'white' }} className="passInput" type='password' id="outlined-password" label="Password" variant="outlined"
                onChange={changepassword} error={passwordError} helperText={passwordHelperText} />
            <br></br>
            
            <button className='Registerbutton' style={{ backgroundColor: '#A03037' }} onClick={submit}> Register </button>
            <p className='Barside'>OR</p>

            <div className='mainButton'>
                <button className='facebutton' style={{ backgroundColor: '#4266B2' }} variant="contained">Facebook</button>
                <button className='googlebutton' variant="contained">Google</button>
            </div>

        </div>
    );
}


export default Register;