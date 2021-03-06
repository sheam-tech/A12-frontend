import "./Footer.css"
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMessage,
  faPhone,
  faLocationDot,
  faBriefcase,
  faAward,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  //Function to get new date and year for copyright text
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div class="footer-dark bg-dark ">
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-md-3 item">
              <h3>Services</h3>
              <ul>
                <li>
                  <a href=".">Web design</a>
                </li>
                <li>
                  <a href=".">Development</a>
                </li>
                <li>
                  <a href=".">Hosting</a>
                </li>
              </ul>
            </div>
            <div class="col-sm-6 col-md-3 item">
              <h3>About</h3>
              <ul>
                <li>
                  <a href=".">Company</a>
                </li>
                <li>
                  <a href=".">Team</a>
                </li>
                <li>
                  <a href=".">Careers</a>
                </li>
              </ul>
            </div>
            <div class="col-md-6 item text">
              <h3>Company Name</h3>
              <p>
                Praesent sed lobortis mi. Suspendisse vel placerat ligula.
                Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis
                tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel
                in justo.
              </p>
            </div>
            <div class="col item social">
              <ul className="list-inline mt-4">
                <li className="list-inline-item">
                  <a href="." target="_blank" title="twitter">
                    <FontAwesomeIcon
                      className="footer-icons text-white"
                      icon={faMessage}
                    />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="." target="_blank" title="facebook">
                    <FontAwesomeIcon className="footer-icons" icon={faPhone} />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="." target="_blank" title="instagram">
                    <FontAwesomeIcon
                      className="footer-icons"
                      icon={faLocationDot}
                    />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="." target="_blank" title="pinterest">
                    <FontAwesomeIcon
                      className="footer-icons"
                      icon={faBriefcase}
                    />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="." target="_blank" title="vimeo">
                    <FontAwesomeIcon className="footer-icons" icon={faAward} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="py-4">
            <div className="container text-center">
              <p className="text-muted mb-0 py-2">
                &copy; Sensor-Bazar {year}. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;