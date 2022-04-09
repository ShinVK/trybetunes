/* eslint-disable max-len */
/* eslint-disable react/jsx-max-depth */
import {
  Container,
  Grid, Paper,
  Typography, InputBase, Divider,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// import { useHistory } from 'react-router-dom';

import Loading from '../components/Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
// import Albums from './Albums';

import backgroundCard from '../assets/imgs/backgroundCard.avif';
import background1 from '../assets/imgs/back3.avif';
import AlbumCard from '../components/AlbumCard';

const styles = {
  paperContainer: {
    // eslint-disable-next-line max-len
    backgroundImage: `url(${background1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
};

const backCards = {
  paperContainer: {
    // eslint-disable-next-line max-len
    backgroundImage: `url(${backgroundCard})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
};

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      nameSearched: '',
      searchInput: '',
      load: false,
      data: [],
      request: false,
    };
    this.onHandleChanger = this.onHandleChanger.bind(this);
    this.onHandleSearchClick = this.onHandleSearchClick.bind(this);
  }

  onHandleChanger(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  async onHandleSearchClick(e) {
    const { searchInput } = this.state;
    e.preventDefault();
    this.setState({ load: true, nameSearched: searchInput });
    await searchAlbumsAPI(searchInput)
      .then((album) => this.setState({ data: album }));
    this.setState({ load: false, request: true, searchInput: '' });
  }

  render() {
    const { searchInput, load, nameSearched, request, data } = this.state;

    return (
      <Container maxWidth="lg">

        <Paper
          style={ styles.paperContainer }
          sx={ { width: '100%',
            height: '50vh' } }
        >
          <Grid container>
            <Grid item xs={ 12 } md={ 6 }>
              <Paper
                component="form"
                elevation={ 20 }
                sx={ {
                  p: '2px 4px',
                  display: 'flex',
                  alignItems: 'center',
                  width: { xs: '92%', lg: '55%' },
                  mt: 5,
                  ml: { xs: 'auto', lg: 3 },
                  mr: 'auto',
                  backgroundColor: '#ffe15be4' } }
              >
                <InputBase
                  sx={ { ml: 1, flex: 1, color: '#011936d5', fontFamily: 'Bellaboo' } }
                  placeholder="Buscar Banda ou Cantor"
                  name="searchInput"
                  value={ searchInput }
                  onChange={ this.onHandleChanger }
                  // inputProps={ { 'aria-label': 'search google maps' } }
                />
                <IconButton
                  type="submit"
                  sx={ { p: '10px' } }
                  aria-label="search"
                  onClick={ this.onHandleSearchClick }
                >
                  <MusicNoteIcon />
                </IconButton>
                <Divider sx={ { height: 28, m: 0.5 } } orientation="vertical" />
              </Paper>
            </Grid>

            <Grid item xs={ 12 } md={ 6 }>
              <Typography
                variant="h2"
                component="h2"
                color="secondary"
                sx={ {
                  fontSize: { xs: 100, sm: 80, md: 120, lg: 150 },
                  fontFamily: 'WildFont',
                  mt: -2,
                  mr: { md: 2 },
                  ml: { md: 2 },
                  textAlign: { xs: 'center', md: 'right' },
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
                  textAlign: { xs: 'center', md: 'right' },
                } }
              >
                shinvk.github.io/trybetunes
              </Typography>
            </Grid>
          </Grid>
        </Paper>
        <Paper sx={ { backgroundColor: '#021022' } } elevation={ 15 }>
          <Typography
            variant="h2"
            component="h2"
            sx={ {
              color: '#ffe15b',
              fontSize: { xs: 30, sm: 40, md: 50, lg: 60 },
              fontFamily: 'Bellaboo',
              mt: -2,
              pt: 5,
              pb: 5,
              mr: { md: 2 },
              ml: { md: 2 },
              textAlign: { xs: 'center', md: 'left' },
            } }
          >
            Resultados
          </Typography>
        </Paper>

        {(load) ? <Loading />
          : (
            <Typography
              variant="h2"
              component="h2"
              sx={ {
                color: '#021022',
                fontSize: { xs: 25, sm: 25, md: 30, lg: 40 },
                fontFamily: 'Bellaboo',
                mt: -2,
                pt: 5,
                pb: 5,
                mr: { md: 2 },
                ml: { md: 2 },
                textAlign: { xs: 'center', md: 'left' },
              } }
            >
              {`Álbuns encontrados: ${nameSearched}`}
            </Typography>
          )}
        <Paper
          style={ backCards.paperContainer }
          sx={ { width: '100%',
            minHeight: '50vh' } }
          elevation={ 24 }
        >
          <Grid container>
            {(request) && data.map((el, i) => (
              <Grid key={ i } xs={ 6 } md={ 4 } lg={ 2.4 } sx={ { mt: 5 } }>
                <div style={ { display: 'flex', justifyContent: 'center' } }>
                  <AlbumCard album={ el } />
                </div>
              </Grid>
            )) }
          </Grid>
        </Paper>
      </Container>
    );
  }
}
