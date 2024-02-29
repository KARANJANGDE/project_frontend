import React from "react";
import login from '../components/login.module.css';
import { Link } from "react-router-dom";


const Login = () => {




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
  {/* Login Container */}
  <div style={{ border: '3px solid #000', padding: '4rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
    <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '2rem', color: 'black' }}>Login</h1>
    
    <label htmlFor="username" style={{ fontWeight: 'bold', color: 'black' }}>
      Username
    </label>
    <input
      id="username"
      type="text"
      placeholder="Enter your username"
      style={{
        padding: '0.75rem',
        fontSize: '1rem',
        border: '2px solid #CCCCCC',
        borderRadius: '12px',
        marginBottom: '1rem',
        outlineColor: '#007BFF',
      }}
    />

    <label htmlFor="password" style={{ fontWeight: 'bold', color: 'black' }}>
      Password
    </label>
    <input
      id="password"
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

    <button style={{
      padding: '0.75rem',
      fontSize: '1rem',
      fontWeight: 'bold',
      backgroundColor: '#000',
      color: '#FFF',
      cursor: 'pointer',
      border: 'none',
      borderRadius: '4px',
    }}>
      Submit
    </button>

    <div style={{ textAlign: 'center', marginTop: '1rem' }}>
      <Link to="/signup" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Sign Up</Link>
    </div>
  </div>

  {/* Image Container */}
  <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <img
      src="/assets/img/Residential.jpg" // Adjust the path to your image accordingly
      alt="Login Visual"
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
    />
  </div>
</div>
</div>
  
  );
};

export default Login;
