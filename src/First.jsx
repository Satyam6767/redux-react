import React, { useEffect, useState } from 'react'

function First() {


    const [counter, setcounter] = useState(0)

    useEffect(()=>{
      console.log("component render")
    })

    
  return (
    <div style={{border:"2px solid red"}}>First



        <h1>{counter}</h1>
        <button onClick={()=> setcounter(counter+1)}>click</button>

        <p>{counter}</p>
    </div>
  )
}

export default First