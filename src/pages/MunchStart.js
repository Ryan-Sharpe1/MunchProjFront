import React from "react";
import Game from "./MunchGame.js";
import AddPlayerModal from '../components/startPageComps/addPlayerModal';
import "semantic-ui-css/semantic.min.css";
import { Button, Icon } from "semantic-ui-react";
import "../css/munchStart.css";
import "../css/munchGame.css";

export default class Start extends React.Component {
  constructor() {
    super();
    this.state = {
      //this.state represent the rendered values, i.e. what’s currently on the screen
      gamePage: false,
    };
  }

  startGame = () => {
    this.setState({
      gamePage:true
    }
    )
  }

  handleButtonTogglePlayerModal = (toggle) => {

    this.setState({
        showModal: toggle
    });
}

  render() {

    if (this.state.gamePage === true) {
      return (
        <div className = "container">
          <Game />
        </div>
      );
    } 
    
    else {
      return (
        <div className = "container">
          <script>
            <link
              href = "https://fonts.googleapis.com/css?family=Almendra SC"
              rel = "stylesheet"
            ></link>
          </script>
          <body className = "frontBackground">
            <h1 className = "mainTitle glowpulsed">Munchkin</h1>
            <Button className = "playersButt" onClick={() => this.handleButtonTogglePlayerModal(true)}>
                <Button.Content visible>Amount of Players</Button.Content>
            </Button>
            <div>
              <Button animated className = "startButt" onClick={this.startGame}>
                <Button.Content visible>Start Game</Button.Content>
                <Button.Content hidden>
                  <Icon name="bomb" className = "icon" />
                </Button.Content>
              </Button>
            </div>
            <div className = "levelButt">
              <input className = "buttInput" type = "number" placeholder = "Level to Win"></input>
            </div>
          </body>
          <AddPlayerModal title = {"Player Names"} showModal = {this.state.showModal} close = {() => this.handleButtonTogglePlayerModal(false)}/>
        </div>
      );
    }
  }
}
