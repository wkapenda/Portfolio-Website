import React from "react";

function Footer(){

    const currentYear = new Date().getFullYear()

    return(
        <div>
            <footer>© Copyright {currentYear} Willem Kapenda. All Rights Reserved</footer>
        </div>

    );
}

export default Footer;