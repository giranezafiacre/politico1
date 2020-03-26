import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { Link } from 'react-router-dom';
import politicoimg from './components/images/politico1.png';
import './components/css/signin.css';

function SignInReact() {
  return (
    <Router><React.Fragment>
    <div className="App">
     <header className="App-header">
       <div class="container">
           <div class="parallel">
               <div class="header">
                   <a href="/"><img id="politico" src={politicoimg} alt=""/></a>
               </div>
               
               <div class="header">
                   <h1>Welcome to politico
                       Application</h1>
               </div>
           </div>

               <nav>
                   <ul>
                   <li><Link style={linkStyle} to="/"><a href="/">SIGNUP</a></Link></li>
                  <li><Link style={linkStyle} to="/"><a href="/">SIGNIN</a></Link></li>
                   </ul>
               </nav>
           
       </div>
       </header>
       <section>
       <div class="container">
       <table>
    <tr>
       <td>
       <div class="allform">
       <input id="username" class="form" type="text" value="" placeholder="Your names" required/>
       <input id="password" class="form" type="password" value="" placeholder="password " required/>
       <div class="button1">  
    <table>
       <tr>
       
           <td><button id="SignIn" class="button">Sign In</button></td>
           <td><a href="resetPassword.html"><button id="reset" class="button">reset password</button></a></td>
       </tr>
       </table>
       </div>
       </div>
       </td>
   </tr>
       
    </table>
        </div>
        </section>
   </div>
    </React.Fragment>
    </Router>
     
     
  );
}
// <section>
//      <div class="container">
//      <table>
//   <tr>
//      <td>
//      <div class="allform">
//      <input id="username" class="form" type="text" value="" placeholder="Your names" required/>
//      <input id="password" class="form" type="password" value="" placeholder="password " required/>
//      <div class="button1">  
//   <table>
//      <tr>
     
//          <td><button id="SignIn" class="button">Sign In</button></td>
//          <td><a href="resetPassword.html"><button id="reset" class="button">reset password</button></a></td>
//      </tr>
//      </table>
//      </div>
//      </div>
//      </td>
//  </tr>
     
//   </table>
//       </div>
//       </section>
const linkStyle = {
  color: 'rgb(20, 19, 19)',
  textDecoration: 'none',
  fontsize: 16
  
}
export default SignInReact;
