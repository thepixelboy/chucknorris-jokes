import ChuckNorrisJokes from "./components/pure/ChuckNorrisJokes";
import { Box, Container, Typography } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Chuck Norris Jokes
          </Typography>
        </Box>
      </Container>
      <ChuckNorrisJokes />
    </div>
  );
}

export default App;
