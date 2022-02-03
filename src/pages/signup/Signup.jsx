
import React from 'react';
import '../signup/Signup.scss'
import { userAxios } from '../../services/userSevice';


function Signup() {

    

        const [update, setUpdate] = React.useState({ fullName: ' ', email: ' ', password: ' ', phone: ' ' })
    
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
            userAxios(update).then((res)=>{
                console.log(res)
                
            }).catch((err)=>{
                console.log(err)
                
            })
        }
    return <div>
        <div className='signup'>
           
            <input className='firstname' type='text' placeholder='Full Name' helpertext='Full Name' onChange={changeName} ></input> 
            <input className='emailId' type='email' placeholder='Email Id' helpertext='Email Id' onChange={changeEmail} ></input>
            <input className='password' type='password' placeholder='Password' helpertext='Password' onChange={changePassword} ></input>
            <input className='numsignup' type='number' placeholder='Number' helpertext='Number' onChange={changeNumber} ></input>
           
            <button className='signupButton' style={{ backgroundColor: '#A03037' }}  onClick={submit}> SignUp </button>
        </div>
    </div>;
}

export default Signup;