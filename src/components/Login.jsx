import React, { useState } from "react";
import login from '../components/login.module.css';
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";


const Login = () => {
 
  // const navigate = useNavigate();
  // const { register, handleSubmit, formState: { errors } } = useForm();
  // const onSubmit = async data => {
  //   try {
  //     const body = {
  //       UserEmail: data.email,
  //       UserPass: data.password,
  //     };

  //     const response = await axios.post('http://localhost:4000/api/user/login', body);

  //     console.log("Response:", response.data);
      
  //     localStorage.setItem('token', response.data.data);
  //     navigate("/user/userdashboard");
  //   } catch (error) {
  //     console.log('Error in Login:', error);
  //     alert('Login failed: ' + error.message);
  //   }
  // };

  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const isAdminLogin = false; // Manually toggle this based on your needs

  const onSubmit = async (data) => {
    try {
      const body = isAdminLogin
        ? { AdminEmail: data.email, AdminPass: data.password }
        : { UserEmail: data.email, UserPass: data.password };

      const endpoint = isAdminLogin
        ? 'http://localhost:4000/api2/admin/login'
        : 'http://localhost:4000/api/user/login';

      const response = await axios.post(endpoint, body);

      console.log("Response:", response.data);
      
      localStorage.setItem('id', response.data.data.id);
      
      if (response.data.role === 'admin') {
        navigate("/admin/admindashboard");
      } else {
        navigate("/user/userdashboard");
      }
    } catch (error) {
      console.log('Error in Login:', error);
      alert('Login failed: ' + error.message);
    }
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
            {...register('email', { required: true })}
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
          {errors.email && <span>This field is required</span>}

          <input
            {...register('password', { required: true })}
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
          {errors.password && <span>This field is required</span>}

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
