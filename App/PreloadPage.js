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

const urls = ['https://images.cdn.uniqueway.com/uploads/2017/07/67a6eb1a-41c5-4681-ab2e-bad36394e6c5.jpg','https://images.cdn.uniqueway.com/uploads/2017/07/710267cb-2a6d-4521-90dc-869b2b677089.jpg',
'https://uniqueway.b0.upaiyun.com/uploads/2017/01/e3aae293-ca44-47ce-b5f3-c5ad97e9e361.jpg',
'https://uniqueway.b0.upaiyun.com/uploads/2016/12/a88ef0f2-6344-42c2-b629-abecfadd5743.jpg']
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
    this.LoadData()
  }
  LoadData() {
    var imagePrefetch = [];
    for (let url of urls) {
      imagePrefetch.push(
        RNFetchBlob
          .config({ 
            fileCache : true,
            appendExt : 'jpg'
                  })
          .fetch('GET', url, {
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
      )
    }
    Promise.all(imagePrefetch).then(results => {
        console.log("All images prefetched in parallel");
    });
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