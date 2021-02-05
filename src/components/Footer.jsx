import React from "react";
import Icon from '@mdi/react'
import * as techIcons from "@mdi/js";

function Footer(){

    const currentYear = new Date().getFullYear()

    return(
        <div class="foot">
        <div class="row">        
        <div class = "col-md-6">
            <footer>© Copyright {currentYear}. All Rights Reserved</footer>
        </div>
        <div class="socialMedia col-md-6">
        <i class="fab fa-linkedin sm" style={{color: "f6f5f5"}}></i>
        <i class="fab fa-github sm" style={{color: "f6f5f5"}}></i>
        </div>
        </div>
        </div>

    );
}

export default Footer;