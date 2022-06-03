import { BakeryDining } from '@mui/icons-material';
import { AppBar, Container, Toolbar, Typography, styled } from '@mui/material';

import React from 'react';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

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
            noWrap
            component='a'
            href='/'
            sx={{
              mr: 2,
              display: { xs: 'none', sm: 'flex' },
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}>
            ONLINE STORE JUNK
          </Typography>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
