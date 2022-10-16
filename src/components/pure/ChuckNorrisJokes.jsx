import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
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
      <Typography variant="h5" mb={2} gutterBottom>
        {joke.value}
      </Typography>
      <Button variant="contained" size="large" onClick={getJoke}>
        {joke !== "" ? "Get another joke" : "Get a joke"}
      </Button>
    </div>
  );
};

export default ChuckNorrisJokes;
