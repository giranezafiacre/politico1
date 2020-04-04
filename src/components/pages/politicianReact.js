import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import politicoimg from './components/images/politico1.png';
import SignInReact from './SignInReact';
import SignUpReact from './SignUpReact';
import img from '../images/politico1.png';
import gmail from '../images/gmail.jpg'
import twitter from '../images/twitter.jpg';
import '../css/PoliticianPage.css';
function politicianReact() {
    return (
        <Router>
            <Route
                exact
                path="/politicianReact"
                render={props => (<React.Fragment>
                    <body>
                        <header>
                            <div class="container">
                                <div class="parallel">
                                    <div class="header">
                                        <a href="/"><img id="politico" src={img} alt="" /></a>
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
                        <section class="section">
                            <div class="content">
                                <div id="body-container">
                                    <div class="body">
                                        <h2> <span> Express interest to the audience why you run for a political
                                office<br /> <span><textarea id="explanation" rows="4" cols="50">
                                            </textarea><br />
                                            </span><button id="create-account-btn">POST IT</button></span></h2>
                                    </div>

                                </div>
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
                                                    src={gmail} className="beg" alt="" /></a><a href="https://www.google.com/intl/fr/gmail/about/#"
                                                        target="_blank" rel="noopener noreferrer" class="f">@politico</a>
                                            </li>
                                            <li>
                                                <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                                                    <img src={twitter} class="beg" alt="" />
                                                </a>
                                                <a href="https://www.twitter.com/" className="f" target="_blank" rel="noopener noreferrer">politico</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </body>
                </React.Fragment>)}
            />
            <Route path="/SignInReact" component={SignInReact} />
            <Route path="/SignUpReact" component={SignUpReact} />
        </Router>
    );
}
const linkStyle = {
    color: 'rgb(20, 19, 19)',
    textDecoration: 'none',
    fontsize: 16

}

export default politicianReact;