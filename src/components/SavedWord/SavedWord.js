import React from "react";

import Button from "../Button/Button.js";

import "../../components/SavedWord/SavedWord.css";

import { Link } from "react-router-dom";

const SavedWord = ({ savedWord }) => {
  return (
    <>
      <div className="container">
        <div className="container_btnSaved">
          <Link to="/">
            <Button />
          </Link>
        </div>

        {Object.keys(savedWord).length > 0 ? (
          Object.keys(savedWord).map((save, index) => (
            <div key={index} className="container_saved mt-3">
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
                to={`/searchedWord/${save}`}
              >
                <h4 className="save_text ">{save}</h4>
              </Link>
            </div>
          ))
        ) : (
          <h3 className="no_word">No words saved...</h3>
        )}
      </div>
    </>
  );
};

export default SavedWord;
