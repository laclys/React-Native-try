import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView
} from 'react-native';

import  Spinner from 'react-native-spinkit'

export default class SpinkitScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title: '= =~',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={{
        flex:1
      }}>
        <Text>Cached Image</Text>
         <Spinner style={styles.spinner} isVisible={true} size={37} type={'Bounce'} color={'#6cf'}/>
         <Spinner style={styles.spinner} isVisible={true} size={37} type={'Wave'} color={'#6cf'}/>
         <Spinner style={styles.spinner} isVisible={true} size={37} type={'WanderingCubes'} color={'#6cf'}/>
         <Spinner style={styles.spinner} isVisible={true} size={37} type={'Pulse'} color={'#6cf'}/>
         <Spinner style={styles.spinner} isVisible={true} size={37} type={'ChasingDots'} color={'#6cf'}/>
         <Spinner style={styles.spinner} isVisible={true} size={37} type={'ThreeBounce'} color={'#6cf'}/>
         <Spinner style={styles.spinner} isVisible={true} size={37} type={'Circle'} color={'#6cf'}/>
         <Spinner style={styles.spinner} isVisible={true} size={37} type={'9CubeGrid'} color={'#6cf'}/>
         <Spinner style={styles.spinner} isVisible={true} size={37} type={'WordPress'} color={'#6cf'}/>
         <Spinner style={styles.spinner} isVisible={true} size={37} type={'FadingCircle'} color={'#6cf'}/>
         <Spinner style={styles.spinner} isVisible={true} size={37} type={'FadingCircleAlt'} color={'#6cf'}/>
         <Spinner style={styles.spinner} isVisible={true} size={37} type={'Arc'} color={'#6cf'}/>
         <Spinner style={styles.spinner} isVisible={true} size={37} type={'ArcAlt'} color={'#6cf'}/>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  spinner: {
    marginBottom: 50
  },
});