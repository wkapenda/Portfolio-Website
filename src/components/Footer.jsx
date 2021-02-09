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
                        <a 
                        class="fab fa-linkedin sm"
                        style={{color: "white"}}
                        target="_blank" 
                        href="https://www.linkedin.com/in/willem-kapenda-91331484/">
                        </a>
                        <a 
                        class="fab fa-github sm"
                        style={{color: "white"}}
                        target="_blank"
                        textDecoration= "none"
                        href="https://github.com/wkapenda">
                        </a>
                    </div>
            </div>
        </div>

    );
}

export default Footer;