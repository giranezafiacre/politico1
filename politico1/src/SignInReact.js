import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import politicoimg from './components/images/politico1.png';
import SignInReact from './SignInReact';
import './components/css/signup.css';

function SignUpReact() {
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
                       <li><a class="signin" href="./SignIn.html">SIGNIN</a></li>
                       <li><a class="signup" href="./SignUp.html">SIGNUP</a></li>
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
     <h2 class="form">Please fill this form</h2>
     <input class="form1" type="text" value="" placeholder="Your names" required/>
     <input class="form1" type="text" value="" placeholder="Your Phone Number" required/>
     <select name="type of user" id='choice'class="form1">

     <option value="citizen">Citizen</option>
     <option value="Politician">Politician</option>
 </select>
 <input id="password1" class="form1" type="password" placeholder="password you will use" required/>
 <input id="password2" class="form1" type="password" placeholder="confirm password" required/>
 <Link style={linkStyle} to="/SignInReact"><a href="/" id="a"><button id="signup" class="button">Sign Up</button></a></Link>
     </div>
     </td>
     </tr>
     </table>
      </div>
      </section>
   </div>
    </React.Fragment>
    <Route path="/SignInReact" component={SignInReact} />
    </Router>
     
     
  );
}
const linkStyle = {
  color: 'rgb(20, 19, 19)',
  textDecoration: 'none',
  fontsize: 16
  
}
export default SignUpReact;
