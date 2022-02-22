import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {getGenresAsync} from '../store/film/filmActions';
import {autorun} from 'mobx';
import film from '../mobx/film';

const MovieDetails = () => {
  // const film = useSelector(store => store.filmReducer);
  // const dispatch = useDispatch();
  const {params} = useRoute();
  const {id} = params;

  useEffect(() => {
    autorun(() => film.fetchFilm(id));
  }, []);
  console.log('Film', film);
  return (
    <View>
      <Text>AAAAAA</Text>
      <Text>{id}</Text>
    </View>
  );
};
export default MovieDetails;
