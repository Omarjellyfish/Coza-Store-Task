import { useState } from 'react'
import './Login.css'
import SignUp from './SignUp';
import { useNavigate } from 'react-router-dom'; 
import { useContext } from "react";
import { LoginContext } from '../../Context/LoginContext'
export default function Login(){
    const {setIsLoggedIn } = useContext(LoginContext);
    const [tEmail,setTEmail]=useState('')
    const [tPassword,setTPassword]=useState('')
    const [isLogin,setIsLogin]=useState(true)
    const [loginError,setLoginError]=useState('')

    const Navigate=useNavigate();

    function handleLogin(e){
        e.preventDefault()

        const realEmail = localStorage.getItem('userEmail');
        const realPassword = localStorage.getItem('userPassword');

        if(tEmail==realEmail && realPassword==tPassword){
            setIsLoggedIn(true);
            Navigate('/')
        }else{
            setLoginError('Invalid email or password')
            localStorage.setItem('loginStatus', false);
        }
    }
    return(
        <>
        {isLogin ?(
            <div className='Login'>
                <form className='LoginForm' onSubmit={handleLogin}>
                    <h3>Login Now</h3>
                    <div className="input">
                        <div className="input-section">
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" placeholder='Enter your email' onChange={(e)=>{setTEmail(e.target.value)}}/>
                        </div>
                        <div className="input-section">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" placeholder='Enter your password' onChange={(e)=>{setTPassword(e.target.value)}}/>
                        </div>
                        <div className="input-section">
                        {loginError && <span className="error">{loginError}</span>}
                            <button className="submit-btn">Log in</button>
                        </div>
                        <div className="input-section">
                            <h3>Don't have an account</h3>
                            <div className='goto-signup-btn' onClick={()=>setIsLogin(false)}>SignUp</div>
                        </div>
                    </div>
                </form>
            </div>
            ):<SignUp isLogin={isLogin} setIsLogin={setIsLogin}/>}
        </>
    )
}