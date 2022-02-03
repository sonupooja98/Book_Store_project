import '../register/Register.scss'
import React from 'react';
import { login } from '../../services/userSevice';


function Register() {
         
        const [update, setUpdate] = React.useState({email: ' ', password: ' ' })
    
        const changeemail = (e) => {
            setUpdate({...update,email:e.target.value})
        }
        const changepassword = (e) => {
            setUpdate({...update,password:e.target.value})
        }

    

        const submit = () => {
            login(update).then((res)=>{
                console.log(res)
                
            }).catch((err)=>{
                console.log(err)
                
            })
        }
  

        return (
            <div className='Register'>
                {/* <p className='inRegister'>Register</p><br></br> */}
                <input className='inputcont' type='text' placeholder='Email Id' helpertext='Email Id' onChange={changeemail}></input> <br></br>
                <input className='passinputcont' type='password' placeholder='Password' helpertext='password' onChange={changepassword}></input>
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