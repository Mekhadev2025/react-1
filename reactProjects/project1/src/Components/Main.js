import React from "react"
import logo2 from './logo2.svg';
function Main() {
    return (
        <div>
            <h1 className="title">Reasons I'm excited to learn React</h1>
            <div className="main">
            <ul>
                <li> Was first released in 2013</li>
                <li>Was originally created by Jordan Walke </li>
                <li> Has well over 100K stars on GitHub</li>
                <li> Is maintained by Facebook</li>
                <li> Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
            <img src={logo2} alt="logo2" className="image" />
        </div>
        </div>
    )
}
export default Main