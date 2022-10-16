import React, { useState } from "react";
import { Badge, Box, Button, Typography } from "@mui/material";
import getRandomJoke from "../../services/ChuckNorrisAPI";

const ChuckNorrisJokes = () => {
  const [joke, setJoke] = useState("");
  const [upVotes, setUpVotes] = useState(0);
  const [downVotes, setDownVotes] = useState(0);

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

  const upVote = () => {
    setUpVotes(upVotes + 1);
  };

  const downVote = () => {
    setDownVotes(downVotes + 1);
  };

  return (
    <div>
      <Button variant="contained" size="large" onClick={getJoke}>
        {joke !== "" ? "Get another joke" : "Get a joke"}
      </Button>
      <Box sx={{ my: 4 }} alignItems="center" justifyContent="center">
        <Typography variant="h5" mb={2} gutterBottom>
          {joke.value}
        </Typography>
        {joke !== "" ? (
          <div>
            <Badge
              badgeContent={upVotes}
              color={"secondary"}
              sx={{ mr: 2 }}
              fullWidth
            >
              <Button variant={"outlined"} color={"secondary"} onClick={upVote}>
                Like it!
              </Button>
            </Badge>
            <Badge badgeContent={downVotes} color={"secondary"} fullWidth>
              <Button
                variant={"outlined"}
                color={"secondary"}
                onClick={downVote}
              >
                Don't like it!
              </Button>
            </Badge>
          </div>
        ) : null}
      </Box>
    </div>
  );
};

export default ChuckNorrisJokes;
