import React, { Component } from 'react';
import '../../css/munchGame.css'

class ArmourSet extends Component {

    constructor(...args) {
        super(...args);
        this.state = {
        getData: ""
        };
        }
        componentDidMount() {
        fetch('http://localhost:4000/post')
        .then((response) => response.json())
        .then((data) => console.log('This is your data', data));
        }

    render() {
        return(
            <div>
            <div className = "armourSlot" style={{top:'20%', left:'12%'}} id="head"><br/>Hello<br/><br/><br/><br/><br/><br/>Bonus -</div>
            <div className = "armourSlot" style={{top:'40%', left:'12%'}} id="chest"><br/>Hello<br/><br/><br/><br/><br/><br/>Bonus -</div>
            <div className = "armourSlot" style={{top:'40%', left:'2%'}} id="oneHand"><br/>Hello<br/><br/><br/><br/><br/><br/>Bonus -</div>
            <div className = "armourSlot" style={{top:'40%', left:'22%'}} id="mainHand"><br/>Hello<br/><br/><br/><br/><br/><br/>Bonus -</div>
            <div className = "armourSlot" style={{top:'60%', left:'17%'}} id="feet"><br/>Hello<br/><br/><br/><br/><br/><br/>Bonus -</div>
            <div className = "armourSlot" style={{top:'60%', left:'7%'}} id="legs"><br/>Hello<br/><br/><br/><br/><br/><br/>Bonus -</div>
            </div>
        );
    }
}

export default ArmourSet;