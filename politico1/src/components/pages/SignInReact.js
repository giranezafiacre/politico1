import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import politicoimg from '../images/politico1.png';
import '../css/signin.css';
import userPageReact from'./userPageReact';
import AdminReact from'./AdminReact';
import resetPassword from './ResetPassword';

class SignInReact extends Component {
 

render(){
  return (
    <Router><Route
    exact
    path="/SignInReact"
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
                      <li><Link style={linkStyle} to="/SignUpReact"><a href="/">SIGNUP</a></Link></li>
                      <li><Link style={linkStyle} to="/SignInReact"><a href="/">SIGNIN</a></Link></li>
                   </ul>
               </nav>
           
       </div>
       </header>
       <section>
       <div className="container">
       <table>
    <tr>
       <td>
       <div className="allform">
       <input id="password" className="form" type="password" defaultValue=''  placeholder="username " required/>
       <input id="password" className="form" type="password" defaultValue=''  placeholder="password " required/>
       <div className="button1">  
    <table>
       <tr>
          <td><Link style={linkStyle} to='/UserPageReact'><button id="SignIn" className="button" >Sign In</button></Link></td>
           <td><Link style={linkStyle} to="/resetPassword"><a href="/"><button id="reset" className="button">reset password</button></a></Link></td>
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
    </React.Fragment>)}/> 
    <Route path="/resetPassword" component={resetPassword} />
    <Route path="/AdminReact" component={AdminReact} />
    <Route path="/UserPageReact" component={userPageReact} />
    </Router>
     
     
  );
}}

const linkStyle = {
  color: 'rgb(20, 19, 19)',
  textDecoration: 'none',
  fontsize: 16
  
}
export default SignInReact;
