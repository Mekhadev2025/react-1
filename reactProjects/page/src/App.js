 
import './App.css';

import React from "react"
 
import Header from "./Header"
import Footer from "./Footer"
import MainContent from "./MainContent.js"
 




/**
 * 
Challenge: move the Footer and MainContent components
into their own files.
*/
 
 

function App() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

 
export default App;
