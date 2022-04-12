import React, {useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import {observer} from 'mobx-react-lite';
import Icon from 'react-native-vector-icons/Ionicons';
import search from '../mobx/search';
import FilmElement from '../components/FilmElement';
import {autorun} from 'mobx';

const Search = observer(({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [text, onChangeText] = useState();
  const [searchResult, setSearchResult] = useState([]);

  const onSubmit = e =>
    autorun(() =>
      Promise.all([
        search
          .searchMovies(e, 'tv')
          .then(() => setSearchResult(prev => [...prev, ...search.data])),
        search
          .searchMovies(e, 'movie')
          .then(() => setSearchResult(prev => [...prev, ...search.data])),
      ]).then(() => setLoading(false)),
    );
  console.log('HERE', searchResult);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Search"
          />
        </View>
        <TouchableOpacity onPress={() => onSubmit(text)}>
          <Icon name={'search-outline'} size={30} color={'white'} />
        </TouchableOpacity>
      </View>

      <View style={styles.searchItems}>
        {searchResult && searchResult.length > 0 ? (
          <FlatList
            keyExtractor={item => item.id}
            numColumns={3}
            data={searchResult.slice()}
            renderItem={({item}) => {
              return (
                <FilmElement
                  navigation={navigation}
                  item={item}
                  videoType={item.type}
                />
              );
            }}
          />
        ) : (
          <View>
            <Text>Type to find Films or TVs</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  form: {
    flexBasis: 'auto',
    flexGrow: 1,
  },
  input: {
    borderRadius: 15,
    height: 50,
    margin: 12,
    borderWidth: 0.5,
    padding: 10,
  },
  searchItems: {
    marginBottom: 200,
  },
});

export default Search;
