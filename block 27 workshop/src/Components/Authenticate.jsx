import { useState } from "react";

const Authenticate = ({token}) => {
    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null);

    async function handleClick() {                                                      // function made to send the network request
    try {
        const response = await fetch(
            "https://fsa-jwt-practice.herokuapp.com/authenticate",
              {
                method: "GET",                                                          // GET requests are a little different they require an AUTHORIZATION instead of a BODY
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
                }   
               }
            );
            const result = await response.json();
            setSuccessMessage(result.message);
    } catch (error) {
      setError(error.message);
    }
    return (
        <div>
                <h2>Authenticate</h2>
                {successMessage && <p>{successMessage}</p>}
                {error && <p>{error}</p>}
                <button onClick={handleClick}>Authenticate Token!</button>              {/* Sends a GET request to the API and passes the token in an Authentication header*/}
              
        </div>
      );
    }
}
  
  export default Authenticate;