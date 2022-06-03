import { BakeryDining } from '@mui/icons-material';
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  styled,
  TextField,
  IconButton,
  Badge,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import React from 'react';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
});

const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 15px',
  margin: '10px',
  borderRadius: theme.shape.borderRadius,
  width: '300px',
}));

function Navbar() {
  return (
    <AppBar position='sticky'>
      <Container maxWidth='xl' sx={{ display: 'flex' }}>
        <StyledToolbar disableGutters>
          <BakeryDining
            sx={{ display: { xs: 'flex', sm: 'flex' }, mr: 1 }}
            fontSize='large'
          />
          <Typography
            variant='h6'
            component='a'
            href='/'
            sx={{
              mr: 2,
              display: { xs: 'none', sm: 'none', md: 'flex' },
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}>
            ONLINE STORE JUNK
          </Typography>
            <Search sx={{ display: { xs: 'none', sm: 'flex' }, mr: 1 }}>
              <TextField
                fullWidth
                onInput={(e) => {
                  console.log(e.target.value);
                }}
                variant='standard'
                placeholder='Search...'
              />
              <IconButton edge='end' type='submit'>
                <SearchIcon color='primary' />
              </IconButton>
            </Search>
            <IconButton edge='end' type='submit'>
              <Badge badgeContent={4} color='secondary'>
                <ShoppingCartIcon sx={{ color: 'white' }} />
              </Badge>
            </IconButton>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
