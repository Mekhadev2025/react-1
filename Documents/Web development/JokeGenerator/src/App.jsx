 import React from "react"
 import Axios from 'axios'
 import './App.css'
//Axios.get will receive jpke and .then is a promise whcih receives data and store in response 
function App() {
  

    const [joke,setJoke]=React.useState("");
    const getJoke=()=>{
    Axios.get("https://official-joke-api.appspot.com/random_joke").then((response)=>{
    console.log(response);
    setJoke(response.data.setup+" ....."+response.data.punchline);
      })
    }

  return (
     <>
     <div className="header">Welcome to Random Joke Generator</div>
     <div className="header--intro">Click the button below to generate a random joke</div>
     <button onClick={getJoke} className="button">Get Joke Right Now</button>
     <div className="joke">{joke}</div>
     </>
  )
}

export default App
