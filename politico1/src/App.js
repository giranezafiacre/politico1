import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Section from './components/Layout/Section';
import Footer from './components/Layout/Footer';
import SignInReact from './components/pages/SignInReact';
import SignUpReact from './components/pages/SignUpReact';
import AdminPageReact from './components/pages/AdminReact';
import userPageReact from './components/pages/userPageReact';
import resetPassword from './components/pages/ResetPassword';
import './components/css/homepage.css';

class App extends Component {

  render() {
    return (
      <Router>
        <Route
          exact
          path="/"
          render={props => (
            <React.Fragment>
              <body>
                <div className="App">
                  <Header />
                  <Section />
                  <Footer />
                </div>
              </body>
            </React.Fragment>)}
        />
        <Route path="/SignInReact" component={SignInReact} />
        <Route path="/SignUpReact" component={SignUpReact} />
        <Route path="/AdminReact" component={AdminPageReact} />
        <Route path="/resetPassword" component={resetPassword} />
        <Route path="/UserPageReact" component={userPageReact} />
      </Router>
    );
  }
}
export default App;
