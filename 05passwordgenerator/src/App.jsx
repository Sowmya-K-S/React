import { useCallback, useEffect, useState, useRef } from "react"

function App() {

  const [length, setLength] = useState(8)
  const [isNumberAllowed, setIsNumberAllowed] = useState(false)
  const [isSymbolAllowed, setIsSymbolAllowed] = useState(false)
  const [password, setPassword] = useState('')
  const [buttonText, setButtonText] = useState('Copy')

  const passInput = useRef(null)

  const generatePassword = useCallback(() =>
  {

    let passString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    let passGen = ""

    if(isNumberAllowed)
      passString += '0123456789'

    if(isSymbolAllowed)
      passString += '!@#$%^&*()'

    for(let i = 0; i < length; i++)
    {
      let pos = Math.floor(Math.random() * passString.length + 1)
      passGen += passString.charAt(pos);
    }

    setPassword(passGen)

  }, [length, isNumberAllowed, isSymbolAllowed])


  useEffect(() => {
    generatePassword()
  }, [length, isNumberAllowed, isSymbolAllowed]
)

const copyPassword = () => {
  window.navigator.clipboard.writeText(password)

  passInput.current?.select()
  // passInput.current.focus();
  setButtonText('Copied')

  setTimeout(() => {
    setButtonText('Copy')
  // passInput.current?.blur()
  }, 2000)
}

  return (
    <>
      <div className="h-screen w-screen bg-gray-500 font-mono flex flex-col items-center justify-center">

        <div className=" bg-yellow-500 w-100 h-70 p-10 flex flex-col items-center justify-center gap-18 rounded-2xl">

          <h1 className="font-black text-3xl">Password Generator</h1>

          <div className="flex flex-col items-center justify-center gap-10">

            <div className="flex justify-center gap-5">
              <input type="text" className="bg-white p-1 w-60 rounded-lg" readOnly value = {password} ref = {passInput} />
              <button className="bg-blue-700 text-white w-18 rounded-lg hover:bg-blue-900" onClick={copyPassword}>{buttonText}</button>
            </div>

            <div className="flex gap-5 flex-col items-center justify-center">

              <div className="flex gap-4">
                <label htmlFor="">Select Length</label>
                <input type="range" name="" id="" min = {8} max = {20} onChange={(e) => setLength(e.target.value)} />
                <span>{ length }</span>
              </div>

              <div className="flex gap-3">
                <div className="flex gap-2">
                <input type="checkbox" name="" id=""  onChange={ () => setIsNumberAllowed(!isNumberAllowed)}/>
              <label htmlFor="">Allow Numbers</label>
              </div>

              <div className="flex gap-2">
                <input type="checkbox" name="" id="" onChange={ () => setIsSymbolAllowed(!isSymbolAllowed)}/>
                <label htmlFor="">Allow Symbols</label>
              </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default App
