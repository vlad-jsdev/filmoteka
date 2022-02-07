import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getPopularAsync} from '../store/popular/popularActions';
import FilmsPoster from '../components/FilmPoster';
import FilmsList from '../components/FilmsList';

const Home = () => {
  const data = useSelector(state => state.popularReducer);
  const movies = data.data;
  const {posterImages} = data;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularAsync());
    console.log(movies);
  }, []);

  return (
    <View style={{flex: 1}}>
      <FilmsPoster images={posterImages} />
      <FilmsList movies={movies} />
    </View>
  );
};

export default Home;
