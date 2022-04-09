/* eslint-disable react/prop-types */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useHistory } from 'react-router-dom';

export default function AlbumCard({ album }) {
  console.log(album);
  const history = useHistory();
  const { artworkUrl100, collectionName,
    artistName, collectionId,
  } = album;
  return (
    <Card
      sx={ { width: 150, height: 200, backgroundColor: '#021022' } }
      elevation={ 20 }
    >
      <CardActionArea onClick={ () => history.push(`/album/${collectionId}`) }>
        <CardMedia
          component="img"
          height="110"
          src={ artworkUrl100 }
          alt={ collectionName }
        />
        <CardContent>
          <Typography
            variant="h2"
            component="h2"
            color="secondary"
            sx={ {
              fontSize: { xs: 10, sm: 10, md: 15, lg: 15 },
              fontFamily: 'Bellaboo',
              textAlign: { xs: 'center' },
            } }
          >
            {artistName}
          </Typography>
          {/* <Typography gutterBottom variant="h5" component="div">
            {artistName}
          </Typography> */}
          <Typography
            variant="h2"
            component="h2"
            sx={ {
              color: '#ffe15b',
              fontSize: { xs: 8, sm: 8, md: 10, lg: 12 },
              fontFamily: 'Bellaboo',
              textAlign: { xs: 'center' },
            } }
          >
            {collectionName}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            {collectionName}
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
