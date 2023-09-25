import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component='span'
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export type Props = {
  title: string;
  date: {
    year: number;
    month: number;
    day?: number;
  };
  description?: string;
  tags?: string[];
  link?: {
    url: string;
    text: string;
  };
};

export default function TimelineCard(props: Props) {
  const date_str =
    `${props.date.year}-${props.date.month}` +
    (props.date.day ? `-${props.date.day}` : '');
  return (
    <Card sx={{ minWidth: 275 }} variant='outlined' className='rounded-lg'>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          {date_str}
        </Typography>
        <Typography className='text-lg' component='div'>
          {props.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          {props.tags && props.tags.join(', ')}
        </Typography>
        {props.description && (
          <Typography variant='body2'>{props.description}</Typography>
        )}
      </CardContent>
      {props.link && (
        <CardActions>
          <Button size='small' href={props.link.url}>
            {props.link.text}
          </Button>
        </CardActions>
      )}
    </Card>
  );
}
