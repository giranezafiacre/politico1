import React from 'react';
import { Link } from 'react-router-dom';
function Section(){
    return(
        <section className="section">
                    <div className="container">
                      <div className="par">
                        <div className="parag" id="p1">
                          <p>Welcome again to Politico App.Contribute to a nation by giving it good
                          leadership. Politico enables citizens to give their mandate to politicians running for different
                                government offices while building trust in the process through transparency.</p>
                        </div>
                        <div className="parag">
                          <p>Due to possibility of posponing government programs by obstacles like climate conditions or traffic jam
                          we have this app to help us to continue government programs in everyone comfortable condition. This app
                          is evidence of transparence and democracy also in our nation because it has way of showing how
                                    politician are being voted</p>
                        </div>
                      </div>
                      <Link style={linkStyle} to="/SignUpReact"><a href="/" id="create-account-btn">GET
                        STARTED</a></Link>
                    </div>
                  </section>
    )
}
const linkStyle = {
    color: 'rgb(20, 19, 19)',
    textDecoration: 'none',
    fontsize: 16
  
  }
export default Section;