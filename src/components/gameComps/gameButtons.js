import React, { Component } from 'react';
import { Button } from "semantic-ui-react";
import '../../css/munchGame.css'

class GameButtons extends Component {
    render() {
        return(
            <div>
                <Button className = 'lootRoomButt'>
                    <Button.Content visible>Loot the Room</Button.Content>
                </Button>
                <Button className = 'troubleButt'>
                    <Button.Content visible>Look  For Trouble</Button.Content>
                </Button>
            </div>
        );
    }
}

export default GameButtons;