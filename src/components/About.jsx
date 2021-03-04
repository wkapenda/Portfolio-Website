import React from "react";

function About(){

    return(
        <div class="about media-body" id="section4">

        <h2>Who's this guy?</h2>
        
            <div class="row aboutPicDes">
                <div class="col-lg-6 col-sm-12 col-xs-6 py-2">
                    <img src={require("./images/profilePhoto.png")} alt="My profile ID" class="profilePic"></img>
                </div>

                <div class="col-lg-6 col-sm-12 col-xs-6 py-2"> 
                    <p>

                    My name is Willem Kapenda, I have a Bachelor of Science in Engineering (Electrical) degree from the University of the Witwatersrand and 
                    I am aspiring to become a world class Software Engineer. I currently have three (3) years of working experience at a Zinc Ore Refinery 
                    and a one (1) year internship working at an engineering consulting firm. As an Electrical Engineer In Training, I have demonstrated strong 
                    problem-solving skills with the ability to work in high-pressure and challenging working environments.
                    I am interested and keen to continue developing my career in the field of Software Engineering because I have always been interested in 
                    this field, possessing exceptional math and computer skills. I improve my skills by doing relevant online courses on Udemy, 
                    Coursera and DataCamp, achieving the following certificates: Web Development Bootcamp 2020, Tensorflow 2.0: Deep Learning and Artificial Intelligence, SQL for Data Science 
                    and Python Programming. I have a solid understanding in these programming skills: Python, JavaScript, C++, mySQL, MongoDB, React, and Git.
                    I am detail-oriented, organized, and precise in my work. I also have strong communication skills with a knack for clear, 
                    illuminating presentation and I am comfortable working on my own, but I also enjoy being part of a motivated team of driven individuals.

                    </p>
                </div>

            </div>

        </div>

    );

}

export default About;

