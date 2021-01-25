import React from "react";
import {Button} from 'react-bootstrap';

function Contact(){
    return(

        <div class="contact container contact-form">
            <form method="post">
                <h3>Drop me a Message</h3>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="text" name="txtName" class="form-control" placeholder="Your Name *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="text" name="txtEmail" class="form-control" placeholder="Your Email *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="text" name="txtPhone" class="form-control" placeholder="Your Phone Number *" value="" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <textarea name="txtMsg" class="form-control" placeholder="Your Message *" style={{ width: "100%", height: "150px"}}></textarea>
                        </div>
                        <div class="form-group">
                            {/* <input type="submit" name="btnSubmit" class="btnContact" varient="primary" value="Send Message" /> */}
                            <Button variant="primary">Send Message</Button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Contact;