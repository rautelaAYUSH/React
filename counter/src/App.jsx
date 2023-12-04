import {useState} from 'react'
import './App.css'


function App() {

  let [counter,setCounter] =useState(15)

  //let counter=5

  const addValue = () =>{
      // console.log("value added",Math.random());
      if(counter>=20){
        counter=20
      }else{
        counter=counter+1
      }
      setCounter(counter)
  }
  const decValue = () =>{
    // console.log("value decreased",Math.random());
    if(counter<=0){
      counter=0
    }else{
      counter=counter-1
    }
    setCounter(counter)
}

  return (
    <>
      <h1>Counter react project to understand hooks</h1>
      <h2>Counter value is:{counter}</h2>
      <button 
        onClick={addValue}
      >add</button>
      <br />
      <button
        onClick={decValue}
      >dec</button>
    </>
  )
}

export default App
