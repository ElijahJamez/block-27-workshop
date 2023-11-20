import './App.css'
import SignUpForm from './Components/SignUpForm'
import Authenticate from './Components/Authenticate'
import { useState } from 'react'



function App() {
  const [token, setToken] = useState(null);                     // token and setToken variables with useState. initial value to null.
  return (
    <>
      <Authenticate token={token} setToken={setToken} />        {/*passing the values to each component */}
      <SignUpForm  token={token} setToken={setToken} />         {/* ^This will allow us to set the token with our API response, and read/send the token back in our Authenticate component  */}
    </>
  )
  
}

export default App
