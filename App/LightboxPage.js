import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView
} from 'react-native';

import Lightbox from 'react-native-lightbox'

export default class LightboxScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title: '= =~',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Lightbox underlayColor="white" navigator={this.props.navigator}>
          <Image
            style={{height:150}}
            resizeMode="contain"
            source={{ uri: 'https://www.yayomg.com/wp-content/uploads/2014/04/yayomg-pig-wearing-party-hat.jpg' }}
          />
        </Lightbox>
      </View>
    );
  }
}
const styles = StyleSheet.create({
});