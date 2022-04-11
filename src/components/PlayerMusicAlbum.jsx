/* eslint-disable max-lines */
/* eslint-disable no-magic-numbers */
/* eslint-disable react/jsx-max-depth */
/* eslint-disable react/prop-types */
import * as React from 'react';
import { useTheme, styled } from '@mui/material/styles';
import { Box, Card, CardContent, CardMedia, IconButton, Typography,
  Table, TableBody, TableContainer, TableHead, TableRow, Paper, Grid, Container,
} from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import { Pause } from '@mui/icons-material';
import background1 from '../assets/imgs/background1.jpg';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
  background: '#f1f1f1',
  '&:hover': {
    background: '#7692ff',
  },
}));

const styles = {
  paperContainer: {
    // eslint-disable-next-line max-len
    backgroundImage: `url(${background1})`,
    // backgroundColor: '#ffe15be4',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '25vh',
  },
};

export default function PlayerMusicAlbum({ musics }) {
  const [isPlaying, setIsplaying] = React.useState(false);
  const [arrMusics, setArrMusics] = React.useState([]);
  const [imgCd, setImg] = React.useState('');
  const [songN, setsongName] = React.useState('');
  const [trackSrc, setTrackSrc] = React.useState('');
  const [Artist, setArtist] = React.useState('');
  const [indexTrack, setIndexTrack] = React.useState(0);
  const [lastTrack, setLastTrack] = React.useState(0);

  React.useEffect(() => {
    setArrMusics(musics);
  }, [musics]);

  React.useEffect(() => {
    if (musics.length > 0) {
      setTrackSrc(musics[indexTrack].previewUrl);
      setImg(musics[indexTrack].artworkUrl100);
      setsongName(musics[indexTrack].trackName);
      setArtist(musics[indexTrack].artistName);
      setLastTrack(musics.length - 1);
    }
    // setImg(musics[0].artworkUrl100);
  }, [musics, indexTrack]);

  const audioEl = document.getElementsByClassName('audio-element')[0];

  const theme = useTheme();
  const playAudio = () => {
    audioEl.play();
    setIsplaying(true);
  };

  const pauseAudio = () => {
    audioEl.pause();
    setIsplaying(false);
  };

  const nextMusic = () => {
    pauseAudio();
    if (indexTrack === lastTrack) setIndexTrack(0);
    else (setIndexTrack((prev) => prev + 1));
    audioEl.load();
  };

  const previousMusic = () => {
    pauseAudio();
    if (indexTrack === 0) setIndexTrack(lastTrack);
    else (setIndexTrack((prev) => prev - 1));
    audioEl.load();
  };

  const selectMusic = (i) => {
    pauseAudio();
    setIndexTrack(i);
    audioEl.load();
  };

  return (
    <Container maxWidth="lg">
      <Paper
        style={ styles.paperContainer }
        sx={ { mb: 5 } }
      >
        <Grid container justifyContent="center">
          <Grid item xs={ 10 }>
            <Typography
              variant="h2"
              component="h2"
              color="secondary"
              sx={ {
                fontSize: { xs: 100, sm: 80, md: 120, lg: 150 },
                fontFamily: 'WildFont',
                mt: { lg: -2, sx: 3 },
                mr: { md: 2 },
                ml: { md: 2 },
                textAlign: { xs: 'left' },
              } }
            >
              TRYBETUNES
            </Typography>
            <Typography
              variant="h2"
              component="h2"
              sx={ {
                fontSize: { xs: 10, sm: 10, md: 15, lg: 20 },
                fontFamily: 'Sinkin',
                mt: { xs: -1, sm: 2, md: -2 },
                mr: { md: 2 },
                ml: { md: 2 },
                color: '#7692ff',
                textAlign: { xs: 'left' },
              } }
            >
              shinvk.github.io/trybetunes
            </Typography>

          </Grid>
        </Grid>
      </Paper>
      <Card
        sx={ { display: 'flex',
          maxWidth: { xs: '100%', md: '60%' },
          mr: 'auto',
          ml: ' auto' } }
      >
        <Box sx={ { display: 'flex', flexDirection: 'column' } }>
          <CardContent
            sx={ {
              flex: '1 0 auto',
              maxWidth: { xs: 250, md: 500 },
              overflow: 'hidden',
              whiteSpace: 'nowrap' } }
          >
            <Typography component="div" variant="h5">
              {songN}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              {Artist}
            </Typography>
          </CardContent>
          <Box sx={ { display: 'flex', alignItems: 'center', pl: 1, pb: 1 } }>
            <IconButton aria-label="previous" onClick={ () => previousMusic() }>
              {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
            </IconButton>
            {isPlaying ? (
              <IconButton aria-label="play/pause" onClick={ pauseAudio }>
                <Pause sx={ { height: 38, width: 38 } } />
              </IconButton>
            )
              : (
                <IconButton aria-label="play/pause" onClick={ playAudio }>
                  <PlayArrowIcon sx={ { height: 38, width: 38 } } />
                </IconButton>
              )}
            <IconButton aria-label="next" onClick={ () => nextMusic() }>
              {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
            </IconButton>
            <IconButton>
              <FavoriteBorderIcon />
            </IconButton>
          </Box>
        </Box>
        <CardMedia
          component="img"
          sx={ { maxWidth: { xs: 150, sm: 150 }, ml: 'auto' } }
          image={ imgCd }
          alt="Live from space album cover"
        />
        {trackSrc === '' ? <h2>Carregando</h2>
          : (
            <audio className="audio-element">
              <source src={ trackSrc } key={ indexTrack } />
              <track kind="captions" />
              O seu navegador não suporta o elemento
              <code>audio</code>
            </audio>
          )}
      </Card>

      {arrMusics.length < 1 ? <h2>Carregando</h2>
        : (

          <TableContainer
            component={ Paper }
            sx={ { maxWidth: 700, mr: 'auto', ml: 'auto', mt: 1 } }
          >
            <Table sx={ { maxWidth: 700 } } aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Play</StyledTableCell>
                  <StyledTableCell>Música</StyledTableCell>
                  <StyledTableCell align="right">Artista</StyledTableCell>
                  <StyledTableCell align="right">Album</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {arrMusics.map((row, i) => (
                  <StyledTableRow
                    key={ i }
                  >
                    <StyledTableCell
                      align="right"
                    >
                      <IconButton onClick={ () => selectMusic(i) }>
                        <MusicNoteIcon />
                      </IconButton>
                    </StyledTableCell>
                    <StyledTableCell
                      component="th"
                      scope="row"
                    >
                      {row.trackName}
                    </StyledTableCell>
                    <StyledTableCell
                      align="right"
                    >
                      {row.artistName}
                    </StyledTableCell>
                    <StyledTableCell
                      align="right"
                    >
                      {row.collectionName}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
    </Container>
  );
}
