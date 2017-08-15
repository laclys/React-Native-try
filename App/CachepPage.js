import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
} from 'react-native';

import {CachedImage} from "react-native-img-cache"
import  Spinner from 'react-native-spinkit'

export default class CacheScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      spinkitIsVisible: true
    }
  }
  static navigationOptions = {
    title: 'Test 123',
  };
  changeState() {
    let flag = this.state.spinkitIsVisible
    this.setState({
      spinkitIsVisible:!flag
    })
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{
        flex:1
      }}>
        <Text>Cached Image</Text>
        <View
          style={{
            position:'relative',
            width:320,
            height:240,
          }}
        >
        {this.state.spinkitIsVisible?(<View
            style={{
              display:'',
              flex:1,
              justifyContent:'center',
              alignItems:'center',
              position:'absolute',
              top:0,
              width: 320, 
              height: 240, 
              backgroundColor:'rgba(0,0,0,0.3)',
              zIndex:1
            }}
          >
          <Spinner 
            isVisible={this.state.spinkitIsVisible} size={37} type={'ChasingDots'} color={'#6cf'}/> 
          </View>):null}
          <CachedImage 
            style={{
              position:'absolute',
              top:0,
              width: 320, 
              height: 240, 
            }}
            source={{ uri: "https://i.ytimg.com/vi/yaqe1qesQ8c/maxresdefault.jpg" }} />
        </View>
          <Button
            title="touch"
            onPress={()=>this.changeState()}
          ></Button>
      </View>
    );
  }
}
const styles = StyleSheet.create({

});