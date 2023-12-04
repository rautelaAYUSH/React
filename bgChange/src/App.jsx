import {useState} from 'react'
function App() {
  
  const [color,setColor]=useState("orange")

  return (
    // <>
    //   <h1 className=' bg-yellow-400 text-black ' >bg change project</h1>
    // </>
    <div
      className='w-full h-screen'
      style={{backgroundColor:color}}
    >
      <div
        className='fixed flex flex-wrap justify-center bottom-12 inset-x-2 '
      >
        <div
          className='flex flex-wrap justify-center gap-2 bg-white px-3 py-2 rounded-full' 
        >
          <button
            onClick={ () => setColor("red") }
            className=' text-black rounded-full px-4 py-1 '
            style={{backgroundColor:"red"}}
          >Red</button>
          <button
            onClick={ () => setColor("green") }
            className=' text-black rounded-full px-4 py-1 '
            style={{backgroundColor:"green"}}
          >Green</button>
          <button
            onClick={ () => setColor("yellow") }
            className=' text-black rounded-full px-4 py-1 '
            style={{backgroundColor:"yellow"}}
          >Yellow</button>
          <button
            onClick={ () => setColor("blue") }
            className=' text-black rounded-full px-4 py-1 '
            style={{backgroundColor:"blue"}}
          >Blue</button>
        </div>
      </div>
    </div>
  )
}

export default App
