import React from 'react'
import './Page02.css'
import ReactCompareImage from 'react-compare-image'
import remo from '../assets/Img/images-removebg-preview.png'
import aniyan from '../assets/Img/anniyan-removebg-preview.png'
import remo01 from '../assets/Img/images.jpeg'
import aniyan01 from '../assets/Img/anniyan.jpg'
import shan from '../assets/Img/shai.jpg'
import shin from '../assets/Img/shain.jpg'
import { s } from 'motion/react-client'

const Page02 = () => {
  return (
    <>
    <div className="page02-container">

<div className="left-sides"><h3>Just  swipe the card to see the magic🙂‍↔️</h3></div>
<div className="right-sides">
<div className="card">
  <div className="compare-wrapper">
    <ReactCompareImage
      leftImage={shan}
      rightImage={shin}
      sliderLineColor="#1e82dfff"
      handleSize={30}
      sliderPositionPercentage={1}
    />
  </div>
</div>
    {/* npm install react-compare-image */}

</div>
    </div>


    </>
  )
}

export default Page02