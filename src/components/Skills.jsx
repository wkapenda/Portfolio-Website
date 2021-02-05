import React from "react";
import Icon from '@mdi/react'
import * as techIcons from "@mdi/js";

function Skills(){

    return(
    <div class="techStack">

        <h2> My Tech Stack </h2>

            <div class="row techIcons">
                <div class="col-lg-3 col-sm-6 col-xs-6 py-2">
                    <i class="fab fa-html5 boxshadow" style={{color: "#E44D26"}}></i>
                        <h6>HTML</h6>
                </div>

                <div class="col-lg-3 col-sm-6 col-xs-6 py-2">
                    <i class="fab fa-css3-alt boxshadow" style={{color: "#2965f1"}}></i>
                        <h6>CSS</h6>
                </div>

                <div class="col-lg-3 col-sm-6 col-xs-6 py-2">
                    <i class="fab fa-js boxshadow" style={{color: "#f0db4f"}}></i>
                        <h6>JAVASCRIPT</h6>
                </div>

                <div class="col-lg-3 col-sm-6 col-xs-6 py-2">
                    <i class="fab fa-react boxshadow" style={{color: "#61DBFB"}}></i>
                        <h6>REACT.JS</h6>
                </div>
            </div>

        <div class="row">

            <div class="col-lg-3 col-sm-6 col-xs-6 py-2">
                <i class="fab fa-node-js boxshadow" style={{color: "#6cc24a"}}></i>
                    <h6>NODE.JS</h6>
            </div>

            <div class="col-lg-3 col-sm-6 col-xs-6 py-2">
                <i class="fas fa-database boxshadow" style={{color: "#03506f"}}></i>
                    <h6>SQL</h6>
            </div>

            <div class="col-lg-3 col-sm-6 col-xs-6 py-2">
                <i class="fab fa-envira boxshadow" style={{color: "#4DB33D"}}></i>
                    <h6>MONGODB</h6>
            </div>

            <div class="col-lg-3 col-sm-6 col-xs-6 py-2">
                <i class="fab fa-git-alt boxshadow" style={{color: "#F1502F"}}></i>
                    <h6>GIT</h6>
            </div>

        </div>

        <div class="row">

            <div class="col-lg-3 col-sm-6 col-xs-6 py-2">
                <i class="fab fa-bootstrap boxshadow" style={{color: "purple"}}></i>
                    <h6>BOOTSRAP4</h6>
            </div>

            <div class="col-lg-3 col-sm-6 col-xs-6 py-2">
                {/* <div class=""> */}
                <Icon 
                className = "jqueryIcon boxshadow"
                path={techIcons.mdiJquery}
                title="User Profile"
                size={3}
                color="#0769AD"
                />     
                {/* </div> */}
                <h6>JQUERY</h6>
            </div>

            <div class="col-lg-3 col-sm-6 col-xs-6 py-2">
                <i class="fas fa-cogs boxshadow" style={{color: "black"}}></i>
                    <h6>RESTful APIs</h6>
            </div>

            <div class="col-lg-3 col-sm-6 col-xs-6 py-2">
                <i class="fas fa-h-square boxshadow" style={{color: "purple"}}></i>
                    <h6>HEROKU</h6>
            </div>

        </div>
    </div>
    );
}

export default Skills;