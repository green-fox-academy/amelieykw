import React from 'react';

import Background from '../images/space.jpg';


function Header() {
    let sectionStyle = {
        width: "100%",
        height: "200px",
        backgroundImage: `url(${Background})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        color: "green",
        textAlign: "center"
    };
    return (
        <div style={sectionStyle}>
            <img src="" alt="" />
            <h1>SPACE</h1>
        </div>
    );
}

export default Header;