import React from "react";

function Footer(){

    const currentYear = new Date().getFullYear()

    return(
        <div class="foot">
            <footer>
                <div className="socialMedia">
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

                <p className="copyright">© Copyright {currentYear}. All Rights Reserved</p>
            
            </footer>
        </div>

    );
}

export default Footer;