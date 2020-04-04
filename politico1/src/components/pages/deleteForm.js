import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import politicoimg from './components/images/politico1.png';
// import options from './components/images/options.PNG';
import '../css/AdminPage.css';

class deleteForm extends Component {

    render() {
        return (
            <Router>
                <Route
                    exact
                    path="/AdminReact/option/deleteParty"
                    render={props => (<React.Fragment>
                        <div className="App">
                            <section>
                                <div class="container">
                                <div id="delete-form">
                                <input id="party" class="form" type="text" value="" placeholder="name of party to be deleted" required/><br/>
                                <div class="button1">
                                <a href="/AdminReact/option"><button id="delete" class="button">delete</button></a>
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
export default deleteForm;
