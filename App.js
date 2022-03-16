import React from 'react';
import {StyleSheet} from 'react-native';

import Home from './pages/Home';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MovieDetails from './pages/MovieDetails';
import NavBarApp from './components/NavBarApp';
import Search from "./pages/Search";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={({navigation}) => ({
            headerTransparent: true,
            title: '',
            headerLeft: () => <NavBarApp navigation={navigation} main={true} />,
          })}
        />
        <Stack.Screen
          name="Details"
          component={MovieDetails}
          options={({navigation}) => ({
            headerTransparent: true,
            title: '',
            headerLeft: () => (
              <NavBarApp navigation={navigation} main={false} />
            ),
          })}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={({navigation}) => ({
            headerTransparent: true,
            title: '',
            headerLeft: () => (
              <NavBarApp navigation={navigation} main={false} />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.lighter,
  },
});

export default App;
