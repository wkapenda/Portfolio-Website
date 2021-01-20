import React from "react";

function Home() {
  return (

    <div class="home">
      <div class="row">
        <div class="col-lg-6 col-md-6">
        <h2 class="intro"> Hi 👋🏿,</h2>
        <h1 class="intro"> I'm Willem </h1>
        <h2 class="jobTitle"> Full-Stack Web Developer</h2>
          <p class="serviceDescription"> I develop high quality, maintainable and modern web applications using my strong 
          background in HTML, CSS, Javascript. As a well organized person and problem solver, I pay attention to detail when
           dealing with a project.
           
           I'm interested in working on ambitious projects with positive people. </p>
        </div>

        <div class="col-lg-6 col-md-6">
          {/* <img src="images/construction2.jpg" class="img-fluid servicesImage" alt="Responsive image"> */}
        </div>
      </div>
    </div>

  );
}

export default Home;
