import React, {useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {getPopularAsync} from '../store/popularMovies/popularMoviesActions';
import FilmsPoster from '../components/FilmPoster';
import List from '../components/List';
import {getPopularTVsAsync} from '../store/popularTVs/popularTVsActions';
import {getGenresAsync} from '../store/genres/genresActions';

const Home = () => {
  const dataMovies = useSelector(state => state.popularMoviesReducer);
  const dataTVs = useSelector(state => state.popularTVsReducer);
  const dataGenres = useSelector(state => state.genresReducer);
  const [loading, setLoading] = useState(false);
  const movies = dataMovies.data;
  const tvs = dataTVs.data;
  const genres = dataGenres.genres;
  const {posterImages, posterImagesId} = dataMovies;
  const dispatch = useDispatch();

  console.log('poster IMG: ', genres);
  useEffect(() => {
    Promise.all([
      dispatch(getPopularAsync()),
      dispatch(getPopularTVsAsync()),
      dispatch(getGenresAsync()),
    ]).finally(() => setLoading(true));
  }, []);

  return (
    <>
      {loading ? (
        <ScrollView>
          <FilmsPoster images={posterImages} id={posterImagesId} />
          <Text style={style.text}>Popular Films</Text>
          <List data={movies} />
          <Text style={style.text}>Popular TVs</Text>
          <List data={tvs} />
          <Text style={style.text}>Ganres</Text>
          <List data={genres} type={'GENRES'} />
        </ScrollView>
      ) : (
        <View style={style.parentIndicator}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      )}
    </>
  );
};

const style = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  parentIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
