import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../css/AdminPage.css';

class createParty extends Component {

    render() {
        return (
            <Router>
                <Route
                    exact
                    path="/AdminReact/option/createParty"
                    render={props => (<React.Fragment>
                        <div className="App">
                            <section>
                                <div class="container">
                                    <div id="create-allform">
                                        <input id="party" class="form" type="text" value="" placeholder="name of party" required /><br />
                                        <input id="partychief" class="form" type="text" value="" placeholder="leader of party " required /><br />
                                        <div class="button1">
                                            <a href="/AdminReact/option"><button id="create" class="button">create</button></a>
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
// const linkStyle = {
//     color: 'rgb(20, 19, 19)',
//     textDecoration: 'none',
//     fontsize: 16

// }
export default createParty;
