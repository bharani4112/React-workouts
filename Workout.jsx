import React from 'react'
import '../pages/Workout.css'


const Workout = () => {
const alp={
one:{row:"a",color:'red'},
two:{row:"b",color:'blue'},
three:{row:"c",color:'green'},

}

const btn=[1,2,3,4,5,6,7,8,9,10]


  return (
   <>
    <div className="container">

    {
    Object.entries(alp).map(([_,val])=>{
        return(

// console.log(val.row , val.color)

            <>
            
            {/* console.log(row.row,row.color) */}
       <div className="box"  style={{color:val.color}}>{val.row}</div>

            {btn.map((num)=>console.log(num))}

       </> 
    )
        
    })
    }
        </div>
   
   </>
  )
}

export default Workout