import React, {PureComponent} from 'react';
import {Image, TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import {URL_IMAGE} from '../constants/constants';
import {useNavigation} from '@react-navigation/native';
import {generateColor} from '../services/genrateColor';

class FilmElement extends PureComponent {
  render() {
    const {navigation, item, type} = this.props;

    return (
      <View>
        <TouchableOpacity
          style={style.container}
          onPress={() => navigation.navigate('Details', {id: item.id})}>
          {type === 'GENRES' ? (
            <View style={[style.genres, {backgroundColor: generateColor()}]}>
              <Text style={style.title}>
                {item.name || item.original_title}
              </Text>
            </View>
          ) : (
            <>
              <Image
                style={style.image}
                source={{uri: URL_IMAGE + item.poster_path}}
              />
              <Text style={style.title}>
                {item.name || item.original_title}
              </Text>
            </>
          )}
        </TouchableOpacity>
      </View>
    );
  }
}

export default function (props) {
  const navigation = useNavigation();
  return <FilmElement {...props} navigation={navigation} />;
}

const style = StyleSheet.create({
  container: {
    padding: 5,
    position: 'relative',
    alignItems: 'center',
  },
  genres: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    minWidth: 120,
    borderRadius: 20,
    opacity: 0.7,
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
