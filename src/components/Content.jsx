import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Rating,
  Typography,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/productSlice';

function Content() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const products = useSelector((state) => state.products.products);

  return (
    <Box p={4}>
      <Grid container>
        {products.map((product, index) => (
          <Grid
            item
            key={index + 1}
            container
            justifyContent='center'
            xs={12}
            sm={6}
            lg={4}>
            <Card sx={{ marginBottom: '20px', maxWidth: 300 }}>
              <CardMedia component='img' height='140' image={product.image} />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div' noWrap>
                  {product.title}
                </Typography>
                <Typography variant='body2' color='text.secondary' noWrap>
                  {product.description}
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
                    value={product.rating.rate}
                    precision={0.5}
                    readOnly
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.55 }} fontSize='inherit' />
                    }
                  />
                  <Box sx={{ ml: 1, fontSize: '10px' }}>
                    ({product.rating.count} оцінок)
                  </Box>
                </Box>
                <Typography variant='h5' component='p'>
                  {product.price}$
                </Typography>
              </CardActions>
              <Box>
                <Button
                  fullWidth
                  variant='contained'
                  startIcon={<AddShoppingCartIcon />}>
                  Додати до кошика
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Content;
