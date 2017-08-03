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
import MapScreen from './MapPage'
import CacheScreen from './CachepPage'
import TextinputScreen from './TextinputPage'
import FlatListScreen from './FlatListPage'
import FetchScreen from './FetchPage'
import Icon from 'react-native-vector-icons/FontAwesome';

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle:'welcome'
  };
  render() {
    const { navigate } = this.props.navigation;
    return<View>
        <Icon name="optin-monster" size={30} color="#6cf" />
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
        <Button
          onPress={() => navigate('Map')}
          title="Map"
        />
        <Button
          onPress={() => navigate('Cache')}
          title="Cache"
        />
        <Button
          onPress={() => navigate('Textinput')}
          title="Textinput"
        />
        <Button
          onPress={() => navigate('FlatList')}
          title="FlatList"
        />
        <Button
          onPress={() => navigate('Fetch')}
          title="Fetch Test"
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
  Map: { screen: MapScreen },
  Cache: { screen: CacheScreen },
  Textinput: { screen: TextinputScreen },
  FlatList: { screen: FlatListScreen },
  Fetch: { screen: FetchScreen },
  
});

AppRegistry.registerComponent('testNavigator', () => SimpleApp);