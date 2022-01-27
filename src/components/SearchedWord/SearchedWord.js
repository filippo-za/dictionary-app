import React, { useState, useEffect } from "react";

import { API } from "../../api/Api.js";

import { Link, useParams } from "react-router-dom";

import Button from "../Button/Button.js";

import Spinner from "../Spinner/Spinner.js";

import axios from "axios";

import "../SearchedWord/SearchedWord.css";

const SearchedWord = ({ savedWord, addToSaveWord, removeToSaveWord }) => {
  const { word } = useParams();
  const [noFound, setNoFound] = useState(true);
  const [words, setWords] = useState([]);
  const [audio, setAudio] = useState(null);

  const isSavedWord = Object.keys(savedWord).includes(word);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`${API}${word}`);
        setWords(response.data);

        let phonetics = response.data[0].phonetics;
        if (!phonetics.length) return;

        const url = phonetics[0].audio;

        setAudio(new Audio(url));
      } catch (error) {
        setNoFound(false);
      }
    };

    getData();
  }, []);

  if (!noFound)
    return (
      <div className="container">
        <div className="not_found">
          <h1 className="not_found_text">word not found </h1>
          <Link to="/">
            <button className="not_found_btn">
              <i className="fas fa-arrow-left"></i> back off
            </button>
          </Link>
        </div>
      </div>
    );

  if (!words.length) return <Spinner />;

  return (
    <div className="container">
      <div className="container_navigate">
        <Link to="/">
          <Button />
        </Link>
        <button
          onClick={() =>
            isSavedWord ? removeToSaveWord(word) : addToSaveWord(word, words)
          }
          className="icon_btn"
        >
          {isSavedWord ? (
            <i className="fas fa-bookmark"></i>
          ) : (
            <i className="far fa-bookmark"></i>
          )}
        </button>
      </div>

      <div className="container_searchedWord">
        <h3 className="word">{word}</h3>
        {audio && (
          <button onClick={() => audio.play()} className="play">
            <i className="fas fa-volume-up"></i>
          </button>
        )}
      </div>

      {words.map((definition, index) => (
        <div className="container_info_details" key={index}>
          {definition.meanings.map((mean, index) => (
            <div className="container_info" key={index}>
              <div className="part_of_speech">{mean.partOfSpeech}</div>
              {mean.definitions.map((def, index) => (
                <div
                  style={{ fontSize: "20px", marginLeft: "10px" }}
                  key={index}
                >
                  {mean.definitions.length > 1 && `${index + 1}. `}
                  {def.definition}
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SearchedWord;
