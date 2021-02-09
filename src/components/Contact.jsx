import React from "react";
import {Button} from 'react-bootstrap';

function Contact(){
    return(

        <div class="contact contact-form" id="section5">
            <form action="mailto:wkapenda@gmail.com" method="post" enctype="text/plain" id="form1">
                <h3>Drop me a Message</h3>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="text" name="txtName" class="form-control" placeholder="Your Name ..."/>
                        </div>
                        <div class="form-group">
                            <input type="text" name="txtEmail" class="form-control" placeholder="Your Email ..."/>
                        </div>
                        <div class="form-group">
                            <input type="text" name="txtPhone" class="form-control" placeholder="Your Phone Number ..."/>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <textarea name="txtMsg" class="form-control" placeholder="Your Message ..." style={{ width: "100%", height: "320px"}}></textarea>
                        </div>
                        <div class="form-group">
                            {/* <input type="submit" name="btnSubmit" class="btnContact" varient="primary" value="Send Message" /> */}
                            <Button type="submit" form="form1" variant="primary" value="Submit">Send Message</Button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Contact;