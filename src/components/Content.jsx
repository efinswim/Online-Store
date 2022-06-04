import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Rating,
  Stack,
  styled,
  Typography,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import React from 'react';

const labels = {
  0.5: '120',
  1: '120',
  1.5: '120',
  2: '120',
  2.5: '120',
  3: '120',
  3.5: '120',
  4: '120',
  4.5: '120',
  5: '120',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

function Content() {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  return (
    <Box p={4}>
      <Grid container>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((_, index) => (
          <Grid
            item
            key={index + 1}
            container
            justifyContent='center'
            xs={12}
            sm={6}
            lg={4}>
            <Card sx={{ marginBottom: '20px', maxWidth: 300 }}>
              <CardMedia
                component='img'
                height='140'
                image='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
                alt='green iguana'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Your perfect pack for everyday use and walks in th…to 15
                  inches) in the padded sleeve, your everyday
                </Typography>
              </CardContent>
              <CardActions>
                <Box
                  sx={{
                    width: 200,
                    display: 'flex',
                    alignItems: 'center',
                  }}>
                  <Rating
                    name='hover-feedback'
                    value={value}
                    precision={0.5}
                    getLabelText={getLabelText}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                    onChangeActive={(event, newHover) => {
                      setHover(newHover);
                    }}
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.55 }} fontSize='inherit' />
                    }
                  />
                  {value !== null && (
                    <Box sx={{ ml: 1, fontSize: '10px' }}>
                      ({labels[hover !== -1 ? hover : value]} оцінок)
                    </Box>
                  )}
                </Box>
                <Typography variant='h5' component='p'>109.95$</Typography>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Content;
