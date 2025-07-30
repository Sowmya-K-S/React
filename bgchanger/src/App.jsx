import { useState } from "react"

function App() {

  const [color, setColor] = useState('gray')

  return (
    <>
      <div className="h-screen w-screen font-mono" style={{backgroundColor : color}}>

      <h1 className="text-3xl text-center relative top-10 font-black">Background Changer</h1>

      <div className="fixed bottom-25  w-90 h-15 flex items-center justify-center gap-10 bg-white rounded-3xl font-extrabold text-black left-150">
        <button className="bg-red-500 p-2 w-20 rounded-4xl  hover:text-white hover:bg-red-700" onClick={() => setColor('Red')}>Red</button>
        <button className="bg-green-500 p-2 w-20 rounded-4xl hover:text-white hover:bg-green-700" onClick={ () => setColor('green')}>Green</button>
        <button className="bg-yellow-500 p-2 w-20 rounded-4xl hover:text-white hover:bg-yellow-700" onClick={ () => setColor('yellow')}>Yellow</button>
      </div>
      </div>
    </>
  )
}

export default App
