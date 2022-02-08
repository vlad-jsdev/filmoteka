import React from 'react';
import {FlatList} from 'react-native';
import FilmElement from './FilmElement';

const FilmsList = ({movies}) => (
  <FlatList
    data={movies}
    renderItem={({item}) => <FilmElement item={item} />}
    horizontal
    keyExtractor={item => item.id}
  />
);

export default FilmsList;
