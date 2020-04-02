import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../css/AdminPage.css';

class viewDetails extends Component {

    render() {
        return (
            <Router>
                <Route
                    exact
                    path="/AdminReact/option/viewDetails"
                    render={props => (<React.Fragment>
                        <div className="App">
                            <section>
                                <div class="container">
                                    <div id="info" >
                                        <table border="2">
                                            <thead>
                                                <th>Party</th>
                                                <th>Leader</th>
                                                <th>Votes</th>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td> BCDI</td>
                                                    <td>Musemakweli Emmanuel</td>
                                                    <td>35%</td>
                                                </tr>
                                                <tr>
                                                    <td> PSRG</td>
                                                    <td>Ukobizaba Fabrice</td>
                                                    <td>33%</td>
                                                </tr>
                                                <tr>
                                                    <td> PFTJ</td>
                                                    <td>Ntakirutimana Andre</td>
                                                    <td>32%</td>
                                                </tr>
                                            </tbody>

                                        </table>
                                    </div>
                                </div>
                            </section>
                        </div>

                    </React.Fragment>)} />
            </Router>


        );
    }
}
export default viewDetails;
