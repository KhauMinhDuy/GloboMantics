import React from 'react';
import logo from './GloboLogo.png'

const Header = (props) => {
    return (
        <header className="row">
            <div className="col-md-5">
                <img className="logo" src={logo} alt="logo" />
            </div>
            <div className="col-md-7 mt-5 subtitle">
                {props.title}
            </div>
        </header>
    );
};

export default Header;