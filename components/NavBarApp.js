import React, {PureComponent} from 'react';
import {Pressable, SafeAreaView, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../theme/colors';

class NavBarApp extends PureComponent {
  render() {
    const {navigation, main} = this.props;
    return (
      <SafeAreaView style={styles.navBar}>
        {main ? (
          <View style={styles.main}>
            <Pressable onPress={() => navigation.navigate('Search')}>
              <Icon
                name={'search-outline'}
                size={30}
                color={Colors.lightGray}
              />
            </Pressable>
          </View>
        ) : (
          <View style={styles.main}>
            <Pressable onPress={() => navigation.goBack()}>
              <Icon
                name={'chevron-back-outline'}
                size={40}
                color={Colors.lightGray}
              />
            </Pressable>
            <Pressable>
              <Icon
                name={'search-outline'}
                size={30}
                color={Colors.lightGray}
              />
            </Pressable>
          </View>
        )}
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  navBar: {
    flex: 1,
  },
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 40,
    alignItems: 'center',
  },
  search: {},
});
export default NavBarApp;
