import React from 'react';
import logo from './Hallorannslogo.svg'
import name from './Halloranns_name only(1).svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'


class Footer extends React.Component {
    render() {
        return (
            <div>
                <footer className="footer mt-auto py-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-sm-12 text-white mt-5 mb-5 text-left">
                                <div className="row">
                                    <div className="col">
                                        <img src={name} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <p><b>Mon-Sat:</b> 10am-11pm</p>
                                        <ul className="list-unstyled">
                                            <li className="mt-3"><FontAwesomeIcon icon={faMapMarkerAlt} /> 333 Wonderview Avenue, Estes Park, Colorado</li>
                                            <li><FontAwesomeIcon icon={faPhoneAlt} /> 1-833-888-0237</li>
                                            <li><FontAwesomeIcon icon={faEnvelope} />  info@halloranns-overlook.com</li>
                                        </ul>

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="row d-flex justify-content-center">
                                            <div className="col">
                                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                                            </div>
                                            <div className="col">
                                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                                            </div>
                                            <div className="col">
                                                <FontAwesomeIcon icon={faTwitter} size="2x" />
                                            </div>
                                            <div className="col">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col text-left">
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-12 text-right">
                            </div>
                            <div className="col-md-4 col-sm-12 text-right">
                                <img src={logo} />
                            </div>

                        </div>
                    </div>
                </footer>
            </div>
            //adding some lines to save changes to master
            //hope it works!
        )
    }
}

export default Footer;