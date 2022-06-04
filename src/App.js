import { Box, Stack } from '@mui/material';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction='row' justifyContent='space-between' spacing={2}>
        <Sidebar />
      </Stack>
    </Box>
  );
}

export default App;
