import React, { useState } from "react";

import { useHistory } from "react-router-dom";

import "./Home.css";

function Home() {
  const [word, setWord] = useState("");
  let history = useHistory();

  function handleChange(e) {
    const word = e.target.value;
    setWord(word);
  }

  function handleSubmit(e) {
    e.preventDefault();
    history.push(`searchedWord/${word}`);
  }

  return (
    <div className="container">
      <div className="container_home">
        <div className="container_home_img">
          <img className="img-fluid" src="images/didyouknow2.jpg" alt=""></img>
        </div>
        <p className="home_text">search for a word and find out its meaning</p>
        <div className="container_home_input">
          <form onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              type="text"
              placeholder="search for a word..."
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
