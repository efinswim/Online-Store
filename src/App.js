import { Box, Grid } from '@mui/material';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchProducts } from './store/productSlice';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const products = useSelector((state) => state.products.products);
  return (
    <Box>
      <Navbar />
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10}>
          <Content products={products} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
