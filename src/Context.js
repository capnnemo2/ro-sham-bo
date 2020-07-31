import React from "react";

export default React.createContext({
  makeChoice: () => {},
  userChoice: "",
  updateScore: () => {},
  score: 0,
});
