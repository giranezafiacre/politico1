import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../css/AdminPage.css';

class editForm extends Component {

    render() {
        return (
            <Router>
                <Route
                    exact
                    path="/AdminReact/option/editParty"
                    render={props => (<React.Fragment>
                        <div className="App">
                            <section>
                                <div class="container">
                                <div id="edit-form">
                                <h1>Edit Form</h1>
                                <input id="party" class="form" type="text" defaultValue="BCDI" placeholder="name of party" required/><br/>
                                <input id="partychief" class="form" type="text" defaultValue="HABUMUREMYI Jean" placeholder="leader of party "
                                    required enabled="true"/><br/>
                                <div class="button1">
                                <a href="/AdminReact/option"><button id="update" class="button">Update</button></a>
                                </div>
                            </div>
                                </div>
                            </section>
                        </div>

                    </React.Fragment>)} />
            </Router>


        );
    }
}
export default editForm;
