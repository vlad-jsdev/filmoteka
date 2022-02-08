import React from 'react';
import {Image, TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import {linkImg} from '../store/popularMovies/popularMoviesConstants';

class FilmElement extends React.PureComponent {
  render() {
    const {item} = this.props;
    console.log(item);
    return (
      <TouchableOpacity style={style.container}>
        <Image style={style.image} source={{uri: linkImg + item.poster_path}} />
        <Text style={style.title}>{item.name || item.original_title}</Text>
      </TouchableOpacity>
    );
  }
}

const style = StyleSheet.create({
  container: {
    padding: 5,
    position: 'relative',
    alignItems: 'center',
  },
  image: {
    height: 200,
    width: 120,
    borderRadius: 20,
  },
  title: {
    fontWeight: 'bold',
    width: 100,
    textAlign: 'center',
    color: 'black',
  },
});

export default FilmElement;
