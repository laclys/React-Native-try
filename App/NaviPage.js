import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class NaviScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title: 'Test 123',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>123</Text>
        <Button
          onPress={() => navigate('Chat',{info:'navi222222'})}
          title="Test Navigator"
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({

});