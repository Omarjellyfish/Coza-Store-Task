import { useState, useContext } from 'react';
import './SignUp.css';

export default function SignUp({isLogin,setIsLogin}) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    function handleSignUP(e) {
        e.preventDefault();

        let isValid = true;
        if (!emailPattern.test(Email)) {
            setEmailError('Invalid email format.');
            isValid = false;
        } else {
            setEmailError('');
        }

        if (!passwordPattern.test(Password)) {
            setPasswordError('Password must be at least 8 characters long, include 1 capital letter, 1 small letter, 1 number, and 1 special character.');
            isValid = false;
        } else {
            setPasswordError('');
        }

        if (isValid) {
            localStorage.setItem('userEmail', Email);
            localStorage.setItem('userPassword', Password);

            setIsLogin(true);
        }
    }

    return (
        <div className="SignUp">
            Sign Up
            <form className='SignUpForm' onSubmit={handleSignUP}>
                <div className="sinput">
                    <div className="input-section">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            id="email"
                            placeholder='Enter your email'
                            onChange={(e) => setEmail(e.target.value)}
                            value={Email}
                        />
                        {emailError && <span className="error">{emailError}</span>}
                    </div>
                    <div className="input-section">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder='Enter your password'
                            onChange={(e) => setPassword(e.target.value)}
                            value={Password}
                        />
                        {passwordError && <span className="error">{passwordError}</span>}
                    </div>
                    <div className="input-section">
                        <button className="submit-btn" type="submit">Submit</button>
                    </div>
                    <div className="input-section">
                        <div className='goto-signup-btn' onClick={() => setIsLogin(true)}>Go to Login</div>
                    </div>
                </div>
            </form>
        </div>
    );
}
