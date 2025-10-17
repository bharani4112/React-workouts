import StaggeredMenu from './StaggeredMenu ';
import { useState } from 'react';
import Orb from './Orb';
import './ScrollStack.css'
import Navbar from './Navbar';
import { Col, Row } from 'antd';
import Content from './Content';
const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
  { label: 'Services', ariaLabel: 'View our services', link: '/services' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
];

const socialItems = [
  { label: 'Twitter', link: 'https://twitter.com' },
  { label: 'GitHub', link: 'https://github.com' },
  { label: 'LinkedIn', link: 'https://linkedin.com' }
];


const ScrollStacks = () => {
  const [isOpen, setIsOpen]=useState();
  return (
    <>
      {/* ✅ FIXED FULLSCREEN BACKGROUND */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          background: 'black',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transform: matchMedia('(max-width: 768px)').matches ? 'scale(2.9)' : 'scale(6)', // 👈 increase or decrease to adjust Orb size
          }}
        >
          <Orb
            hoverIntensity={1.2}
            rotateOnHover={true}
            hue={6}
            forceHoverState={true}
          />
        </div>
      </div>

      {/* ✅ SCROLLABLE CONTENT */}
      <section
        className="page01"
        style={{
          minHeight: '200vh',
          width: '100%',
          position: 'relative',
          color: 'white',
          zIndex: 1,
        }}
      >
        <div className="container">


{/* <div style={{ height: '100vh', width: '100%' }}>
  <StaggeredMenu
    position="right"
    items={menuItems}
    socialItems={socialItems}
    displaySocials={true}
    displayItemNumbering={true}
    menuButtonColor="#fff"
    openMenuButtonColor="#fff"
    changeMenuColorOnOpen={true}
    colors={['#B19EEF', '#5227FF']}
    logoUrl="/path-to-your-logo.svg"
    accentColor="#ff6b6b"
    onMenuOpen={() => console.log('Menu opened')}
    onMenuClose={() => console.log('Menu closed')}
  />
</div> */}
<Navbar />

<Content/>

         </div>
      </section>
    </>
  );
}

export default ScrollStacks;
