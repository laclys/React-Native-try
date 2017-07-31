import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  AppRegistry,
  View,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import TriScreen from './TestPage'
import YoyoScreen from './YoyoPage'
import NaviScreen from './NaviPage'

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle:'welcome'
  };
  render() {
    const { navigate } = this.props.navigation;
    return<View>
        <Text>Hello, Chat App!</Text>
        <Button
          onPress={() => navigate('Chat',{info:'传值过去'})}
          title="Test Navigator"
        />
        <Button
          onPress={() => navigate('Test')}
          title="Base64"
        />
        <Button
          onPress={() => navigate('Yoyo')}
          title="ProgressViewIOS"
        />
        <Button
          onPress={() => navigate('Navi')}
          title="Navigator2"
        />
      </View>
  }
}
class ChatScreen extends React.Component {
  static navigationOptions = {
    title: 'Test Navigator',
  };
  render() {
    return (
      <View>
        <Text>Test Navigator</Text>
        <Text>{this.props.navigation.state.params.info}</Text>
      </View>
    );
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
  Test: { screen: TriScreen },
  Yoyo: { screen: YoyoScreen },
  Navi: { screen: NaviScreen },
  
},{
  mode: 'modal',
});

AppRegistry.registerComponent('testNavigator', () => SimpleApp);