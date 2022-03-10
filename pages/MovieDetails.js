import React, {useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import {useRoute} from '@react-navigation/native';

import {autorun} from 'mobx';
import film from '../mobx/film';
import {observer} from 'mobx-react-lite';
import {URL_IMAGE} from '../constants/constants';
import StarRating from 'react-native-star-rating';

const height = Dimensions.get('screen').height;

const MovieDetails = observer(() => {
  const {params} = useRoute();
  const {id} = params;

  useEffect(() => {
    autorun(() => film.fetchFilm(id));
  }, [id]);
  console.log('Film', film);
  return (
    <ScrollView>
      <Image
        resizeMode="cover"
        style={styles.image}
        source={{uri: URL_IMAGE + film.data.poster_path}}
      />
      <View style={styles.container}>
        <Text style={styles.movieTitle}>{film.data.title}</Text>
        {film.data.genres && (
          <View style={styles.genresContainer}>
            {film.data.genres.map(genre => (
              <Text style={styles.genres} key={genre.id}>
                {genre.name}
              </Text>
            ))}
          </View>
        )}
        <StarRating maxStars={5} rating={film.data.vote_average / 2} />
        <Text>{film.data.vote_average}</Text>
      </View>
    </ScrollView>
  );
});
export default MovieDetails;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    position: 'relative',
    alignItems: 'center',
  },
  image: {
    height: height / 2.5,
  },
  movieTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  genresContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  genres: {
    marginRight: 10,
    fontWeight: 'bold',
  },
});
