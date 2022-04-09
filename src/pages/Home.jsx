import { Box, Container, IconButton, Paper, Typography } from '@mui/material';
import React from 'react';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { useHistory } from 'react-router-dom';
import foneYellow from '../assets/imgs/background1.jpg';

const styles = {
  paperContainer: {
    // eslint-disable-next-line max-len
    backgroundImage: `url(${foneYellow})`,
    width: '110vw',
    height: '110vh',
    backgroundSize: 'cover',
  },
};

export default function Home() {
  const history = useHistory();
  return (
    <Container
      maxWidth="xg"
      disableGutters
      sx={ { maxHeight: '100vh', overflow: 'hidden' } }
    >
      <Paper style={ styles.paperContainer }>
        <Box
          sx={ {
            ml: { xs: -4, md: 10 },
            textAlign: { xs: 'center', md: 'left' } } }
        >
          <Typography
            variant="h2"
            component="h2"
            color="secondary"
            sx={ {
              fontSize: { xs: 100, sm: 150, md: 200, lg: 250 },
              fontFamily: 'WildFont',
            } }
          >
            TRYBETUNES
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            sx={ {
              fontSize: { xs: 15, sm: 20, md: 25, lg: 30 },
              fontFamily: 'Sinkin',
              color: '#7692ff',
            } }
          >
            shinvk.github.io/trybetunes
          </Typography>
          <IconButton
            sx={ { ml: { lg: 10 }, mt: 20 } }
            onClick={ () => history.push('/trybetunes/search') }
          >
            <PlayCircleOutlineIcon
              sx={ { fontSize: { xs: 60, sm: 90, md: 120, lg: 180 } } }
            />
            <Typography
              variant="h2"
              component="h2"
              sx={ {
                fontSize: { xs: 15, sm: 20, md: 25, lg: 30 },
                fontFamily: 'Sinkin',
                color: '#75631e',
              } }
            >
              Entrar
            </Typography>
          </IconButton>
        </Box>
      </Paper>
    </Container>
  );
}
