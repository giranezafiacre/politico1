import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../css/UserPage.css';

class viewPol extends Component {

    render() {
        return (
            <Router><Route
                exact
                path="/userPageReact/option/viewPol"
                render={props => (<React.Fragment>
                    <div className="App">
                    <section className="section">
                        <div class="container">
                        <div id="viewpol-form">
                        <div class="viewingpol-form" id="viewingpol-form">
                
                
                            <table>
                                <thead>
                                    <th>names</th>
                
                                    <th>post he/she occupied</th>
                                </thead>
                                <tr>
                                    <td>Ndahayo Aloys</td>
                                    <td>Minister of Education</td>
                                </tr>
                                <tr>
                                    <td>Mukantabana Samuela</td>
                                    <td>Minister of Health</td>
                                </tr>
                            </table>
                
                
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
export default viewPol;