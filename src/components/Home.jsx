import React from "react";


function Home() {
  return (

    <div class="home media-body" id="section1">
      <div class="row">
        <div class="col-lg-6">
        <h2 class="greeting"> Hi,</h2>
        <h1 class="intro"> I'm Willem </h1>
        <h2 class="jobTitle">Software Engineer</h2>
          <p class="serviceDescription"> I develop maintainable, user-friendly, scalable and responsive web applications 
          using modern front-end and back-end skills. I am detail-oriented, organized, and precise in my work.  
          I want to create products that provide great value to companies and give users meaningful experiences.
          At heart, I am a problem solver who looks forward to challenges, and achieving success. 
          I am interested in working on exciting projects with like-minded ambitious people.</p>
        </div>

        <div class="homeImages col-lg-6">
          <div>
            <img src={require("./images/techBackground.jpg")} class="techBackPic"></img>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Home;
