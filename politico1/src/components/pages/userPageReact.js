import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import politicoimg from '../images/politico1.png';
import optionimg from '../images/options.PNG';
import '../css/UserPage.css';
import ProfileReact from'./ProfileReact';
import OptionU from'./OptionU';

class userPageReact extends Component {
  
render(){
  return (
    <Router>
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
                
             <nav class="option">
                 <ul>
                     <li><Link style={linkStyle} to="/userPageReact/option"><a href="/"><img id="politico1"  src={optionimg} alt=""/></a></Link></li>
                 </ul>
             </nav>
         </div>
         
     </div>
     
     </header>
     <Route
     exact
     path="/userPageReact"
     render={props => (<React.Fragment>
        <section className="section">
        <div className="container">
            <div className="par" >
                <div class="parag" >
                    <p>Welcome again to User page.Contribute to a nation by giving it good
                        leadership. Politico enables citizens to give their choose their proper leaders running for
                        different
                        government offices and it builds trust and transparency beacuse this website is high secured
                        app.</p>
                </div>
                <div class="parag">
                    <p>citizen is main key of this idea of building this application,however it enables another
                        functionalities.there is many options,you can get from this website as citizen like voting,view
                        voted leaders as well as parties and edit your profile,so we wish you happy Democracy</p>
                </div>
                    </div>
            </div>
    
</section>

     </React.Fragment>)} />;
     
          </div>
          <Route path="/userPageReact/option" component={OptionU}/>
          <Route path="/ProfileReact" component={ProfileReact} />
     </Router>
     
     
  );
}}
const linkStyle = {
    color: 'rgb(20, 19, 19)',
    textDecoration: 'none',
    fontsize: 16
    
  }
 
export default userPageReact;
