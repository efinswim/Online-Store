import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';

function CartItem() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant='h6' component='p' noWrap>
            Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Typography component='p'>Вартість: 100$</Typography>
            <Typography component='p'>Загальна вартість: 200$</Typography>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Button fullWidth variant='contained'>
              Кількість товару: 2
            </Button>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
            <Button variant='outlined'>- видалити кількість</Button>
            <Button variant='outlined'>+ додати кількість</Button>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box>
            <img
              width='150'
              src='https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg'
              alt=''
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default CartItem;
