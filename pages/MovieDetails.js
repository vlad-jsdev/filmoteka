import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  ActivityIndicator,
  Modal,
} from 'react-native';
import {useRoute} from '@react-navigation/native';

import {autorun} from 'mobx';
import film from '../mobx/film';
import {observer} from 'mobx-react-lite';
import {URL_IMAGE} from '../constants/constants';
import StarRating from 'react-native-star-rating';
import dateFormat from 'dateformat';
import PlayButton from '../components/PlayButton';

const height = Dimensions.get('screen').height;

const MovieDetails = observer(() => {
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const {params} = useRoute();
  const {id} = params;

  useEffect(() => {
    autorun(() => film.fetchFilm(id).then(() => setLoading(true)));
  }, [id]);
  console.log('Film', film);

  const videoShown = () => {
    setModalVisible(true);
  };
  return (
    <>
      {loading ? (
        <View>
          <ScrollView>
            <Image
              resizeMode="cover"
              style={styles.image}
              source={{uri: URL_IMAGE + film.data.poster_path}}
            />
            <View style={styles.container}>
              <View style={styles.playButton}>
                <PlayButton handlePress={videoShown} />
              </View>
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
              <StarRating
                disabled={true}
                maxStars={5}
                starSize={30}
                rating={film.data.vote_average / 2}
                fullStarColor={'gold'}
              />
              <Text style={styles.overview}>{film.data.overview}</Text>
              <Text style={styles.release}>
                {'Release date: ' +
                  dateFormat(film.data.release_date, 'mmmm dS, yyyy')}
              </Text>
            </View>
          </ScrollView>
          <Modal visible={modalVisible}>
            <Text>HELLO</Text>
          </Modal>
        </View>
      ) : (
        <View style={styles.parentIndicator}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      )}
    </>
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
    marginBottom: 20,
  },
  genres: {
    marginRight: 10,
    fontWeight: 'bold',
  },
  parentIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overview: {
    padding: 15,
  },
  release: {
    fontWeight: 'bold',
  },
  playButton: {
    position: 'absolute',
    top: -25,
    right: 20,
  },
});
