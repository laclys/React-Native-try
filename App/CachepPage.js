import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
} from 'react-native';

import {CachedImage} from "react-native-img-cache"

export default class CacheScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title: 'Test 123',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{
        flex:1
      }}>
        <Text>Cached Image</Text>
        <CachedImage 
        style={{
          width: 320, 
          height: 240, 
        }}
        source={{ uri: "https://i.ytimg.com/vi/yaqe1qesQ8c/maxresdefault.jpg" }} />
      </View>
    );
  }
}
const styles = StyleSheet.create({

});