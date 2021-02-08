import React from "react";
// import {useSpring, animated} from 'react-spring'


function Home() {
  return (

    <div class="home media-body" id="section1">
      <div class="row">
        <div class="col-lg-6">
        <h2 class="greeting"> Hi,</h2>
        <h1 class="intro"> I'm Willem </h1>
        <h2 class="jobTitle"> Full-Stack Web Developer</h2>
          <p class="serviceDescription"> I develop maintainable, user-friendly, scalable and responsive web applications 
          using modern front-end and back-end skills. I am detail-oriented, organized, and precise in my work.  
          I want to create products that provide meaningful and relevant experiences to users.
          At heart, I am a problem solver who looks forward to challenges, and achiving success throught persistance. 
          I am interested in working on ambitious projects with positive people.</p>
        </div>

        <div class="homeImages col-lg-6">
          {/* <svg viewBox="0 0 169 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#00DBDE" d="M31.6,-55.2C41.9,-48.9,51.6,-42.1,56.9,-32.9C62.3,-23.6,63.2,-11.8,65.3,1.2C67.5,14.3,70.8,28.5,67.2,40.8C63.5,53,53,63.3,40.7,70.3C28.3,77.4,14.2,81.1,0.5,80.2C-13.1,79.3,-26.2,73.7,-35.5,64.9C-44.7,56.1,-50.1,44.1,-59.1,32.7C-68.1,21.4,-80.7,10.7,-83.1,-1.4C-85.6,-13.5,-77.9,-27.1,-67.9,-36.6C-57.9,-46.2,-45.5,-51.8,-33.8,-57.2C-22.1,-62.6,-11,-67.9,-0.2,-67.6C10.7,-67.3,21.4,-61.4,31.6,-55.2Z" transform="translate(100 100)" />
          </svg> */}
          <div>
            <img src={require("./images/techBackground.jpg")} class="techBackPic"></img>
          </div>

          {/* <div class="animated bg-image hover-zoom">
            <img src={require("./images/circle-cropped.png")} class="idPic"></img>
          </div> */}
          
          
        </div>
      </div>
    </div>

  );
}

export default Home;
