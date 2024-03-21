import React from "react";
// Import the CSS module
import styles from "./home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ backgroundColor: '#FFFAF0' }}>
    <div style={{ borderBottom: '2px solid #000', padding: '1rem', maxWidth: 'auto', margin: '0 auto' }}>
    <div style={{ borderBottom: '2px solid #000', /* Apply a black bottom border */ }}>
    <div style={{ padding: '1rem', maxWidth: 'auto', margin: '0 auto' }} data-id={3}>
    <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '3.5rem' }} data-id={4}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '54px' }} data-id={5}>
      <Link style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '900', color: 'black' }} data-id={6} to="/">
       Home
      </Link>
      <Link style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '900', color: 'black' }} data-id={8} to="/login">
        About Us
      </Link>
      <Link style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '900', color: 'black' }} data-id={10} to="/login">
        <span data-id={11}>Services</span>
      </Link>
      <Link style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '900', color: 'black' }} data-id={12} to="/login">
        <span data-id={13}>Login</span>
      </Link>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px'}} data-id={14}>
      <Link style={{ width: '241px', height: '101px', overflow: 'hidden',color: 'black',fontWeight: '900' }} data-id={15} to="/login">
        <h2>
          Better Housing
        </h2>
      </Link>
    </div>
  </nav>
</div>

    </div>


<div style={{ paddingTop: '2.5rem', paddingBottom: '2.5rem' }} data-id={17}>
  <div
    style={{
      maxWidth: 'auto',
      margin: '0 auto',
      padding: '1rem',
      display: 'grid',
      gap: '1rem',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', /* Approximation for responsive grid */
    }}
    data-id={18}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }} data-id={19}>
      <div style={{ gap: '8px' }} data-id={20}>
        <h1
          style={{
            fontSize: '3.5rem', /* text-3xl */
            fontWeight: 'bold',
            letterSpacing: '-0.05em', /* tracking-tighter */
            lineHeight: '1', /* Approximation for sm:text-5xl */
          }}
          data-id={21}
        >
          Your Dream Home Awaits
        </h1>
        <p
          style={{
            maxWidth: '400px',
            color: '#6B7280', /* text-gray-500 */
            fontSize: '1.25rem', /* md:text-xl */
          }}
          data-id={22}
        >
          Let us help you find the perfect property. Whether you're looking for
          a cozy apartment in the city or a spacious house in the suburbs, we
          have a wide range of options to suit your needs.
        </p>
      </div>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }} data-id={23}>
      <div style={{ gap: '8px' }} data-id={24}>
        <h2
          style={{
            fontSize: '2.5rem', /* text-2xl */
            fontWeight: 'bold',
            letterSpacing: '-0.05em', /* tracking-tighter */
            lineHeight: '1', /* Approximation for sm:text-4xl */
          }}
          data-id={25}
        >
          Expert Guidance
        </h2>
        <p
          style={{
            color: '#6B7280', /* text-gray-500 */
            fontSize: '1.25rem', /* md:text-xl */
          }}
          data-id={26}
        >
          Our team of experienced real estate professionals is dedicated to
          providing you with personalized service every step of the way. We'll
          help you navigate the homebuying process with confidence, ensuring
          that you make informed decisions and find the perfect home.
        </p>
      </div>
    </div>
  </div>
</div>



 
<div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(2, 1fr)' }} data-id={27}>
  <div style={{ position: 'relative' }} data-id={28}>
    <img
      src="/assets/img/Beautifulhome.jpg"
      alt="Beautiful Homes"
      style={{ objectFit: 'cover', width: '100%', height: '24rem', aspectRatio: '600 / 400' }}
      data-id={29}
    />
    <h3
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2.25rem',
        fontWeight: 'bold',
        color: '#f7fafc',
        backgroundColor: 'rgba(31, 41, 55, 0.4)',
      }}
      data-id={30}
    >
      Beautiful Homes
    </h3>
  </div>
  <div style={{ position: 'relative' }} data-id={31}>
    <img
      src="/assets/img/Residential.jpg"
      alt="Prime Locations"
      style={{ objectFit: 'cover', width: '100%', height: '24rem', aspectRatio: '600 / 400' }}
      data-id={32}
    />
    <h3
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2.25rem',
        fontWeight: 'bold',
        color: '#f7fafc',
        backgroundColor: 'rgba(31, 41, 55, 0.4)',
      }}
      data-id={33}
    >
      Prime Locations
    </h3>
  </div>
</div>


<div
  style={{
    maxWidth: 'auto',
    margin: '0 auto',
    padding: '2.5rem 0',
    display: 'flex', /* Changed from grid to flex */
    gap: '2.5rem',
    flexDirection: 'row-reverse', /* Reverse the order */
  }}
  data-id={34}
>
  <div style={{ flex: '1', display: 'flex', alignItems: 'center', gap: '16px' }} data-id={35}>
    <div style={{ gap: '8px' }} data-id={36}>
      <h2
        style={{
          fontSize: '2.88rem',
          fontWeight: 'bold',
          letterSpacing: '-0.05em',
          lineHeight: '1',
        }}
        data-id={37}
      >
        About Us
      </h2>
      <p
        style={{
          maxWidth: '65ch',
          color: '#6B7280',
          fontSize: '1.25rem',
        }}
        data-id={38}
      >
        We are committed to helping our clients achieve their real estate goals...
      </p>
    </div>
  </div>
  <div style={{ flex: '1', display: 'flex', alignItems: 'center', gap: '16px' }} data-id={39}>
    <div style={{ gap: '8px' }} data-id={40}>
      <h2
        style={{
          fontSize: '2.88rem',
          fontWeight: 'bold',
          letterSpacing: '-0.05em',
          lineHeight: '1',
        }}
        data-id={41}
      >
        Services
      </h2>
      <p
        style={{
          maxWidth: '65ch',
          color: '#6B7280',
          fontSize: '1.25rem',
        }}
        data-id={42}
      >
        Regular Reports, Ready Project Management, Easy Communication
      </p>
    </div>
  </div>
</div>




<div
  style={{
    borderTop: '2px solid #000', /* Simulates border-t and border-gray-200 */
    padding:'2rem'
  }}
  data-id={43}
>
  <div
    style={{
      display: 'flex',
      flexDirection: 'row', /* Adjusted for desktop layout */
      justifyContent: 'space-between', /* Align items on opposite ends */
      alignItems: 'center', /* Vertically center content */
      gap: '1rem', /* space-x-4 */
      padding: '0px 1rem', /* Adjusted px-6 for simplicity */
    }}
    data-id={44}
  >
    <div
      style={{
        fontSize: '0.875rem', /* text-sm */
        letterSpacing: '0.025em', /* tracking-wide */
        color: '#6B7280', /* text-gray-500 */
        position:'relative',
        left:'514px'
      }}
      data-id={45}
    >
      © 2024 Better Housing. All rights reserved.
    </div>
    
  </div>
</div>


</div>
</div>

  );
};

export default Home;
