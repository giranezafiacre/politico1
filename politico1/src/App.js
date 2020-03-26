import React, { Component } from 'react';
import img from './components/images/politico1.png';
import gmail from './components/images/gmail.jpg'
import twitter from './components/images/twitter.jpg';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import SignInReact from './SignInReact';
import SignUpReact from './SignUpReact';
import './components/css/homepage.css';

class App extends Component {
  
  render(){
  return (
    <Router>
    <Route
    exact
    path="/"
    render={props => (
      <React.Fragment>
                <body>
                <div className="App">
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
                
                <section className="section">
                <div className="container">
                    <div className="par">
                        <div className="parag" id="p1">
                            <p>Welcome again to Politico App.Contribute to a nation by giving it good
                                leadership. Politico enables citizens to give their mandate to politicians running for different
                                government offices while building trust in the process through transparency.</p>
                            </div>
                            <div className="parag">
                                <p>Due to possibility of posponing government programs by obstacles like climate conditions or traffic jam
                                    we have this app to help us to continue government programs in everyone comfortable condition. This app
                                    is evidence of transparence and democracy also in our nation because it has way of showing how
                                    politician are being voted</p>
                            </div>
                    </div>
                    <Link style={linkStyle} to="/SignUpReact"><a href="/" id="create-account-btn">GET
                        STARTED</a></Link>
                </div>
            </section>
            <footer>
            <div className="container"> 
                 <div className="contactall">
                 <div className="ComeVistUs">
                 <i>Come visit us</i>
                 <ul>
                     <li className="begin">KG 941 Kigali, Rwanda</li>
                     <li>plaza A House</li>
                     <li>4th floor</li>
                 </ul>
             </div>
             <div className="ContactUs" id="ContactUs">
                 <i>Contact us</i>
                 <ul class="ContactUs-element">
                     <li>@politico</li>
                     <li>+250785405716</li>
                 </ul>
             </div>
             <div class="FollowUs">
                    <i>follow us</i>
                    <ul class="FollowUs-element">
                      <li>
                      <a href="https://www.google.com/intl/fr/gmail/about/#" target="_blank" rel="noopener noreferrer"><img
                      src={gmail} className="beg" alt=""/></a><a href="https://www.google.com/intl/fr/gmail/about/#"
                      target="_blank" rel="noopener noreferrer" class="f">@politico</a>
                      </li>
                      <li>
                        <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                          <img src={twitter} class="beg" alt=""/>
                        </a>
                        <a href="https://www.twitter.com/" className="f" target="_blank" rel="noopener noreferrer">politico</a>
                      </li>
                    </ul>
            </div>
            </div>
            </div>
            </footer>
               
                  
                </div>
                </body>
                </React.Fragment> )}
                />     
                 <Route path="/SignInReact" component={SignInReact} />
                 <Route path="/SignUpReact" component={SignUpReact} />
                  
    </Router>
  );}
}
const linkStyle = {
  color: 'rgb(20, 19, 19)',
  textDecoration: 'none',
  fontsize: 16
  
}
export default App;
