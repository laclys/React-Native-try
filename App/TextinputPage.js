import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import { Sae } from 'react-native-textinput-effects';
import { Fumi } from 'react-native-textinput-effects';
import { Kohana } from 'react-native-textinput-effects';
import { Hoshi } from 'react-native-textinput-effects';

export default class TextinputPageScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title: 'input',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>input</Text>
        <Sae
          label={'Email Address'}
          iconClass={FontAwesomeIcon}
          iconName={'pencil'}
          iconColor={'white'}
          autoCapitalize={'none'}
          autoCorrect={false}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({

});