import React from 'react';
import '../mainpage/Main.scss'
import Register from '../register/Register';
import Signup from '../signup/Signup';
import book from '../../assest/book.png'

function Main() {

    const [update, setUpdate] = React.useState(true)

    const register = () => {
        setUpdate(!update)
    }
    return (
        <div className='firstContainer'>
            <div className='background'>
                <img className="symbol" src={book} alt="this is logo"></img>
                <p className='symbolname'>online book shopping</p>
                <div className='registersignupcont'>
                    {/* <Login /> */}
                    <span className='reg' onClick={register}>
                        LOGIN
                    </span>
                    <span className='Signup' onClick={register} >
                        SIGNUP
                    </span>
                </div>
                <div className='registerSignupContainer'>
                    {update ? <Register /> : <Signup />}
                </div>
            </div>
        </div>
    )
}

export default Main;

