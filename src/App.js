import { Box, Grid } from '@mui/material';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchProducts } from './store/productSlice';

function App() {
  const [search, setSearch] = React.useState('');
  const [category, setCategory] = React.useState('');
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const products = useSelector((state) => state.products.products);

  const filterProductsBySearch = products.filter((product) => {
    return product.title.toLowerCase().includes(search.toLowerCase());
  });

  const filterProductsByCategory = products.filter((product) => {
    return product.category.toLowerCase().includes(category.toLowerCase());
  });

  return (
    <Box>
      <Navbar setSearch={setSearch} />
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Sidebar setCategory={setCategory} />
        </Grid>
        <Grid item xs={10}>
          <Content products={filterProductsBySearch} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
