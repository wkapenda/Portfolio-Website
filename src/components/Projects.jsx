import React from "react";
import { Link } from "react-scroll";

function Projects(){


    return(


  

        <div class="projects" id="section3">

          <h2>Projects</h2>

            <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2">
              <div class="col">
                  <div class="card shadow-sm">
                    <img src={require("./images/ExclusiveNotes.png")} class="img-fluid" alt="Responsive image"></img>
                    <div class="card-body">
                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. 
                      This content is a little bit longer.</p>
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
              <div class="col">
                  <div class="card shadow-sm">
                    <img src={require("./images/Todolist.png")} class="img-fluid" alt="Responsive image"></img>
                    <div class="card-body">
                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. 
                      This content is a little bit longer.</p>
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
              <div class="col">
                  <div class="card shadow-sm">
                    <img src={require("./images/Tindog.png")} class="img-fluid" alt="Responsive image"></img>
                    <div class="card-body">
                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. 
                      This content is a little bit longer.</p>
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
              <div class="col">
                  <div class="card shadow-sm">
                    <img src={require("./images/Concho.png")} class="img-fluid" alt="Responsive image"></img>
                    <div class="card-body">
                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. 
                      This content is a little bit longer.</p>
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