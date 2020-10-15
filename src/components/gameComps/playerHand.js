import React, { Component } from 'react';
import '../../css/playerHand.css';

class PlayerHand extends Component {
    render() {
        return(
            <div>
            <div className = "handSizeColouring handOne"><img src={require("../../images/frontBackground.jpg")} alt="" className='imageHolder'/></div>
            <div className = "handSizeColouring handTwo"><img src={require("../../images/frontBackground.jpg")} alt="" className='imageHolder'/></div>
            <div className = "handSizeColouring handThree"><img src={require("../../images/frontBackground.jpg")} alt="" className='imageHolder'/></div>
            <div className = "handSizeColouring handFour"><img src={require("../../images/frontBackground.jpg")} alt="" className='imageHolder'/></div>
            <div className = "handSizeColouring handFive"><img src={require("../../images/frontBackground.jpg")} alt="" className='imageHolder'/></div>
            <div className = "handSizeColouring handSix"><img src={require("../../images/frontBackground.jpg")} alt="" className='imageHolder'/></div>
            <div className = "handSizeColouring handSeven"><img src={require("../../images/frontBackground.jpg")} alt="" className='imageHolder'/></div>
            </div>
        );
    }
}

export default PlayerHand;