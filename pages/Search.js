import React, {useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  View,
  SafeAreaView,
  TextInput,
} from 'react-native';

import FilmsPoster from '../components/FilmPoster';
import List from '../components/List';
import {observer} from 'mobx-react-lite';
import popularMovies from '../mobx/popularMovies';
import {autorun} from 'mobx';
import popularTVs from '../mobx/popularTVs';
import genres from '../mobx/genres';

const Search = observer(() => {
  const [loading, setLoading] = useState(false);
  const [number, onChangeText] = useState();

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
  console.log('popular', popularMovies.posterImagesId);
  return (
    <>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={number}
          placeholder="Search"
        />
      </SafeAreaView>
    </>
  );
});

const styles = StyleSheet.create({
  input: {
    borderRadius: 15,
    height: 50,
    margin: 12,
    borderWidth: 0.5,
    padding: 10,
  },
});

export default Search;
