import React from 'react';
import {FlatList} from 'react-native';
import FilmElement from './FilmElement';

const List = ({data}) => (
  <FlatList
    data={data}
    renderItem={({item}) => <FilmElement item={item} />}
    horizontal
    keyExtractor={item => item.id}
  />
);

export default List;
