import React from "react";
import Icon from '@mdi/react'
import * as techIcons from "@mdi/js";

function Skills(){

    return(
    <div class="techStack">

    <h2> My Tech Stack </h2>

        <div class="row">

            <div class="col-lg-3 col-sm-6 col-xs-6 py-2">
                <div class="boxshadow">
                    <Icon 
                        path={techIcons.mdiLanguageHtml5}
                        title="User Profile"
                        size={3}
                        color= "#E44D26"
                    />
                    <h6>HTML</h6>
                </div>
            </div>

            <div class="col-lg-3 col-sm-6 col-xs-6 py-2"> {/* shado */}
                <div class="boxshadow">
                <Icon path={techIcons.mdiLanguageCss3}
                        title="User Profile"
                        size={3}
                        color="#2965f1"
                    />
                    <h6>CSS</h6>
                </div>
            </div>

            <div class="col-lg-3 col-sm-6 col-xs-6 py-2 ">
                <div class="boxshadow">
                <Icon path={techIcons.mdiLanguageJavascript}
                        title="User Profile"
                        size={3}
                        color="#f0db4f"
                    />
                    <h6>JAVASCRIPT</h6>
                </div>
            </div>

            <div class="col-lg-3 col-sm-6 col-xs-6 py-2">
                <div class="boxshadow">
                <Icon path={techIcons.mdiReact}
                        title="User Profile"
                        size={3}
                        color="#61DBFB"
                    />
                    <h6>REACT.JS</h6>
                </div>
            </div>

        </div>

        <div class="row">

            <div class="col-lg-3 col-sm-6 col-xs-6 py-2">
                <div class="boxshadow">
                <Icon path={techIcons.mdiNodejs}
                        title="User Profile"
                        size={3}
                        color="#6cc24a"
                    />
                    <h6>NODE.JS</h6>
                </div>
                </div>

                <div class="col-lg-3 col-sm-6 col-xs-6 py-2">
                <div class="boxshadow">
                <Icon path={techIcons.mdiDatabase}
                        title="User Profile"
                        size={3}
                        color="#00758F"
                    />
                    <h6>SQL</h6>
                </div>
                </div>

                <div class="col-lg-3 col-sm-6 col-xs-6 py-2">
                <div class="boxshadow">
                <Icon path={techIcons.mdiLeaf}
                        title="User Profile"
                        size={3}
                        color="#4DB33D"
                    />
                    <h6>MONGODB</h6>
                </div>
                </div>

                <div class="col-lg-3 col-sm-6 col-xs-6 py-2">
                <div class="boxshadow">
                <Icon path={techIcons.mdiGit}
                        title="User Profile"
                        size={3}
                        color="#F1502F"
                    />
                    <h6>GIT</h6>
                </div>
            </div>

        </div>

        <div class="row">

        <div class="col-lg-3 col-sm-6 col-xs-6 py-2">
            <div class="boxshadow">
            <Icon path={techIcons.mdiBootstrap}
                        title="User Profile"
                        size={3}
                        color= "purple"
                    />
                <h6>BOOTSRAP4</h6>
            </div>
            </div>

            <div class="col-lg-3 col-sm-6 col-xs-6 py-2">
            <div class="boxshadow">
            <Icon path={techIcons.mdiJquery}
                        title="User Profile"
                        size={3}
                        color="#0769AD"
                    />
                <h6>JQUERY</h6>
            </div>
            </div>

            <div class="col-lg-3 col-sm-6 col-xs-6 py-2">
            <div class="boxshadow">
            <Icon path={techIcons.mdiApi}
                        title="User Profile"
                        size={3}
                        color="black"
                    />
                <h6>REST</h6>
            </div>
            </div>

            <div class="col-lg-3 col-sm-6 col-xs-6 py-2">
            <div class="Animate bg-image hover-zoom boxshadow">
            <Icon path={techIcons.mdiAlphaHBoxOutline}
                        title="User Profile"
                        horizontal
                        size={3}
                        color="purple"
                    />
                <h6>HEROKU</h6>
            </div>
            </div>

        </div>
    </div>
    );
}

export default Skills;