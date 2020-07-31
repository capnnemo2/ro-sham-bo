import React from "react";
import Context from "./Context";
import { Link } from "react-router-dom";

export default class Battlefield extends React.Component {
  static contextType = Context;

  state = {
    houseChoice: "",
    whoWon: "",
  };

  componentDidMount() {
    setTimeout(() => {
      this.letTheHouseChoose();
    }, 1000);
  }

  letTheHouseChoose = () => {
    let house = Math.floor(Math.random() * 3);

    if (house === 0) {
      house = "rock";
    } else if (house === 1) {
      house = "paper";
    } else if (house === 2) {
      house = "scissors";
    }

    this.setState({
      houseChoice: house,
    });

    this.whoWon(house);
  };

  whoWon = (house) => {
    if (this.context.userChoice === "rock") {
      if (house === "rock") {
        this.setState({
          whoWon: "A tie...",
        });
      } else if (house === "paper") {
        this.setState({
          whoWon: "You lose",
        });
      } else if (house === "scissors") {
        this.setState({
          whoWon: "You win",
        });
        this.context.updateScore();
      }
    } else if (this.context.userChoice === "paper") {
      if (house === "rock") {
        this.setState({
          whoWon: "You win",
        });
        this.context.updateScore();
      } else if (house === "paper") {
        this.setState({
          whoWon: "A tie...",
        });
      } else if (house === "scissors") {
        this.setState({
          whoWon: "You lose",
        });
      }
    } else if (this.context.userChoice === "scissors") {
      if (house === "rock") {
        this.setState({
          whoWon: "You lose",
        });
      } else if (house === "paper") {
        this.setState({
          whoWon: "You win",
        });
        this.context.updateScore();
      } else if (house === "scissors") {
        this.setState({
          whoWon: "A tie...",
        });
      }
    }
  };

  render() {
    return (
      <div className="Battlefield">
        <div className="user-choice">You picked: {this.context.userChoice}</div>
        <div className="house-choice">
          The house picked: {this.state.houseChoice}
        </div>
        <div className="whoWon">{this.state.whoWon}</div>
        <div className="play-again">
          <div>Your score: {this.context.score}</div>
          <Link to={"/choices"}>Play again</Link>
        </div>
      </div>
    );
  }
}
