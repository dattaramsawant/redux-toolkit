import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementCall } from './redux/counterSlice'

const App = () => {
  const value = useSelector(state=>state.counter.value)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(incrementCall(12))
  },[])
  return (
    <>
      <button onClick={()=>dispatch(decrement())}>decrement</button>
      <p>{value}</p>
      <button onClick={()=>dispatch(increment())}>Increment</button>
    </>
  )
}

export default App