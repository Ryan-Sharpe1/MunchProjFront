import React from "react";
import "semantic-ui-css/semantic.min.css";
import "../css/munchGame.css";
import "../css/playerHand.css";
import {} from "semantic-ui-react";
import ArmourSet from '../components/gameComps/armourSet'
import PlayerHand from '../components/gameComps/playerHand'
import GameButtons from '../components/gameComps/gameButtons'

export default class Game extends React.Component {
  
  render(){

    return (
      <div className = "container">
        <head>
          <link
            href = "https://fonts.googleapis.com/css?family=Almendra SC"
            rel = "stylesheet"
          ></link>
        </head>
        <body className = "gameBackground">
          <h1 className = "glow inGameHeading">Munchkin</h1>
          <h1 className = "glow playerLevel">Player Name <br/> Level - 20</h1>
          <h1 className = "glow gearScore">Combat <br/> Strength <br/>9001</h1>
          <ArmourSet/>
          <PlayerHand/>
          <GameButtons/>
          <div value="Door Card" className='doorCard'></div>
        </body>
      </div>
    );
  }
  
  }
  
  