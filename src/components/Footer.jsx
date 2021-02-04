import React from "react";
import Icon from '@mdi/react'
import * as techIcons from "@mdi/js";

function Footer(){

    const currentYear = new Date().getFullYear()

    return(
        <div class="foot">
        <div class="row">        
        <div class = "col-md-6">
            <footer>© Copyright {currentYear} Willem Kapenda. All Rights Reserved</footer>
        </div>
        <div class="socialMedia col-md-6">
        <Icon 
        className = "sm"
        path={techIcons.mdiLinkedin}
        title="LinkedIn"
        size={1.75}
        color= "f6f5f5"
        />
        <Icon 
        className = "sm"
        path={techIcons.mdiGithub}
        title="Github"
        size={1.75}
        color= "f6f5f5"
        />

        </div>
        </div>
        </div>

    );
}

export default Footer;