import React, { Component } from 'react';
import '../../css/munchGame.css'

class ArmourSet extends Component {

    constructor(...args) {
        super(...args);
        this.state = {
        head: "",
        chest:"",
        oneHand:"",
        mainHand: "",
        legs:"",
        feet:""
        };

        }
        componentDidMount = async () => {
       await fetch('http://localhost:4000/player/findPlayer')
        .then((response) => response.json())
        .then((data) => {this.setState({
            head:data.Head,
            chest:data.Chest,
            oneHand:data.oneHand,
            mainHand: data.mainHand,
            legs: data.Legs,
            feet: data.Feet
        })})
        }
        
    render() {
        return(
            <div>
            <div className = "armourSlot" style={{top:'20%', left:'12%'}} id="head"><br/>{this.state.head}<br/><br/><br/><br/><br/>Bonus -</div>
            <div className = "armourSlot" style={{top:'40%', left:'12%'}} id="chest"><br/>{this.state.chest}<br/><br/><br/><br/><br/>Bonus -</div>
            <div className = "armourSlot" style={{top:'40%', left:'2%'}} id="oneHand"><br/>{this.state.oneHand}<br/><br/><br/><br/><br/>Bonus -</div>
            <div className = "armourSlot" style={{top:'40%', left:'22%'}} id="mainHand"><br/>{this.state.mainHand}<br/><br/><br/><br/><br/>Bonus -</div>
            <div className = "armourSlot" style={{top:'60%', left:'17%'}} id="feet"><br/>{this.state.feet}<br/><br/><br/><br/><br/>Bonus -</div>
            <div className = "armourSlot" style={{top:'60%', left:'7%'}} id="legs"><br/>{this.state.legs}<br/><br/><br/><br/><br/>Bonus -</div>
            </div>
        );
    }
}

export default ArmourSet;