import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {getGenresAsync} from '../store/film/filmActions';

const MovieDetails = () => {
  const film = useSelector(store => store.filmReducer);
  const dispatch = useDispatch();
  const {params} = useRoute();
  const {id} = params;

  useEffect(() => {
    dispatch(getGenresAsync(id));
  }, []);
  console.log('Film', film)
  return (
    <View>
      <Text>AAAAAA</Text>
      <Text>{id}</Text>
    </View>
  );
};
export default MovieDetails;
