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
import SpinkitScreen from './SpinkitPage'
import CarouselScreen from './CarouselPage'
import LightboxScreen from './LightboxPage'
import Icon from 'react-native-vector-icons/FontAwesome';

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle:'welcome'
  };
  fetch123(){
    let formData = new FormData()
    formData.append('phone',13581687626)
    formData.append('passport_code',1324)
  return  fetch('https://api.uniqueway.in/api/app3/v1/users/sign_in.json', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data'
      },
      body: formData
    })
      .then((response) => response.json())
      .then((responseJson) => {
          console.log(responseJson)
      })
      .catch((error) => {
        console.error(error);
      });
  }
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
        <Button
          onPress={() => navigate('Spinkit')}
          title="Spinkit Test"
        />
        <Button
          onPress={() => this.fetch123()}
          title="fetch"
        />
        <Button
          onPress={() => navigate('Carousel')}
          title="Carousel"
        />
        <Button
          onPress={() => navigate('Lightbox')}
          title="Lightbox"
        />
      </View>
  }
}
class ChatScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const {state, setParams} = navigation;
    const isInfo = state.params.mode === 'info';
    const {user} = state.params;
    return {
      title: isInfo ? `Contact Info` : `Chat`,
      
      headerRight: (
        <Button
          title={isInfo ? 'Done' : `info`}
          onPress={() => setParams({ mode: isInfo ? 'none' : 'info'})}
        />
      ),
    };
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
  Spinkit: { screen: SpinkitScreen },
  Carousel: { screen: CarouselScreen },
  Lightbox: { screen: LightboxScreen },
  
});

AppRegistry.registerComponent('testNavigator', () => SimpleApp);