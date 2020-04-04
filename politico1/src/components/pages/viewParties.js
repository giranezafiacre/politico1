import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../css/UserPage.css';

class viewParties extends Component {

    render() {
        return (
            <Router><Route
                exact
                path="/userPageReact/option/viewParties"
                render={props => (<React.Fragment>
                    <div className="App">
                    <section className="section">
                        <div class="container">
                        <div id="viewpart-form">
                        <div class="viewingpart-form" id="viewingpart-form">
                
                            <table>
                                <thead>
                                    <th>names of parties</th>
                                </thead>
                                <tr>
                                    <td>BCDI</td>
                                </tr>
                                <tr>
                                    <td>FDC</td>
                                </tr>
                                <tr>
                                    <td>MFT</td>
                                </tr>
                            </table>
                        </div>
                    </div></div>
                        </section>
                    </div>
                </React.Fragment>)} />
            </Router>


        );
    }
}
export default viewParties;

