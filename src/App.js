import { Box, Grid, Stack } from '@mui/material';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

function App() {
  fetch('https://fakestoreapi.com/products/1')
    .then((res) => res.json())
    .then((json) => console.log(json));
  return (
    <Box>
      <Navbar />
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10}>
          <Content />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
