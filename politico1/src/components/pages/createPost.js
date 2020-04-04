import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../css/AdminPage.css';

class createPost extends Component {

    render() {
        return (
            <Router>
                <Route
                    exact
                    path="/AdminReact/option/createOffice"
                    render={props => (<React.Fragment>
                        <div className="App">
                            <section>
                                <div class="container">
                                    <div id="createpost-form">
                                        <input id="party" class="form" type="text" value="" placeholder="name of party" required /><br />
                                        <input id="post" class="form" type="text" value="" placeholder="post" required /><br />
                                        <div class="button1">
                                        <a href="/AdminReact/option"><button id="createpost" class="button">create post</button></a>
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
export default createPost;
