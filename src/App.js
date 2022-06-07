import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './store/productSlice';

import { Box, Grid } from '@mui/material';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const products = useSelector((state) => state.products.products);

  // const filterProductsBySearch = products.filter((product) => {
  //   return product.title.toLowerCase().includes(search.toLowerCase());
  // });

  // const filterProductsByCategory = products.filter((product) => {
  //   return product.category.toLowerCase().includes(category.toLowerCase());
  // });

  return (
    <Box>
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
