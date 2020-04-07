import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../css/UserPage.css';
import viewParties from './viewParties';
import viewPol from './viewPol';
import vote from './vote';
import ProfileReact from './ProfileReact';
// import option from'./Option';

class OptionU extends Component {

    render() {
        return (
            <Router><Route
                exact
                path="/userPageReact/option"
                render={props => (<React.Fragment>
                    <div className="App">
                    <section className="section">
                        <div class="container">
                        <table id="table1" >
                            <tr><td><Link style={linkStyle} to="/userPageReact/option/viewParties"><a href="/" id="viewparty">
                                <li>VIEW ALL POLITICAL PARTIES</li>
                            </a></Link></td></tr>
                            <tr><td><Link style={linkStyle} to="/userPageReact/option/viewPol">
                                <a href="/" id="viewpol">
                                    <li >VIEW ALL POLITICIANS</li>
                                </a></Link>
                            </td></tr>
                            <tr> <td><Link style={linkStyle} to="/userPageReact/option/vote"><a href="/" id="vote">
                                <li >VOTE</li>
                            </a></Link></td></tr>
                            <tr><td><Link style={linkStyle} to="/userPageReact/option/ProfileReact"><a  href="/" id="">
                                <li >EDIT PROFILE</li>
                            </a></Link></td>
                                
                            </tr>
                        </table>
                        </div>
                        
                        </section>
                    </div>
                </React.Fragment>)} />
                <Route path="/userPageReact/option/viewParties" component={viewParties} />
                <Route path="/userPageReact/option/viewPol" component={viewPol} />
                <Route path="/userPageReact/option/vote" component={vote}/>
                <Route path="/userPageReact/option/ProfileReact" component={ProfileReact} />
            </Router>


        );
    }
}
const linkStyle = {
    color: 'rgb(20, 19, 19)',
    textDecoration: 'none',
    fontsize: 16

}
export default OptionU;

