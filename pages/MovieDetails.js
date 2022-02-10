import React from 'react';
import {Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';

const MovieDetails = () => {
  const {params} = useRoute();
  const {item} = params;
  console.log(item);
  return (
    <View>
      <Text>AAAAAA</Text>
      <Text>{item.id}</Text>
    </View>
  );
};
export default MovieDetails;
