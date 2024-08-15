import React from "react";
import ReactDOM from "react-dom";
import "../styles/game.css";
import { useNavigate } from 'react-router-dom';

class Gamerow extends React.Component {
  state = {
    list: Array.apply(null, { length: 30 }),
    submitted: false,
    classList: [...Array(30)].map(() => 'letter-box'),
    guessword: this.game(),
    counter: 0,
    global_counter: 0,
  };


  async game() {
    const response = await fetch('https://random-word-api.herokuapp.com/word?length=5');
    const data = await response.json();
    this.state.guessword = data[0];
    console.log(this.state.guessword);
  }


  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      submitted: true
    });
    this.check();
  };

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  check() {
    var num = 0;
    var isWon = true;
    for (var j=this.state.counter; j<this.state.counter+5; j++) {
      var result = this.state.list[j].toLowerCase();

      if (result === this.state.guessword[num] && j-this.state.counter === num) {  
        this.state.classList[j] = 'letter-box-green';
      }
      else if (this.state.guessword.match(result)) {
        this.state.classList[j] = 'letter-box-yellow';
      } else {
        this.state.classList[j] = 'letter-box-gray';
      }
      num = num + 1;
    }

    for (var i=this.state.counter; i<this.state.counter+5; i++)
    {
      if (this.state.classList[i] !== 'letter-box-green') {
        console.log('here');
        isWon = false;
      }
    }
    this.state.counter = this.state.counter + 5;
    if (isWon === true) {
      alert("You won!");
      this.refresh();
    }
    if (this.state.counter > 29) {
      alert("You Lost!");
      this.refresh();
    }
  }

  refresh() {
    window.location.reload();
  }

  render() {
    const { submitted, list, classList } = this.state;
    return (
      <>
      <a href="./home"><button>Back</button></a>
      <form onSubmit={this.handleSubmit}>
        <div className="game-board">
          <div className="letter-row">
            <input className={`${submitted ? this.state.classList[0] : "letter-box"}`} value={this.state.list[0]} onChange={(e) => { list[0] = e.target.value }} />
            <input className={`${submitted ? this.state.classList[1] : "letter-box"}`} value={this.state.list[1]} onChange={(e) => { list[1] = e.target.value }} />
            <input className={`${submitted ? this.state.classList[2] : "letter-box"}`} value={this.state.list[2]} onChange={(e) => { list[2] = e.target.value }} />
            <input className={`${submitted ? this.state.classList[3] : "letter-box"}`} value={this.state.list[3]} onChange={(e) => { list[3] = e.target.value }} />
            <input className={`${submitted ? this.state.classList[4] : "letter-box"}`} value={this.state.list[4]} onChange={(e) => { list[4] = e.target.value }} />
          </div>
          <div className="letter-row">
            <input className={`${submitted ? this.state.classList[5] : "letter-box"}`} value={this.state.list[5]} onChange={(e) => { list[5] = e.target.value }} />
            <input className={`${submitted ? this.state.classList[6] : "letter-box"}`} value={this.state.list[6]} onChange={(e) => { list[6] = e.target.value }} />
            <input className={`${submitted ? this.state.classList[7] : "letter-box"}`} value={this.state.list[7]} onChange={(e) => { list[7] = e.target.value }} />
            <input className={`${submitted ? this.state.classList[8] : "letter-box"}`} value={this.state.list[8]} onChange={(e) => { list[8] = e.target.value }} />
            <input className={`${submitted ? this.state.classList[9] : "letter-box"}`} value={this.state.list[9]} onChange={(e) => { list[9] = e.target.value }} />
          </div>
          <div className="letter-row">
            <input className={`${submitted ? this.state.classList[10] : "letter-box"}`} value={this.state.list[10]} onChange={(e) => { list[10] = e.target.value }} />
            <input className={`${submitted ? this.state.classList[11] : "letter-box"}`} value={this.state.list[11]} onChange={(e) => { list[11] = e.target.value }} />
            <input className={`${submitted ? this.state.classList[12] : "letter-box"}`} value={this.state.list[12]} onChange={(e) => { list[12] = e.target.value }} />
            <input className={`${submitted ? this.state.classList[13] : "letter-box"}`} value={this.state.list[13]} onChange={(e) => { list[13] = e.target.value }} />
            <input className={`${submitted ? this.state.classList[14] : "letter-box"}`} value={this.state.list[14]} onChange={(e) => { list[14] = e.target.value }} />
          </div>
          <div className="letter-row">
            <input className={`${submitted ? this.state.classList[15] : "letter-box"}`} value={this.state.list[15]} onChange={(e) => { list[15] = e.target.value }} />
            <input className={`${submitted ? this.state.classList[16] : "letter-box"}`} value={this.state.list[16]} onChange={(e) => { list[16] = e.target.value }} />
            <input className={`${submitted ? this.state.classList[17] : "letter-box"}`} value={this.state.list[17]} onChange={(e) => { list[17] = e.target.value }} />
            <input className={`${submitted ? this.state.classList[18] : "letter-box"}`} value={this.state.list[18]} onChange={(e) => { list[18] = e.target.value }} />
            <input className={`${submitted ? this.state.classList[19] : "letter-box"}`} value={this.state.list[19]} onChange={(e) => { list[19] = e.target.value }} />
          </div>
          <div className="letter-row">
            <input className={`${submitted ? this.state.classList[20] : "letter-box"}`} value={this.state.list[20]} onChange={(e) => { list[20] = e.target.value }} />
            <input className={`${submitted ? this.state.classList[21] : "letter-box"}`} value={this.state.list[21]} onChange={(e) => { list[21] = e.target.value }} />
            <input className={`${submitted ? this.state.classList[22] : "letter-box"}`} value={this.state.list[22]} onChange={(e) => { list[22] = e.target.value }} />
            <input className={`${submitted ? this.state.classList[23] : "letter-box"}`} value={this.state.list[23]} onChange={(e) => { list[23] = e.target.value }} />
            <input className={`${submitted ? this.state.classList[24] : "letter-box"}`} value={this.state.list[24]} onChange={(e) => { list[24] = e.target.value }} />
          </div>
          <div className="letter-row">
            <input className={`${submitted ? this.state.classList[25] : "letter-box"}`} value={this.state.list[25]} onChange={(e) => { list[25] = e.target.value }} />
            <input className={`${submitted ? this.state.classList[26] : "letter-box"}`} value={this.state.list[26]} onChange={(e) => { list[26] = e.target.value }} />
            <input className={`${submitted ? this.state.classList[27] : "letter-box"}`} value={this.state.list[27]} onChange={(e) => { list[27] = e.target.value }} />
            <input className={`${submitted ? this.state.classList[28] : "letter-box"}`} value={this.state.list[28]} onChange={(e) => { list[28] = e.target.value }} />
            <input className={`${submitted ? this.state.classList[29] : "letter-box"}`} value={this.state.list[29]} onChange={(e) => { list[29] = e.target.value }} />
          </div>
        </div>
        <button className="btn btn-outline-primary col-md-6">Check</button>
      </form>
      <button className="btn btn-outline-primary col-md-6" onClick={this.refresh}>refresh</button>
      </>
    );
  }
}

export default Gamerow;