import React from 'react'
import PokemonDetail from './PokemonDetail'
import Apiworkout from './Apiworkout'
import TextType from './TextType';
import shin from '../assets/Img/shain.jpg'
import PixelTransition from './PixelTransition';
const page03 = () => {
  return (
<>
<div className="page03-container">

<TextType 
  text={["Click the card to see the pixel transition😁"]}
  typingSpeed={75}
  pauseDuration={1500}
  showCursor={true}
  cursorCharacter="_"
  deletingSpeed={50}






  
/>
<div className="img-slot">

<PixelTransition
  firstContent={
    <img
    src={shin}
    alt="default pixel transition content, a cat!"
    style={{ width: "100%", height: "100%", objectFit: "fill" , placeItems: "center",display: "flex",left:"10px" ,top:"20px" }}
      />
    }
    secondContent={
      <div
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        placeItems: "center",
        backgroundColor: "#111"
      }}
      >
      <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}>Vanakkam ba!!</p>
    </div>
  }
  gridSize={12}
  pixelColor='#ffffff'
  animationStepDuration={0.4}
  className="custom-pixel-card"
/>
  </div>
  </div>
</>
  )
}

export default page03