import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import politicoimg from '../images/politico1.png';
import options from '../images/options.PNG';
import '../css/AdminPage.css';
import option from './Option';

class AdminReact extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <div className="container">
              <div className="parallel">

                <div className="header">

                  <a href="/"><img id="politico" src={politicoimg} alt="" /></a>
                </div>

                <div className="header">
                  <h1>Welcome to politico
             Application</h1>
                </div>

                <nav className="option">
                  <ul>
                    <li><Link style={linkStyle} to="/AdminReact/option"><a href="/"><img id="politico1" src={options} alt="" /></a></Link></li>
                  </ul>
                </nav>
              </div>
            </div>
          </header>
          <Route
            exact
            path="/"
            render={props => (<React.Fragment>
              <section>
              </section>
            </React.Fragment>)} />;
</div>
        <Route path="/AdminReact/option" component={option} />
      </Router>


    );
  }
}
const linkStyle = {
  color: 'rgb(20, 19, 19)',
  textDecoration: 'none',
  fontsize: 16

}
export default AdminReact;
