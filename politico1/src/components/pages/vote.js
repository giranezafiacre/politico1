import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../css/UserPage.css';

class vote extends Component {

    render() {
        return (
            <Router><Route
                exact
                path="/userPageReact/option/vote"
                render={props => (<React.Fragment>
                    <div className="App">
                    <section className="section">
                        <div class="container">
                        <div id="vote-form">
        <div class="voting-form" id="voting-form">

                <table>
                    <tr>
                        <td></td>
                        <td><label for="post" class="form" id="combo">post office that is to be voted:</label>
                            <select name="post" class="form">
                                <option value="mayor">Mayor</option>
                                <option value="minister of finance">Finance Minister</option>
                            </select></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td> </td>
                        <td><label for="leader" class="form" id="combo">politician you are voting for:</label>
                            <select name="leader" class="form">
                                <option value="1">Ndahayo Aloys</option>
                                <option value="2">Mukantabana Samuela</option>
                            </select></td>
                        <td></td>
                    </tr>

                </table>

                <a href="/userPageReact"><button id="votebtn">vote for this person</button></a>
            
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
export default vote;