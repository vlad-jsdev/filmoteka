import React, {PureComponent} from 'react';
import {Pressable, SafeAreaView, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class NavBarApp extends PureComponent {
  render() {
    const {navigation, main} = this.props;
    return (
      <SafeAreaView>
        {main ? (
          <View />
        ) : (
          <View>
            <Pressable onPress={() => navigation.goBack()}>
              <Icon name={'chevron-back-outline'} size={40} color={'white'} />
            </Pressable>
          </View>
        )}
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  main: {
    marginTop: 40,
  },
});
export default NavBarApp;
