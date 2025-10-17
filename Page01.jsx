import React, { useEffect } from 'react'
import  './Page01.css'
import remo from '../assets/Img/images-removebg-preview.png';
import { gsap} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation } from 'react-router-dom';
import shin from '../assets/Img/shai.jpg'; 
import { s } from 'motion/react-client';
gsap.registerPlugin(ScrollTrigger);
const Page01 = () => {
    //animate the h3 using gsap
 useEffect(() => {
    gsap.fromTo(
      ".left-side",
      { opacity: 0, y: 150 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".left-side",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".right-side",
      { opacity: 0, x: 150 },
      {
        opacity: 1,
        x: 0,
        duration: 2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".right-side",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);
  
  

  return (
    <>
    <div className="container-page">
<div className="left-side"><h3>This is a site just to see how it looks like when <span> page scroll looks like</span> </h3></div>
{/* <div className="right-side"><div className="white-circle"></div> */}
<img className="right-side" src={shin} alt="remo"   style={{width:'50%',height:'50%',right:'10px',bottom:'-100px',top:'40px',position:'relative'}}/>

</div>

    {/* </div> */}
    
    
    
    </>
  )
}

export default Page01