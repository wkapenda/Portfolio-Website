import React from "react";

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
                          <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                          <button type="button" class="btn btn-sm btn-outline-secondary">Code</button>
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
                          <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                          <button type="button" class="btn btn-sm btn-outline-secondary">Code</button>
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
                          <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                          <button type="button" class="btn btn-sm btn-outline-secondary">Code</button>
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
                          <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                          <button type="button" class="btn btn-sm btn-outline-secondary">Code</button>
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