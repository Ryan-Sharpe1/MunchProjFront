import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import "../../css/modalStyle.css";

class AddPlayerModal extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      showModal: this.props.showModal,
      title: this.props.title,
      playerNumber: 0,
    };
    this.close = () => {
      this.setState({ showModal: this.props.showModal });
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      showModal: nextProps.showModal,
    });
  }

  updatePlayerNumber = (e) => {
    const playerNumber = e.target.value;
    debugger;
    if (playerNumber > 4) {
      return;
    }
    this.setState((prevState) => {
      return {
        ...prevState,
        playerNumber,
      };
    });
  };

  handleButtonTogglePlayerModal = (toggle) => {

    this.setState({
        showModal: toggle
    });
}
  postPlayers = async () => {
    for (let i = 0; i < this.state.playerNumber; i++) {
      var player = document.getElementById(i).value;
      await fetch("http://localhost:4000/player/addPlayer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ PlayerName: player }),
      });
    }
    this.handleButtonTogglePlayerModal(false);
  };


  render() {
    var playerInputs = [];
    for (let i = 0; i < this.state.playerNumber; i++) {
      playerInputs.push(<input key={i} id={i} className="spawnedInput" />);
    }
    return (
      <Modal
        show={this.state.showModal}
        onHide={this.props.close ? this.props.close : this.close}
        backdrop={true}
      >
        <br />
        <Modal.Header>
          <h3 className="modalHead">Name your Champions!</h3>
          <br />
        </Modal.Header>
        <Modal.Body className="modalBod">
          <text className="baseText">Amount (Max 4) - </text>
          <input
            id="playerNumber"
            className="inputNumBoxModal"
            type="number"
            value={this.state.playerNumber}
            onChange={this.updatePlayerNumber}
            min="1"
          />
          <div id="my_div">{playerInputs}</div>
        </Modal.Body>
        <Modal.Footer className="modalFoot">
          <Button onClick={this.postPlayers} className="modalConfirm">
            Confirm
          </Button>
          <br></br>
          <Button
            onClick={this.props.close ? this.props.close : this.close}
            className="modalClose"
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
export default AddPlayerModal;
