import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export type WorkCardProps = {
  image: string;
  fit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  alt: string;
  title: string;
  description?: string;
  link?: {
    url: string;
    text: string;
  };
};

export default function WorkCard(props: WorkCardProps) {
  return (
    <Card className='h-72 max-w-lg relative'>
      <CardMedia
        component='img'
        className='h-1/3'
        alt={props.alt}
        src={props.image}
        sx={{ objectFit: props.fit || 'cover' }}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {props.title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {props.description || ''}
        </Typography>
      </CardContent>
      {props.link && (
        <CardActions className='absolute bottom-0'>
          <Button size='small' href={props.link.url}>
            {props.link.text}
          </Button>
        </CardActions>
      )}
    </Card>
  );
}
