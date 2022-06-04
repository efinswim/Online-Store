import { Box, Grid, Stack } from '@mui/material';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Content from './components/Content'

function App() {
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
