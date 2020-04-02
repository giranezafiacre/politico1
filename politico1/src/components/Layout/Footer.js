import React from 'react';
import gmail from '../images/gmail.jpg'
import twitter from '../images/twitter.jpg';
function Footer(){
    return(
        <footer>
        <div className="container">
          <div className="contactall">
            <div className="ComeVistUs">
              <i>Come visit us</i>
              <ul>
                <li className="begin">KG 941 Kigali, Rwanda</li>
                <li>plaza A House</li>
                <li>4th floor</li>
              </ul>
            </div>
            <div className="ContactUs" id="ContactUs">
              <i>Contact us</i>
              <ul class="ContactUs-element">
                <li>@politico</li>
                <li>+250785405716</li>
              </ul>
            </div>
            <div class="FollowUs">
              <i>follow us</i>
              <ul class="FollowUs-element">
                <li>
                  <a href="https://www.google.com/intl/fr/gmail/about/#" target="_blank" rel="noopener noreferrer"><img
                    src={gmail} className="beg" alt="" /></a><a href="https://www.google.com/intl/fr/gmail/about/#"
                      target="_blank" rel="noopener noreferrer" class="f">@politico</a>
                </li>
                <li>
                  <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                    <img src={twitter} class="beg" alt="" />
                  </a>
                  <a href="https://www.twitter.com/" className="f" target="_blank" rel="noopener noreferrer">politico</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

    )
}
export default Footer;