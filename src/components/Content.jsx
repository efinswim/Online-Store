import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Stack,
  styled,
  Typography,
} from '@mui/material';
import React from 'react';

function Content() {
  return (
    <Box p={4}>
      <Grid container>
        {[0, 1, 2, 3, 4, 5].map((_, index) => (
          <Grid item key={index + 1} container justifyContent='center' xs={4}>
            <Card sx={{ marginBottom: '20px', maxWidth: 300 }}>
              <CardMedia
                component='img'
                height='140'
                image='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
                alt='green iguana'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  Lizard
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small'>Share</Button>
                <Button size='small'>Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Content;
