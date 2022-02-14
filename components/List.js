import React from 'react';
import {FlatList} from 'react-native';
import FilmElement from './FilmElement';

const List = ({data, type}) => (
  <FlatList
    data={data}
    renderItem={({item}) => <FilmElement item={item} type={type} />}
    horizontal
    keyExtractor={item => item.id}
  />
);

export default List;
