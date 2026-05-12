// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { ToastContainer } from 'react-toastify';
// import { handleError, handleSuccess } from '../pages/utils';

// import "./Auth.css";
// import "../components/Dashboard.css";

// function Login() {
//     const [loginInfo, setLoginInfo] = useState({
//         email: '',
//         password: ''
//     })

//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         const copyLoginInfo = { ...loginInfo };
//         copyLoginInfo[name] = value;
//         setLoginInfo(copyLoginInfo);
//     }

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         const { email, password } = loginInfo;
//         if (!email || !password) {
//             return handleError('email and password are required')
//         }
//         try {
//             const url = "http://localhost:8080/auth/login";
//             const response = await fetch(url, {
//                 method: "POST",
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(loginInfo)
//             });
//             const result = await response.json();
//             const { success, message, jwtToken, name, error } = result;
//             if (success) {
//                 handleSuccess(message);
//                 localStorage.setItem('token', jwtToken);
//                 localStorage.setItem('loggedInUser', name);
//                 setTimeout(() => {
//                     navigate('/')
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
//             <h1>Login</h1>
//             <form onSubmit={handleLogin}>
//                 <div>
//                     <label htmlFor='email'>Email</label>
//                     <input
//                         onChange={handleChange}
//                         type='email'
//                         name='email'
//                         placeholder='Enter your email...'
//                         value={loginInfo.email}
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor='password'>Password</label>
//                     <input
//                         onChange={handleChange}
//                         type='password'
//                         name='password'
//                         placeholder='Enter your password...'
//                         value={loginInfo.password}
//                     />
//                 </div>
//                 <button type='submit'>Login</button>
//                 <span>Does't have an account?
//                     <Link to="/signup">Signup</Link>
//                 </span>
//             </form>
//             <ToastContainer />
//         </div>
//     )
// }

// export default Login
// ......................................................................
// ......................................................................
// ......................................................................
// ......................................................................
// ......................................................................
// ......................................................................
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../pages/utils';

import "./Auth.css";

function Login() {
    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        const copyLoginInfo = { ...loginInfo };
        copyLoginInfo[name] = value;
        setLoginInfo(copyLoginInfo);
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        const { email, password } = loginInfo;
        if (!email || !password) {
            return handleError('email and password are required')
        }
        try {
            const url = "http://localhost:3002/auth/login";
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginInfo)
            });
            const result = await response.json();
            const { success, message, jwtToken, name, error } = result;
           if (success) {
    handleSuccess(message);

    localStorage.setItem('token', jwtToken);
    localStorage.setItem('loggedInUser', name);

    window.dispatchEvent(new Event("storage")); // 🔥 IMPORTANT

    navigate("/");
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
                    <h1 className='auth-title'>Login</h1>
                    <p className='auth-subtitle'>Welcome back! Please login to your account.</p>

                    <form onSubmit={handleLogin} className='auth-form'>
                        <div className='auth-field'>
                            <label htmlFor='email' className='auth-label'>Email</label>
                            <input
                                className='auth-input'
                                onChange={handleChange}
                                type='email'
                                name='email'
                                placeholder='Enter your email'
                                value={loginInfo.email}
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
                                value={loginInfo.password}
                            />
                        </div>

                        <button type='submit' className='auth-btn'>Login</button>

                        <span className='auth-switch'>
                            Doesn't have an account?
                            <Link to="/signup" className='auth-link'> Signup</Link>
                        </span>
                    </form>
                </div>
            </div>

            <ToastContainer />
        </div>
    )
}

export default Login