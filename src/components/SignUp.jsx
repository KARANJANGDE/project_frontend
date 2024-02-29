import React from 'react'
import registration from './signup.module.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
//     <div>
//       <>
//   <div className={registration.Content}>
//     <div className={registration.Container}>
//       <div className={registration.Card}>
//         <div className={registration.cardHeader}>
//           <h3>Register Now</h3>
//         </div>
//         <form>
//             <div className={registration.formWrapper}>
//           <div className={registration.formGroup}>
//             <label htmlFor="firstName">First Name</label>
//             <input
//               type="text"
//               id="firstName"
//               className={registration.formControl}
//               placeholder="Enter your first name"
//             />
//           </div>
//           <div className={registration.formGroup}>
//             <label htmlFor="lastName">Last Name</label>
//             <input
//               type="text"
//               id="lastName"
//               className={registration.formControl}
//               placeholder="Enter your last name"
//             />
//           </div>
//           <div className={registration.formGroup}>
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               className={registration.formControl}
//               placeholder="Enter your email"
//             />
//           </div>
//           <div className={registration.formGroup}>
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               className={registration.formControl}
//               placeholder="Create a password"
//             />
//           </div>
//           <button type="submit" className={registration.registrationBtn}>
//             Register
//           </button>
//           </div>
//         </form>
//         <div className={registration.signUpMessage}>
//           Already have an account?{" "}
//           <Link to="/login" className={registration.signUpLink}>
//             Log in
//           </Link>
//         </div>
//       </div>
//     </div>
//   </div>
// </>

//     </div>

<div style={{ backgroundColor: '#FFFAF0', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', maxWidth: '811px', maxHeight: '85%', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        {/* Image Container */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img
            src="/assets/img/Beautifulhome.jpg" // Adjust the path to your image accordingly
            alt="Registration Visual"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Registration Container */}
        <div style={{ border: '3px solid #000', padding: '3rem', flex: 1, display: 'flex', flexDirection: 'column',justifyContent: 'center', gap: '0rem'}}>
          <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '2rem', color: 'black' }}>Register</h1>
          
          <label htmlFor="firstName" style={{ fontWeight: 'bold', color: 'black' }}>
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            placeholder="Enter your first name"
            style={{
              padding: '0.75rem',
              fontSize: '1rem',
              border: '2px solid #CCCCCC',
              borderRadius: '12px',
              marginBottom: '1rem',
              outlineColor: '#007BFF',
            }}
          />

          <label htmlFor="lastName" style={{ fontWeight: 'bold', color: 'black' }}>
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            placeholder="Enter your last name"
            style={{
              padding: '0.75rem',
              fontSize: '1rem',
              border: '2px solid #CCCCCC',
              borderRadius: '12px',
              marginBottom: '1rem',
              outlineColor: '#007BFF',
            }}
          />

          <label htmlFor="email" style={{ fontWeight: 'bold', color: 'black' }}>
            Email
          </label>
          <input
            id="email"
            type="email"
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

          <label htmlFor="regPassword" style={{ fontWeight: 'bold', color: 'black' }}>
            Password
          </label>
          <input
            id="regPassword"
            type="password"
            placeholder="Create a password"
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
            Register
          </button>

          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
