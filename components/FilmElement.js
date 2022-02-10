import React, {PureComponent} from 'react';
import {Image, TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import {URL_IMAGE} from '../constants/constants';
import {useNavigation} from '@react-navigation/native';

class FilmElement extends PureComponent {
  render() {
    const {navigation} = this.props;
    const {item} = this.props;
    return (
      <View>
        <TouchableOpacity
          style={style.container}
          onPress={() => navigation.navigate('Details', {item})}>
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

// export default FilmElement;
