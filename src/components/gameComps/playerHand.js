import React, { Component } from 'react';
import '../../css/playerHand.css';

class PlayerHand extends Component {
    render() {
        return(
            <div>
            <div className = "handSizeColouring handOne" />
            <div className = "handSizeColouring handTwo" />
            <div className = "handSizeColouring handThree" />
            <div className = "handSizeColouring handFour" />
            <div className = "handSizeColouring handFive" />
            <div className = "handSizeColouring handSix" />
            <div className = "handSizeColouring handSeven"><img src={require("../../images/frontBackground.jpg")} alt="" className='imageHolder'/></div>
            </div>
        );
    }
}

export default PlayerHand;