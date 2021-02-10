import React from "react";
import { Link } from "react-scroll";

function Projects(){


    return(


  

        <div class="projects" id="section3">

          <h2>Projects</h2>

            <div class="row row-cols-1 row-cols-sm-1 row-cols-md-1">
              <div class="col col-lg-6">
                  <div class="card shadow-sm">
                    <img src={require("./images/ExclusiveNotes.png")} class="img-fluid" alt="Responsive image"></img>
                    <div class="card-body">
                      <p class="card-text">Exclusive Notes provides a platform for users to record their own notes. 
                      Displaying neatly each individual note when added and removing a note when it is deleted.</p>
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                          <div>
                            <a 
                            class="btn btn-sm btn-outline-secondary"
                            target="_blank" 
                            href="https://desolate-springs-11417.herokuapp.com/">
                            View
                            </a>
                            <a 
                            class="btn btn-sm btn-outline-secondary"
                            target="_blank" 
                            href="https://github.com/wkapenda/Exclusive-Notes-App">
                            Code
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
              <div class="col col-lg-6">
                  <div class="card shadow-sm">
                    <img src={require("./images/Todolist.png")} class="img-fluid" alt="Responsive image"></img>
                    <div class="card-body">
                    <p class="card-text">A virtual list that stores your important tasks and errands that need to be accomplished. 
                    The user is able to seamlessly add each task and remove any task by clicking on it.
                    </p>
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                          <div>
                              <a 
                              class="btn btn-sm btn-outline-secondary"
                              target="_blank" 
                              href="https://lit-journey-19973.herokuapp.com/">
                              View
                              </a>
                              <a 
                              class="btn btn-sm btn-outline-secondary"
                              target="_blank" 
                              href="https://github.com/wkapenda/ToDoList-App">
                              Code
                              </a>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
              <div class="col col-lg-6">
                  <div class="card shadow-sm">
                    <img src={require("./images/Tindog.png")} class="img-fluid" alt="Responsive image"></img>
                    <div class="card-body">
                    <p class="card-text">A concept website for a Tinder like app for dogs that lets you "Find other dogs & their owners around you",
                     the website provides download options for the app for android and iOS. 
                    </p>
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                          <div>
                              <a 
                              class="btn btn-sm btn-outline-secondary"
                              target="_blank" 
                              href="https://wkapenda.github.io/Tindog-Website/">
                              View
                              </a>
                              <a 
                              class="btn btn-sm btn-outline-secondary"
                              target="_blank" 
                              href="https://github.com/wkapenda/Tindog-Website">
                              Code
                              </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
              <div class="col col-lg-6">
                  <div class="card shadow-sm">
                    <img src={require("./images/Concho.png")} class="img-fluid" alt="Responsive image"></img>
                    <div class="card-body">
                    <p class="card-text">A website for a consulting company, displays what services they offer, the team members involved, and provides
                    their contact details. The website coded purely with HTML5, CSS3 and Bootstrap4. Front-end concept design.
                    </p>

                      <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                          <div>
                              <a 
                              class="btn btn-sm btn-outline-secondary"
                              target="_blank" 
                              href="https://wkapenda.github.io/Concho-Website/">
                              View
                              </a>
                              <a 
                              class="btn btn-sm btn-outline-secondary"
                              target="_blank" 
                              href="https://github.com/wkapenda/Concho-Website">
                              Code
                              </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>

    );
}

export default Projects;