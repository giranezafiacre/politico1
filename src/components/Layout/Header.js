import React from 'react';
import img from '../images/politico1.png';
import { Link } from 'react-router-dom';
function Header(){
    return(
        <header className="App-header">

        <div className="container">
          <div className="header">
            <a href='/'><img id="politico" src={img} className="App-logo" alt="logo" /></a>
          </div>

          <div className="header">
            <h1>Welcome to politico
        Application</h1>
          </div>
          <nav>
            <ul>
              <li><Link style={linkStyle} to="/SignUpReact"><a href="/">SIGNUP</a></Link></li>
              <li><Link style={linkStyle} to="/SignInReact"><a href="/">SIGNIN</a></Link></li>
            </ul>
          </nav>
        </div>

      </header>
    )
}
const linkStyle = {
    color: 'rgb(20, 19, 19)',
    textDecoration: 'none',
    fontsize: 16
  
  }
export default Header