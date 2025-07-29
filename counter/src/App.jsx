import { useState } from 'react'

function App() {

  const [count, setCount] = useState(0)

  let addFour = () => {
    setCount(count => count + 1)
    setCount(count => count + 1)
    setCount(count => count + 1)
    setCount(count => count + 1)
  }

  return (
    <>
      <div className='bg-gray-900 flex items-center flex-col w-screen h-screen justify-center font-mono'>
        <div className='bg-blue-200 flex items-center flex-col w-70 h-60 justify-center gap-10 p-5 rounded-xl'>
        <h2 className='text-2xl font-semibold'>Counter</h2>
        <h1 class className = 'text-3xl font-extrabold'> {count} </h1>
        <div className='flex items-center justify-center gap-4 text-sm font-semibold'>
          <button className='bg-red-300 p-2 rounded-lg hover:bg-red-500' onClick={() => setCount(count + 1)}>Plus 1</button>
          <button className='bg-yellow-300 p-2 rounded-lg hover:bg-yellow-500' onClick={() => setCount(count - 1)}>Minus 1</button>
          <button className='bg-green-300 p-2 rounded-lg hover:bg-green-500'onClick = {addFour}>Add 4</button>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
