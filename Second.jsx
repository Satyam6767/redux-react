import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './src/store/counterslice'

function Counter() {

        const count = useSelector((state) => state.counter.value)
        const dispatch = useDispatch()
  return (


    <div style={{height:"300px", backgroundColor:"blue"}}>
        <h1>{count}</h1>
    </div>
  )
}

export default Counter