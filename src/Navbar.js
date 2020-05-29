import React from 'react';
import header from './Halloranns(2).svg';

class Navbar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        let navLinks = ["Welcome", "Menu", "Press", "Reservations"]

        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
                    <a className="navbar-brand" href="#"><img className="pb-0" src={header} /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {navLinks.map((item) =>
                        <ul className="navbar-nav ml-auto text-right">
                            <li className="nav-item text-right">
                                <a className="nav-link" href="#">{item}</a>
                            </li>
                        </ul>
                        )}
                    </div>
                </nav>
            </div>
        )
    }
}


export default Navbar;
