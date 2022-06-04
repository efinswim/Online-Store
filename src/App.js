import { Box, Stack } from '@mui/material';
import Navbar from './components/Navbar';

function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction='row' justifyContent='space-between' spacing={2}></Stack>
    </Box>
  );
}

export default App;
