import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';


function Cards(){

    return(
      <div>
        <div className="row">
          <div className= "card col-sm-12 col-md-12 col-lg-6">
            <Card >
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Exclusive Notes"
                  height="fit"
                  image= {require("./images/ExclusiveNotes.png")}
                  title="Exclusive Notes"
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                  Exclusive Notes provides a platform for users to record their own notes. 
                  Displaying each individual note neatly when added and removal of a note upon deletion.
                  </Typography>
                </CardContent>
              </CardActionArea>

              <CardActions disableSpacing="true">
                <Chip variant="outlined" size="small" label="HTML5"/>
                <Chip variant="outlined" size="small" label="CSS3"/>
                <Chip variant="outlined" size="small" label="Bootstrap4"/>
                <Chip variant="outlined" size="small" label="JavaScript" />
                <Chip variant="outlined" size="small" label="Nodejs"/>
                <Chip variant="outlined" size="small" label="Reactjs" />
              </CardActions>

              <CardActions>
                <Button size="medium" variant="contained" color="primary" href="https://exclusivenotes.herokuapp.com/" target="_blank">
                View
                </Button>
                <Button size="medium" variant="contained" color="primary" href="https://github.com/wkapenda/Exclusive-Notes" target="_blank">
                Code
                </Button>
              </CardActions>
            </Card>
          </div>
        <div className= "card col-sm-12 col-md-12 col-lg-6">
        <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Drummer Kit"
                height="fit"
                image= {require("./images/Drumkit.png")}
                title="Drummer Kit"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                The app transforms your screen into a lifelike simulation of a drum kit. 
                Watch as your fingertips, pressing the indicated keys, and clicking on the icons, 
                magically transform into drumsticks.
                </Typography>
              </CardContent>
            </CardActionArea>

            <CardActions disableSpacing="true">
              <Chip variant="outlined" size="small" label="HTML5"/>
              <Chip variant="outlined" size="small" label="CSS3"/>
              <Chip variant="outlined" size="small" label="Bootstrap4"/>
              <Chip variant="outlined" size="small" label="JavaScript"/>
              <Chip variant="outlined" size="small" label="Nodejs"/>
              <Chip variant="outlined" size="small" label="jQuery"/>
            </CardActions>

            <CardActions>
              <Button size="medium" variant="contained" color="primary" href="https://drummerkitapp.herokuapp.com/" target="_blank">
              View
              </Button>
              <Button size="medium" variant="contained" color="primary" href="https://github.com/wkapenda/DrummerKit-App" target="_blank">
              Code
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>

      <div className="row">
          <div className= "card col-sm-12 col-md-12 col-lg-6">
            <Card >
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="To-do-list"
                  height="fit"
                  image= {require("./images/Todolist.png")}
                  title="To-do-list"
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                  A virtual list that stores your important tasks and errands that need to be accomplished. 
                  The user is able to seamlessly add each task and remove any task by clicking on it.
                  </Typography>
                </CardContent>
              </CardActionArea>

              <CardActions disableSpacing="true">
              <Chip variant="outlined" size="small" label="HTML5"/>
                <Chip variant="outlined" size="small" label="CSS3"/>
                <Chip variant="outlined" size="small" label="Bootstrap4"/>
                <Chip variant="outlined" size="small" label="JavaScript" />
                <Chip variant="outlined" size="small" label="Nodejs"/>
                <Chip variant="outlined" size="small" label="Reactjs" />
              </CardActions>

              <CardActions>
                <Button size="medium" variant="contained" color="primary" href="https://todolisttasks.herokuapp.com/" target="_blank">
                View
                </Button>
                <Button size="medium" variant="contained" color="primary" href="https://github.com/wkapenda/ToDoList-App" target="_blank">
                Code
                </Button>
              </CardActions>
            </Card>
          </div>
        <div className= "card col-sm-12 col-md-12 col-lg-6">
        <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Dice game"
                height="fit"
                image= {require("./images/Dicegame.png")}
                title="Dice game"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                If you are looking to play some fun dice games with your friends and loved ones, the dice game is for you. 
                It is played with two dice for rolling by click on the “roll dice” button. Player with the highest number wins.
                </Typography>
              </CardContent>
            </CardActionArea>

            <CardActions disableSpacing="true">
              <Chip variant="outlined" size="small" label="HTML5"/>
              <Chip variant="outlined" size="small" label="CSS3"/>
              <Chip variant="outlined" size="small" label="Bootstrap4"/>
              <Chip variant="outlined" size="small" label="JavaScript" />
              <Chip variant="outlined" size="small" label="Nodejs"/>
              <Chip variant="outlined" size="small" label="jQuery" />
            </CardActions>

            <CardActions>
              <Button size="medium" variant="contained" color="primary" href="https://dicegame2players.herokuapp.com/" target="_blank">
              View
              </Button>
              <Button size="medium" variant="contained" color="primary" href="https://github.com/wkapenda/Dice-Game" target="_blank">
              Code
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>

      <div className="row">
          <div className= "card col-sm-12 col-md-12 col-lg-6">
            <Card >
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Consulting"
                  height="fit"
                  image= {require("./images/Concho.png")}
                  title="Concho Consulting"
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                  A website for a consulting company, displays what services they offer, the team members involved, and provides
                  their contact details. The website is a front-end concept design.
                  </Typography>
                </CardContent>
              </CardActionArea>

              <CardActions disableSpacing="true">
                <Chip variant="outlined" size="small" label="HTML5"/>
                <Chip variant="outlined" size="small" label="CSS3"/>
                <Chip variant="outlined" size="small" label="Bootstrap4"/>
              </CardActions>

              <CardActions>
                <Button size="medium" variant="contained" color="primary" href="https://wkapenda.github.io/Concho-Website/" target="_blank">
                View
                </Button>
                <Button size="medium" variant="contained" color="primary" href="https://github.com/wkapenda/Concho-Website" target="_blank">
                Code
                </Button>
              </CardActions>
            </Card>
          </div>
        <div className= "card col-sm-12 col-md-12 col-lg-6">
        <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Tindog"
                height="fit"
                image= {require("./images/Tindog.png")}
                title="Tindog"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                A concept website for a Tinder like app for dogs that lets you "Find other dogs & their owners around you",
                the website provides download options of the app for android and iOS.
                </Typography>
              </CardContent>
            </CardActionArea>

            <CardActions disableSpacing="true">
              <Chip variant="outlined" size="small" label="HTML5"/>
              <Chip variant="outlined" size="small" label="CSS3"/>
              <Chip variant="outlined" size="small" label="Bootstrap4"/>
            </CardActions>

            <CardActions>
              <Button size="medium" variant="contained" color="primary" href="https://wkapenda.github.io/Tindog-Website/" target="_blank">
              View
              </Button>
              <Button size="medium" variant="contained" color="primary" href="https://github.com/wkapenda/Tindog-Website" target="_blank">
              Code
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>




    </div>
    



    );
}

export default Cards;

