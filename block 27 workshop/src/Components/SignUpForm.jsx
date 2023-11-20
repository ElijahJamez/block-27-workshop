import { useState } from "react";                                                                                       // Store our form input values in state variables



const SignUpForm = () => {                                                                                              // If () is empty, it means that the component doesn't expect to receive any props.
const [username, setUsername] = useState("");                                                                           // State variables go inside of the function
const [password, setPassword] = useState("");                                                                           // "[count, setCount]" or "[total, starting amount]"
const [error, setError] = useState(null);                                                                               // NULL is perfect for reflecting errors


async function handleSubmit(event) {                                                                                    // Passed it to the <form> event below - makes it work on the submit <button> as it is the child 
  event.preventDefault();                                                                                               // Event to prevent refresh 
    
      try {                                                                                                             // TRY CTACH is how were going to reach for the API and/or give the user an error if needed - very essential
        const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup",
             {                                                                                                          // Requests require 3 things no matter what: METHOD, HEADERS, and BODY 
                method: "POST",                                                                                         // METHOD Specifies that you are making a POST request.
                headers: {                                                                                              // HEADERS sets the content to indicate that you are sending JSON data in the body.
                  "Content-Type": "application/json"                                                                    // Converts 'username' and 'password' values we recieve into a string
                }, 
                body: JSON.stringify({ 
                  username: username,                                                                                   // Calling to username State
                  password: password                                                                                    // Calling to password State
                }) 
              });
        const result = await response.json();                                                                           //awaits the json() Promise and assigns it into the variable 'result'
              console.log(result);                             
              setToken(result.token);                                                                                   // makes our result be that token we want - declared in APP for some reason


    } catch (error) {
      setError(error.message)
    }
}


return ( <>
        <h2>Sign Up!</h2>
          {error && <p>{error}</p>}                                                                                     {/* Used {} to escape into JS - "if error = true the <p> will render" - not 100% how it knows about the state above */}
        <form onSubmit={handleSubmit}>
            <label>
              Username: <input value={username} onChange={(e) => setUsername(e.target.value)}/>                         {/* Defining value as whatever the user gives us */} 
            </label> < br/>                                                                                             {/* onChange sends it to the state we defined above */} 
            <label>                                                                                                     {/* "e.target.value" takes the current value of (what they typed in) the input element. - 'e' means 'event' */}
              Password: <input type = "password" value={password} onChange={(e) => setPassword(e.target.value)}/>       {/* Repeat^ - only this time we added the type att to hide the sensitive info */}
            </label> <br/>
            <button>Submit</button>
          </form>
      </>
  );
}
  
  export default SignUpForm; 