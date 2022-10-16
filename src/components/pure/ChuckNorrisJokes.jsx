import React, { useState } from "react";
import getRandomJoke from "../../services/ChuckNorrisAPI";

const ChuckNorrisJokes = () => {
  const [joke, setJoke] = useState("");

  const getJoke = () => {
    getRandomJoke()
      .then((response) => {
        if (response.status === 200) {
          setJoke(response.data);
        }
      })
      .catch((error) => {
        alert(`Something went wrong: ${error}`);
      });
  };

  return (
    <div>
      <button onClick={getJoke}>Get a joke</button>
      <p>{joke.value}</p>
    </div>
  );
};

export default ChuckNorrisJokes;
