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
import FilmsList from '../components/FilmsList';
import {getPopularTVsAsync} from '../store/popularTVs/popularTVsActions';

const Home = () => {
  const dataMovies = useSelector(state => state.popularMoviesReducer);
  const dataTVs = useSelector(state => state.popularTVsReducer);
  const [loading, setLoading] = useState({
    tv: false,
    movies: false,
  });
  const movies = dataMovies.data;
  const tvs = dataTVs.data;
  const {posterImages} = dataMovies;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularAsync()).finally(() =>
      setLoading(prev => ({...prev, movies: true})),
    );
    dispatch(getPopularTVsAsync()).finally(() =>
      setLoading(prev => ({...prev, tv: true})),
    );
  }, []);

  return (
    <>
      {loading.movies && loading.tv && (
        <ScrollView>
          <FilmsPoster images={posterImages} />
          <Text style={style.text}>Popular Films</Text>
          <FilmsList movies={movies} />
          <Text style={style.text}>Popular TVs</Text>
          <FilmsList movies={tvs} />
        </ScrollView>
      )}
      {!loading.movies && !loading.tv && (
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
