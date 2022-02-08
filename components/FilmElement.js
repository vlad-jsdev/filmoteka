import React, {PureComponent} from 'react';
import {Image, TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import {URL_IMAGE} from '../constants/constants';

class FilmElement extends PureComponent {
  render() {
    const {item} = this.props;
    console.log(item);
    return (
      <View>
        <TouchableOpacity style={style.container}>
          <Image
            style={style.image}
            source={{uri: URL_IMAGE + item.poster_path}}
          />
          <Text style={style.title}>{item.name || item.original_title}</Text>
        </TouchableOpacity>
      </View>
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
