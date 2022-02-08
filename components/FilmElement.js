import React from 'react';
import {Image, TouchableOpacity, StyleSheet} from 'react-native';
import { linkImg } from "../store/popularMovies/popularMoviesConstants";

class FilmElement extends React.PureComponent {
  render() {
    const {item} = this.props;
    console.log(item);
    return (
      <TouchableOpacity style={style.container}>
        <Image style={style.image} source={{uri: linkImg + item.poster_path}} />
      </TouchableOpacity>
    );
  }
}

const style = StyleSheet.create({
  container: {
    padding: 5,
    position: 'relative',
  },
  image: {
    height: 200,
    width: 120,
  },
});

export default FilmElement;
