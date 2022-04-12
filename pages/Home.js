import React, {useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  View,
} from 'react-native';
import {observer} from 'mobx-react-lite';
import {autorun} from 'mobx';

import FilmsPoster from '../components/FilmPoster';
import List from '../components/List';
import popularMovies from '../mobx/popularMovies';
import popularTVs from '../mobx/popularTVs';
import genres from '../mobx/genres';
import {movies, tvs} from '../constants/constants';

const Home = observer(() => {
  const [loading, setLoading] = useState(false);

  useEffect(
    () =>
      autorun(() => {
        Promise.all([
          popularMovies.fetchPopularMovies(),
          popularTVs.fetchPopularTVs(),
          genres.fetchGenres(),
        ]).then(() => setLoading(true));
      }),
    [],
  );

  return (
    <>
      {loading ? (
        <ScrollView>
          <FilmsPoster
            videoType={movies}
            images={popularMovies.posterImages}
            id={popularMovies.posterImagesId}
          />
          <Text style={style.text}>Popular Films</Text>
          <List data={popularMovies.data} videoType={movies} />
          <Text style={style.text}>Popular TVs</Text>
          <List data={popularTVs.data} videoType={tvs} />
          {/*<Text style={style.text}>Ganres</Text>*/}
          {/*<List data={genres.data} type={'GENRES'} />*/}
        </ScrollView>
      ) : (
        <View style={style.parentIndicator}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      )}
    </>
  );
});

const style = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    padding: 10,
  },
  parentIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
