import React, { Component } from 'react';
import '../../css/munchGame.css'

class ArmourSet extends Component {
    render() {
        return(
            <div>
            <div className = "armourSlot" style={{top:'20%', left:'12%'}}/>
            <div className = "armourSlot" style={{top:'40%', left:'12%'}}/>
            <div className = "armourSlot" style={{top:'40%', left:'2%'}}/>
            <div className = "armourSlot" style={{top:'40%', left:'22%'}}/>
            <div className = "armourSlot" style={{top:'60%', left:'17%'}}/>
            <div className = "armourSlot" style={{top:'60%', left:'7%'}}/>
            </div>
        );
    }
}

export default ArmourSet;