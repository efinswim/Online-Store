import { BakeryDining } from '@mui/icons-material';
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  styled,
  IconButton,
  Badge,
  InputBase,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from 'react';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 15px',
  margin: '10px',
  borderRadius: theme.shape.borderRadius,
  width: '600px',
}));

const LogoBlock = styled('div')(({ theme }) => ({
  display: 'flex',
}));

function Navbar({ setSearch }) {
  return (
    <AppBar position='sticky'>
      <Container maxWidth='xl'>
        <StyledToolbar disableGutters>
          <LogoBlock>
            <BakeryDining sx={{ mr: 1 }} fontSize='large' />
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
              ОНЛАЙН СКЛЕП ВСЯКОГО
            </Typography>
          </LogoBlock>
          <Search sx={{ display: { xs: 'flex', sm: 'flex' }, mr: 1 }}>
            <InputBase
              onChange={(e) => setSearch(e.target.value)}
              fullWidth
              placeholder='Пошук...'
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
