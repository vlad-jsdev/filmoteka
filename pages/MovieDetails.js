import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';

import {autorun} from 'mobx';
import film from '../mobx/film';

const MovieDetails = () => {
  const {params} = useRoute();
  const {id} = params;

  useEffect(() => {
    autorun(() => film.fetchFilm(id));
  }, [id]);
  console.log('Film', film);
  return (
    <View>
      <Text>AAAAAA</Text>
      <Text>{id}</Text>
    </View>
  );
};
export default MovieDetails;
