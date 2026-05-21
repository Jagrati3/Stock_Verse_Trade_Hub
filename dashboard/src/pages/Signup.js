// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { ToastContainer } from 'react-toastify';
// import { handleError, handleSuccess } from '../pages/utils';

// import "./Auth.css";
// function Signup() {
//     const [signupInfo, setSignupInfo] = useState({
//         name: '',
//         email: '',
//         password: ''
//     })

//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         const copySignupInfo = { ...signupInfo };
//         copySignupInfo[name] = value;
//         setSignupInfo(copySignupInfo);
//     }

//     const handleSignup = async (e) => {
//         e.preventDefault();
//         const { name, email, password } = signupInfo;
//         if (!name || !email || !password) {
//             return handleError('name, email and password are required')
//         }
//         try {
//             const url = "http://localhost:8080/auth/signup";
//             const response = await fetch(url, {
//                 method: "POST",
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(signupInfo)
//             });
//             const result = await response.json();
//             const { success, message, error } = result;
//             if (success) {
//                 handleSuccess(message);
//                 setTimeout(() => {
//                     navigate('/login')
//                 }, 1000)
//             } else if (error) {
//                 const details = error?.details[0].message;
//                 handleError(details);
//             } else if (!success) {
//                 handleError(message);
//             }
//         } catch (err) {
//             handleError(err);
//         }
//     }

//     return (
//         <div className='container'>
//             <h1>Signup</h1>
//             <form onSubmit={handleSignup}>
//                 <div>
//                     <label htmlFor='name'>Name</label>
//                     <input
//                         onChange={handleChange}
//                         type='text'
//                         name='name'
//                         autoFocus
//                         placeholder='Enter your name...'
//                         value={signupInfo.name}
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor='email'>Email</label>
//                     <input
//                         onChange={handleChange}
//                         type='email'
//                         name='email'
//                         placeholder='Enter your email...'
//                         value={signupInfo.email}
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor='password'>Password</label>
//                     <input
//                         onChange={handleChange}
//                         type='password'
//                         name='password'
//                         placeholder='Enter your password...'
//                         value={signupInfo.password}
//                     />
//                 </div>
//                 <button type='submit'>Signup</button>
//                 <span>Already have an account?
//                     <Link to="/login">Login</Link>
//                 </span>
//             </form>
//             <ToastContainer />
//         </div>
//     )
// }

// export default Signup

import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../pages/utils';

import "./Auth.css";

function Signup() {
    const [signupInfo, setSignupInfo] = useState({
        name: '',
        email: '',
        password: ''
    })

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        const copySignupInfo = { ...signupInfo };
        copySignupInfo[name] = value;
        setSignupInfo(copySignupInfo);
    }

    const handleSignup = async (e) => {
        e.preventDefault();
        const { name, email, password } = signupInfo;
        if (!name || !email || !password) {
            return handleError('name, email and password are required')
        }
        try {
            // const url = "http://localhost:3002/auth/signup";
            const url = "https://stock-verse-trade-hub.onrender.com/auth/signup";
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(signupInfo)
            });
            const result = await response.json();
            const { success, message, error } = result;
            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                    navigate('/login')
                }, 1000)
            } else if (error) {
                const details = error?.details[0].message;
                handleError(details);
            } else if (!success) {
                handleError(message);
            }
        } catch (err) {
            handleError(err);
        }
    }

    return (
        <div className='auth-page'>
            <div className='auth-overlay'></div>

            <div className='auth-container'>
                <div className='auth-card'>
                    <h1 className='auth-title'>Signup</h1>
                    <p className='auth-subtitle'>Create your account to get started.</p>

                    <form onSubmit={handleSignup} className='auth-form'>
                        <div className='auth-field'>
                            <label htmlFor='name' className='auth-label'>Name</label>
                            <input
                                className='auth-input'
                                onChange={handleChange}
                                type='text'
                                name='name'
                                autoFocus
                                placeholder='Enter your name'
                                value={signupInfo.name}
                            />
                        </div>

                        <div className='auth-field'>
                            <label htmlFor='email' className='auth-label'>Email</label>
                            <input
                                className='auth-input'
                                onChange={handleChange}
                                type='email'
                                name='email'
                                placeholder='Enter your email'
                                value={signupInfo.email}
                            />
                        </div>

                        <div className='auth-field'>
                            <label htmlFor='password' className='auth-label'>Password</label>
                            <input
                                className='auth-input'
                                onChange={handleChange}
                                type='password'
                                name='password'
                                placeholder='Enter your password'
                                value={signupInfo.password}
                            />
                        </div>

                        <button type='submit' className='auth-btn'>Signup</button>

                        <span className='auth-switch'>
                            Already have an account?
                            <Link to="/login" className='auth-link'> Login</Link>
                        </span>
                    </form>
                </div>
            </div>

            <ToastContainer />
        </div>
    )
}

export default Signup