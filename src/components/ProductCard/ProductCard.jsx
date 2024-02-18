import styles from './ProductCard.module.scss';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { STATIC_URL } from '../../constants';

export default function ProductCard({product}) {
	const {name, description, price, img} = product;
  return (
    <Card sx={{ width: 345, height: 320 }}>
      <CardMedia
        component="img"
        alt={name}
        height="180"
        image={`${STATIC_URL}/${img}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Купить за {price}</Button>
      </CardActions>
    </Card>
  );
}