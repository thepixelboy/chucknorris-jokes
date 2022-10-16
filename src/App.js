import ChuckNorrisJokes from "./components/pure/ChuckNorrisJokes";
import { Box, Container, Typography } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Chuck Norris Jokes
          </Typography>
        </Box>
        <ChuckNorrisJokes />
      </Container>
    </div>
  );
}

export default App;
