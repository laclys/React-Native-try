import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
} from 'react-native';
import Swipeout from 'react-native-swipeout'
import Swiper from 'react-native-swiper';

export default class AmapScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title: 'More',
  };
  render() {
    var swipeoutBtns = [
      {
        text: 'Button1',
        type: 'primary'
      },
      {
        text: 'Button2',
        type: 'secondary'
      }
    ]
    const { navigate } = this.props.navigation;
    return (
      <View style={{
        flex:1
      }}>
        <Swipeout
          right={swipeoutBtns}
          autoClose={true}
        >
          <View>
            <Text style={{
              height:100,
              lineHeight:100,
            }}>Swipe me left</Text>
          </View>
        </Swipeout>
        <View
          style={{
            flex:1,
          }}
        >
        <Swiper style={styles.wrapper} height={200}>
          <View style={styles.slide1}>
            <Text style={styles.text}>123</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>456</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>789</Text>
          </View>
        </Swiper>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
});