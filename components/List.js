import React from 'react';
import {FlatList} from 'react-native';
import FilmElement from './FilmElement';

const List = ({data, type, videoType}) => (
  <FlatList
    data={data}
    renderItem={({item}) => (
      <FilmElement item={item} type={type} videoType={videoType} />
    )}
    horizontal
    keyExtractor={item => item.id}
  />
);

export default List;
