import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView,
  Platform
} from 'react-native';
import RNFetchBlob from 'react-native-fetch-blob';


const url ='https://uniqueway.b0.upaiyun.com/uploads/2017/01/e3aae293-ca44-47ce-b5f3-c5ad97e9e361.jpg'
export default class PreloadScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      picUrl:''
    }
  }
  static navigationOptions = {
    title: 'preload',
  };
  componentDidMount () {
    // Image.prefetch(url).then((res) =>{
    //   console.log('prefetched~')
    //   console.log(res)
    // })
    this.LoadData()
  }
  LoadData() {
    RNFetchBlob
      .config({ 
        fileCache : true,
        appendExt : 'jpg'
              })
      .fetch('GET', 'https://uniqueway.b0.upaiyun.com/uploads/2017/01/e3aae293-ca44-47ce-b5f3-c5ad97e9e361.jpg', {
      })
      // when response status code is 200
      .then((res) => {
        console.log('The file saved to ', res.path())
        this.setState({
          picUrl: Platform.OS === 'android' ? 'file://' + res.path()  : '' + res.path()
        })
      })
      .catch((errorMessage, statusCode) => {
        console.log(errorMessage)
      })
  }
  render() {
     const { navigate } = this.props.navigation;
    return (
      <View>
         {this.state.picUrl?<Image
          style={{width:100,height:100}}
          source={{uri:this.state.picUrl}}
        />:null} 
      </View>
    );
  }
}
const styles = StyleSheet.create({
});