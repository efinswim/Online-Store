import { useState } from 'react';

import CartItem from './CartItem';

import { Button, Divider, Grid, Typography } from '@mui/material';

import { Box } from '@mui/system';
import styled from '@emotion/styled';

const CartItems = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export default function Cart() {
  return (
    <Box bgcolor={'white'} p={3}>
      <Typography variant='h4' textAlign='center'>
        Ваш кошик
      </Typography>
      <CartItems>
          <CartItem />
      </CartItems>
      {/* <Divider /> */}
      {/* <Button variant='contained'>Очистити нахер корзину</Button> */}
    </Box>
  );
}
