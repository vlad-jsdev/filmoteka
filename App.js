import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import Home from './pages/Home';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Home />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.lighter,
  },
});

export default App;
