import React, {useEffect} from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {getPopularAsync} from '../store/popularMovies/popularMoviesActions';
import FilmsPoster from '../components/FilmPoster';
import FilmsList from '../components/FilmsList';
import {getPopularTVsAsync} from '../store/popularTVs/popularTVsActions';

const Home = () => {
  const dataMovies = useSelector(state => state.popularMoviesReducer);
  const dataTVs = useSelector(state => state.popularTVsReducer);
  const movies = dataMovies.data;
  const tvs = dataTVs.data;
  const {posterImages} = dataMovies;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularAsync());
    dispatch(getPopularTVsAsync());
  }, []);

  return (
    <ScrollView>
      <FilmsPoster images={posterImages} />
      <Text style={style.text}>Popular Films</Text>
      <FilmsList movies={movies} />
      <Text style={style.text}>Popular TVs</Text>
      <FilmsList movies={tvs} />
    </ScrollView>
  );
};

const style = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default Home;
