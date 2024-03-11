import React, { useState } from "react";
import login from '../components/login.module.css';
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";


const Login = () => {
 
  
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  


  const attemptLogin = async (email, password, isSecondAttempt = false) => {
    const body = isSecondAttempt
      ? { AdminEmail: email, AdminPass: password }
      : { UserEmail: email, UserPass: password };
    const endpoint = isSecondAttempt
      ? 'http://localhost:4000/api2/admin/login'
      : 'http://localhost:4000/api/user/login';

    try {
      const response = await axios.post(endpoint, body);
      console.log("Response:", response.data);
      localStorage.setItem('id', response.data.data.id);
      localStorage.setItem('role', response.data.data.role);
      
      if (response.data.data.role === 'user') {
        navigate("/user/userdashboard");
      } else if (response.data.data.role === 'admin') {
        navigate("/admin/admindashboard");
      }
    } catch (error) {
      if (!isSecondAttempt) {
        // If first attempt fails, try the other role
        console.log('First attempt failed, trying other role...');
        attemptLogin(email, password, true);
      } else {
        // If second attempt also fails, report back to user
        console.log('Error in Login:', error);
        alert('Login failed: ' + error.message);
      }
    }
  };

  const onSubmit = (data) => {
    attemptLogin(data.email, data.password);
  };

  return (

  
//   <div className={login.loginContent}>
//   <div className={login.loginContainer}>
//     <div className={login.loginCard}>
//       <div className={login.cardHeader}>
//         <h3 className="card-title">Login</h3>
//       </div>
//       <div className="card-body">
//         <form>
//           <div className={login.formGroup}>
//             <label>Username or Email</label>
//             <input
//               type="text"
//               className={login.formControl}
//               placeholder="Enter username or email"
//             />
//           </div>
//           <div className={login.formGroup}>
//             <label>Password</label>
//             <input
//               type="password"
//               className={login.formControl}
//               placeholder="Password"
//             />
//           </div>
//           <button type="submit" className={login.loginBtn}>
//             Log In
//           </button>
//           <div className={login.signUpMessage}>
//   Not a member? <Link to="/signup"className={login.signUpLink} >Sign up</Link>
// </div>
//         </form>
//       </div>
//     </div>
//   </div>
// </div>

<div style={{ backgroundColor: '#FFFAF0', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
<div style={{ display: 'flex', maxWidth: '800px', borderRadius: '8px', overflow: 'hidden' }}>
<form onSubmit={handleSubmit(onSubmit)} style={{ border: '3px solid #000', padding: '4rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '2rem', color: 'black' }}>Login</h1>

          <input
            {...register('email', {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email address",
              },
            })}
            placeholder="Enter your email"
            style={{
              padding: '0.75rem',
              fontSize: '1rem',
              border: '2px solid #CCCCCC',
              borderRadius: '12px',
              marginBottom: '1rem',
              outlineColor: '#007BFF',
            }}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}


          <input
            {...register('password', {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must have at least 6 characters",
              },
            })}
            type="password"
            placeholder="Enter your password"
            style={{
              padding: '0.75rem',
              fontSize: '1rem',
              border: '2px solid #CCCCCC',
              borderRadius: '12px',
              marginBottom: '1rem',
              outlineColor: '#007BFF',
            }}
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}

          <button
            type="submit"
            style={{
              padding: '0.75rem',
              fontSize: '1rem',
              fontWeight: 'bold',
              backgroundColor: '#000',
              color: '#FFF',
              cursor: 'pointer',
              border: 'none',
              borderRadius: '4px',
            }}
          >
            Submit
          </button>
          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <Link to="/signup" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Haven't Register yet</Link>
          </div>
        </form>


  <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <img
      src="/assets/img/Residential.jpg"
      alt="Login Visual"
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
    />
  </div>
</div>
</div>
  );
};

export default Login;
