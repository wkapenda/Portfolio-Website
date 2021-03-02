import React, {useState, state} from "react";
import {makeStyles} from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import TextField from '@material-ui/core/TextField';
import {Button} from 'react-bootstrap';
import emailjs, { init } from 'emailjs-com';
init("user_mrm5aSXRYOQrkQh8FgJB6");




function Contact(){

    const [contact, setContact] = useState({
        fName: "",
        email: "",
        message: ""
      });

      const [successAlert, setSuccess] = useState(false);
      const [failAlert, setFailure] = useState(false);

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

        if(contact.fName !== "" || contact.message !== ""){

          setSuccess(true);
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
        } else {       
          setFailure(true);
        }

        

      }

      function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
      }

      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }  
        setSuccess(false);
        setFailure(false);
      };


    return(

      <div class="contact contact-form" id="section5">
        <form onSubmit={sendEmail} enctype="text/plain" id="form1">
          <h3>Drop me a Message</h3>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <TextField
                    autoComplete="off"                   
                    name="fName"
                    label="Name"
                    variant="outlined" 
                    style={{ width: "80%"}}
                    value={contact.fName}
                    onChange={DetectTyping} 
                  />
                </div>

                <div class="form-group">
                  <TextField               
                    autoComplete="off"                  
                    type="email"
                    name="email"
                    label="Email"
                    variant="outlined"
                    style={{ width: "80%"}}
                    value={contact.email}
                    onChange={DetectTyping}
                  />
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-group">
                  <TextField                   
                    autoComplete="off"
                    name="message" 
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={12} 
                    style={{ width: "100%", height: "320px"}}
                    value={contact.message}
                    onChange={DetectTyping}
                  />
                </div>
                    
                <div class="form-group">
                  <Button type="submit" form="form1" variant="primary" value="Send">Send Message</Button>
                </div>
              </div>
              
            </div>

            <Snackbar open={successAlert} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success">
                Your message has been sent!
              </Alert>
            </Snackbar>

            <Snackbar open={failAlert} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="error">
                Message failed, please complete the form
              </Alert>
            </Snackbar>

        </form>
      </div>

    );
}

export default Contact;


