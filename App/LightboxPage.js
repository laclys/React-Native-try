import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView
} from 'react-native';

import Lightbox from 'react-native-lightbox'
import  ImagePicker from 'react-native-image-picker';
var photoOptions = {
    //底部弹出框选项
    title:'请选择',
    cancelButtonTitle:'取消',
    takePhotoButtonTitle:'拍照',
    chooseFromLibraryButtonTitle:'选择相册',
    quality:0.75,
    allowsEditing:true,
    noData:false,
    storageOptions: {
        skipBackup: true,
        path:'images'
    }
}
export default class LightboxScreen extends React.Component {
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
        <Lightbox underlayColor="white" navigator={this.props.navigator}>
          <Image
            style={{height:150}}
            resizeMode="contain"
            source={{ uri: 'https://www.yayomg.com/wp-content/uploads/2014/04/yayomg-pig-wearing-party-hat.jpg' }}
          />
        </Lightbox>
        <Button
          title="click"
          onPress={()=>{
            ImagePicker.showImagePicker(photoOptions,(response) =>{
                console.log('response'+response);
                if (response.didCancel){
                    return
                }
            })
          }}
        ></Button>
      </View>
    );
  }
}
const styles = StyleSheet.create({
});