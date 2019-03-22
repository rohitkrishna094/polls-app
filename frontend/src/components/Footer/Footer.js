import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer>
        <hr />
        <div className="footer_siteNavigation">
          <ul>
            <li>
              <a href="">Terms</a>
            </li>
            <li>
              <a href="">Privacy</a>
            </li>
            <li>
              <a href="">Security</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
          </ul>
        </div>
        <div className="footer_socialContacts">
          <ul>
            <li>
              <a href="http://linkedin.com" target="_blank">
                <i class="fab fa-linkedin" style={{ color: '#0077B5' }} />
              </a>
            </li>
            <li>
              <a href="http://github.com" target="_blank">
                <i class="fab fa-github" style={{ color: 'white' }} />
              </a>
            </li>
            <li>
              <a href="http://medium.com" target="_blank">
                <i class="fab fa-medium" style={{ color: 'white' }} />
              </a>
            </li>
            <li>
              <a href="http://youtube.com" target="_blank">
                <i class="fab fa-youtube" style={{ color: '#ee0000' }} />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer_endingText">© 2019 Rohit Krishna</div>
      </footer>
    );
  }
}

export default Footer;
