import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import politicoimg from '../images/politico1.png';
import '../css/resetPassword.css';

class ResetPassword extends Component {
  
render(){
  return (
    <Router><Route
    exact
    path="/ResetPassword"
    render={props => (<React.Fragment>
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
                        <li><a href="/SignInReact">SIGNIN</a></li>
                        <li><a href="/SignUpReact">SIGNUP</a></li>
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
                    <input id="username" class="form" type="text" defaultValue="" placeholder="Your names" disabled/><br/>
                    <input id="password1" class="form" type="password" defaultValue="" placeholder="password " required/><br/>
                    <input id="password2" class="form" type="password" defaultValue="" placeholder="confirm password" required/><br/>
                    <div class="button1">
                        <a href="/SignInReact" id="a"><button id="SignIn" class="button">Save</button></a>
                    </div>
                </div>
            </td>

        </tr>
    </table>
</div>

</section>
   </div>
   </React.Fragment>)}/> 
     </Router>
     
     
  );
}}
export default ResetPassword;
