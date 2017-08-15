import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView
} from 'react-native';
import Carousel from 'react-native-snap-carousel'


export default class CarouselScreen extends React.Component {
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
        <Text>123</Text>
            <Carousel
              ref={(carousel) => { this._carousel = carousel; }}
              sliderWidth={375}
              itemWidth={300}
            >
                <View style={{height:300,width:300,backgroundColor:'blue'}} />
                <View style={{height:300,width:300,backgroundColor:'blue'}} />
                <View style={{height:300,width:300,backgroundColor:'blue'}} />
            </Carousel>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  spinner: {
    marginBottom: 50
  },
});