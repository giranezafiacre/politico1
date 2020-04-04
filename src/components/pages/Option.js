import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../css/AdminPage.css';
import createParty from './createParty';
import editParty from './editForm';
import deleteParty from './deleteForm';
import createOffice from './createPost';
import viewDetails from './viewDetails';
// import option from'./Option';

class Option extends Component {

    render() {
        return (
            <Router><Route
                exact
                path="/AdminReact/option"
                render={props => (<React.Fragment>
                    <div className="App">
                        <section>
                            <div class="container">
                                <table id="table1" >
                                    <tr><td>
                                        <li><Link style={linkStyle} to="/AdminReact/option/createParty"><a href="/" id="create-btn" > CREATE PARTY</a></Link></li>
                                    </td></tr>
                                    <tr><td>
                                        <li ><Link style={linkStyle} to="/AdminReact/option/editParty"><a href="/" id="edit-btn" > EDIT PARTY</a></Link></li>

                                    </td></tr>
                                    <tr> <td>
                                        <li ><Link style={linkStyle} to="/AdminReact/option/deleteParty"><a href="/" id="delete-btn" > DELETE PARTY</a></Link></li></td></tr>
                                    <tr><td>
                                        <li ><Link style={linkStyle} to="/AdminReact/option/createOffice"><a href="/" id="createpost-btn" > CREATE POST OFFICES</a></Link></li></td>

                                    </tr>
                                    <tr><td>
                                        <li ><Link style={linkStyle} to="/AdminReact/option/viewDetails"><a href="/" id="view" > VIEW DETAILS</a></Link></li></td>

                                    </tr>
                                </table>
                            </div>
                        </section>
                    </div>
                </React.Fragment>)} />
                <Route path="/AdminReact/option/createParty" component={createParty} />
                <Route path="/AdminReact/option/editParty" component={editParty} />
                <Route path="/AdminReact/option/deleteParty" component={deleteParty} />
                <Route path="/AdminReact/option/createOffice" component={createOffice} />
                <Route path="/AdminReact/option/viewDetails" component={viewDetails} />
            </Router>


        );
    }
}
const linkStyle = {
    color: 'rgb(20, 19, 19)',
    textDecoration: 'none',
    fontsize: 16

}
export default Option;

