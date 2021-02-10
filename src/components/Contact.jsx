import React, {useState} from "react";
import {Button} from 'react-bootstrap';
import emailjs, { init } from 'emailjs-com';
init("user_mrm5aSXRYOQrkQh8FgJB6");

function Contact(){


    const [contact, setContact] = useState({
        fName: "",
        email: "",
        message: ""
      });

      function DetectTyping(event) {
        const { name, value } = event.target;
    
        setContact(prevValue => {
          if (name === "fName") {
            return {
              fName: value,
              lName: prevValue.lName,
              email: prevValue.email
            };
          } else if (name === "email") {
            return {
              fName: prevValue.fName,
              email: value,
              message: prevValue.message
            };
          } else if (name === "message") {
            return {
              fName: prevValue.fName,
              email: prevValue.email,
              message: value
            };
          }
        });
      }

      function sendEmail(event) {
        
        event.preventDefault();
        const myName = "Willem"
    
        emailjs.sendForm("service_b35ddim", "template_36107th", event.target , "user_mrm5aSXRYOQrkQh8FgJB6")
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          setContact({
            fName: "",
            email: "",
            message: ""
          });
      }


    return(

      <div class="contact contact-form" id="section5">
      <form onSubmit={sendEmail} enctype="text/plain" id="form1">
      <h3>Drop me a Message</h3>
        <div class="row">
          <div class="col-md-6">
              <div class="form-group">
                  <input
                  autoComplete="off"
                  onChange={DetectTyping} 
                  name="fName" 
                  class="form-control" 
                  placeholder="Your Name ..."
                  value={contact.fName}
                  />
              </div>
              <div class="form-group">
                  <input
                  autoComplete="off"
                  type="email" 
                  onChange={DetectTyping} 
                  name="email" 
                  class="form-control" 
                  placeholder="Your Email ..."
                  value={contact.email}
                  />
              </div>
              </div>
              <div class="col-md-6">
                  <div class="form-group">
                      <textarea 
                      onChange={DetectTyping}
                      name="message" 
                      class="form-control" 
                      placeholder="Your Message ..." 
                      style={{ width: "100%", height: "320px"}}
                      value={contact.message}
                      >
                      </textarea>
                  </div>
                  <div class="form-group">
                      <Button type="submit" form="form1" variant="primary" value="Send">Send Message</Button>
                  </div>
              </div>
        </div>
      </form>
    </div>

    );
}

export default Contact;


