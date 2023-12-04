import {useState,useCallback,useEffect,useRef} from 'react'

function App() {

  const [length,setLength] = useState(8);
  const [numberAllowed,setNumberAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
  const [password,setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str +="0123456789"
    if(charAllowed) str +="!@#$%^&*()"

    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass+=str.charAt(char)
    }
    setPassword(pass)
  },[length,numberAllowed,charAllowed])
  
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    //first three characters will be selected
    passwordRef.current?.setSelectionRange(0,100)
    //WINDOW OBJECT IS AVAILABLE FOR REACT ONLY
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])

  const passwordRef = useRef(null) 

  return (
    <>
      <div 
      className='w-full max-w-md mx-auto px-4 py-3 my-8 text-red-500 bg-gray-500'
      >
        <h1 className='text-center'>Password generator</h1>
        <div
          className='flex'
        >
          <input 
            type="text" 
            value={password}
            className='w-full'
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button 
            onClick={copyPasswordToClipboard}
            className='bg-yellow-300 mx-2'
          >
            Copy
          </button>
        </div>
        <div className='flex'>
          <div className='flex'>
            <input 
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange = {(e) => {setLength(e.target.value)}}
            />
            <label>Length:{length}</label>
          </div>
          <div className='flex'>
            <input 
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={()=>{
                setNumberAllowed((prev)=>!prev)
              }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex'>
            <input 
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={()=>{
                setCharAllowed((prev)=>!prev)
              }}
            />
            <label htmlFor='charInput'>characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
