import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import SearchedWord from "./components/SearchedWord/SearchedWord";
import SavedWord from "./components/SavedWord/SavedWord";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  const [savedWord, setSavedWord] = useState(
    JSON.parse(localStorage.getItem("savedWord")) || {}
  );

  useEffect(() => {
    localStorage.setItem("savedWord", JSON.stringify(savedWord));
  }, [savedWord]);

  const addToSaveWord = (word, words) =>
    setSavedWord((previousSavedWord) => ({
      ...previousSavedWord,
      [word]: words,
    }));

  const removeToSaveWord = (word) =>
    setSavedWord((previousSavedWord) => {
      const temp = { ...previousSavedWord };
      delete temp[word];
      return temp;
    });

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/savedWord">
            <SavedWord savedWord={savedWord} />
          </Route>
          <Route path="/searchedWord/:word">
            <SearchedWord
              savedWord={savedWord}
              addToSaveWord={addToSaveWord}
              removeToSaveWord={removeToSaveWord}
            />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
