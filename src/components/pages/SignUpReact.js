import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import politicoimg from '../images/politico1.png';
import politicianReact from './politicianReact';
import SignInReact from './SignInReact';
import '../css/signup.css';

class SignUpReact extends Component{
  state = {
    value:'',
  };
  constructor(props) {
      super(props);
      this.state={value: '/SignInReact'};
      this.handleChange=this.handleChange.bind(this);
    }
    handleChange(event){
        this.setState({value:event.target.value});
    }
  
  render() {
  return (
    <Router><Route
    exact
    path="/SignUpReact"
    render={props => (<React.Fragment>
    <div className="App">
     <header className="App-header">
       <div className="container">
           <div className="parallel">
               <div className="header">
                   <a href="/"><img id="politico" src={politicoimg} alt=""/></a>
               </div>
               
               <div className="header">
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
     <h2 className="form">Please fill this form</h2>
     <input className="form1" type="text" value="" placeholder="Your names" required/>
     <input className="form1" type="text" value="" placeholder="Your Phone Number" required/>
     <select value={this.state.value} onChange={this.handleChange} id='choice' className="form1">
           <option value='/SignInReact'>Citizen</option>
           <option value='/politicianReact'>Politician</option>
      </select>
 <input id="password1" className="form1" type="password" placeholder="password you will use" required/>
 <input id="password2" className="form1" type="password" placeholder="confirm password" required/>
 <Link id="a" style={linkStyle} to={this.state.value}><button value="submit" id="signup" className="button">Sign Up</button></Link>
     
     
     </div>
     </td>
     </tr>
     </table>
      </div>
      </section>
      
   </div>
    </React.Fragment>)}
    /> 
    
    <Route path="/politicianReact" component={politicianReact} />
    <Route path="/SignInReact" component={SignInReact} />
    </Router>
     
     
  );}
}

const linkStyle = {
  color: 'rgb(20, 19, 19)',
  textDecoration: 'none',
  fontsize: 16
  
}
export default SignUpReact;
