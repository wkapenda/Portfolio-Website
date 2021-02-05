import React from "react";

function About(){

    return(
        <div class="about">

        <h2>Who's this guy?</h2>
        
            <div class="row aboutPicDes">
                <div class="col-lg-6 col-sm-12 col-xs-6 py-2">
                    <img src={require("./images/profilePhoto.png")} class="profilePic"></img>
                </div>

                <div class="col-lg-6 col-sm-12 col-xs-6 py-2"> 
                    <p>

                    My name is Willem Kapenda, I hold a degree in Electrical Engineering (Hon) from the University of the Witwatersrand and 
                    I am aspiring to become a world class Software Engineer. I currently have three (3) years of working experience at a Zinc Ore Refinery 
                    and a one (1) year internship working at an engineering consulting company.
                    I am interested and keen to continue developing my career in the field of Software Engineering because I have always been interested in 
                    software development, possessing exceptional math and computer skills. I improve my skills by doing relevant online courses on Udemy, 
                    Coursera and DataCamp. Achieving the following certificates: Tensorflow 2.0: Deep Learning and Artificial Intelligence, SQL for Data Science 
                    and Python Programming.I am fluent in these programming languages: Python, JavaScript, and C++. 
                    As an Electrical Engineer In Training, I have demonstrated strong problem-solving skills and the ability to work in high-pressure and 
                    challenging working environments. I am detail-oriented, organized, and precise in my work. I have strong communication skills with a knack for clear and 
                    illuminating presentation. I’m comfortable on my own facing the numbers, but I really enjoy being part of a motivated team of smart individuals.

                    </p>
                </div>

            </div>

        </div>

    );

}

export default About;

