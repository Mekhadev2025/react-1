import React from "react"
 import logo from "./LOGOO.png"
export default function Header() {
    return (

       
        <header>  
            <nav className="nav">
                
                <img src= {logo} alt="nulll" className="nav-logo" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}
