import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  AppRegistry,
  View,
  Button,
  Image,
  ProgressViewIOS
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class YoyoScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      progressData:0
    }
  }
  static navigationOptions = {
    title: 'Test 123',
  };
  componentDidMount() {
  var time = 0;
  this.timer = setInterval(() => {
    time += 0.01
    this.setState({
      progressData:time
    })
    if(this.state.progressData > 1){
      this.timer && clearInterval(this.timer);
    }
    console.log(this.state.progressData)
  }, 50)
}
componentWillUnmount() {
  this.timer && clearTimeout(this.timer);
}
  render() {
    return (
      <View>
        <Text>{this.state.progressData}</Text>
        <ProgressViewIOS style={styles.progressView} progressTintColor="yellow" progress={this.state.progressData}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
  progressView: {
    marginTop: 20,
    marginLeft:10,
    marginRight:10,
  }
});