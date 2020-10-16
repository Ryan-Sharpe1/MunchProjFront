import React, { Component } from 'react';
import { Button } from "semantic-ui-react";
import '../../css/munchGame.css'
import gamePage from "/Users/Oliver.Record/Desktop/munchkinApp/MunchProjFront/src/pages/MunchGame.js"

class GameButtons extends Component {

   nextTurn = () => {
    sessionStorage.setItem('reload',true)
    var playerCount = parseInt(sessionStorage.getItem('playerCount'))
    var playersTurn = parseInt(sessionStorage.getItem('playersTurn'))
    if(playersTurn<playerCount){
        playersTurn +=1
    }
    else {playersTurn = 1}
    sessionStorage.setItem('playersTurn',playersTurn)
    window.location.reload()
   } 

    render() {
        return(
            <div>
                <Button className = 'lootRoomButt' style={{visibility:'hidden'}}>
                    <Button.Content visible>Loot the Room</Button.Content>
                </Button>
                <Button className = 'troubleButt' style={{visibility:'hidden'}}>
                    <Button.Content visible>Look  For Trouble</Button.Content>
                </Button>
                <Button className = 'nextTurn'>
                    <Button.Content visible onClick={this.nextTurn} >Next Turn</Button.Content>
                </Button>
            </div>
        );
    }
}

export default GameButtons;