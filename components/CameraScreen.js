import React, { useEffect, useRef, useState } from 'react';
import { ImageBackground, View } from 'react-native';
import { IconButton, Text } from 'react-native-paper';
import { heightStatusBar } from './const/constValues';
import { Camera, CameraType, FlashMode, ImageType } from "expo-camera";
import { FontAwesome } from "@expo/vector-icons";

export const CameraScreen = ({navigation}) => {
  const [type, setType] = useState(CameraType.back);
  const [flashMode, setFlashMode] = useState(FlashMode.off);
  const [captured, setCaptured] = useState(null);
  const [previewVisible, setPreviewVisible] = useState(false);

  const camera = useRef(null);

  const setCameraType = () => {
    setType(current => (current === CameraType.back ? CameraType.front: CameraType.back));
  }

  const takePicture = async () => {
    if (!camera) return;
    const photo = await camera.current.takePictureAsync()
    console.log(photo)
    setCaptured(photo)
    setPreviewVisible(true)
  }

  return (
    <View
      style={{
        display: 'flex',
        flex: 1,
        marginTop: heightStatusBar
      }}
    >
      {
        previewVisible && captured ? (
          <ImageBackground
            source={{ uri: captured.uri }}
            style={{
              flex: 1,
              height: '100%',
              
              width: '100%'
            }}
          >
            {console.log(captured.url)}
            <View
              style={{
                marginTop: 'auto',
                flexDirection: 'row',
                justifyContent: 'center',
                marginBottom: 50
              }}
            >
              <IconButton icon={'close'} size={50} onPress={() => navigation.goBack()} containerColor='white' />
              <IconButton icon={'check'} size={50} onPress={() => console.log("Pressed")} containerColor='white' />
            </View>
          </ImageBackground>
        ):  (
          <Camera
            style={{
              height: '100%',
              width: '100%',
              display: 'flex',
              flex: 1,
              paddingBottom: 40
            }}
            autoFocus
            type={type}
            flashMode={flashMode}
            ImageType={ImageType.jpg}
            ref={camera}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 30
              }}
            >
              <FontAwesome onPresse={() => setFlashMode(current => (current === FlashMode.off ? FlashMode.torch: FlashMode.off))} name='flash' size={25} color={'white'} />
              <FontAwesome onPresse={() => setCameraType()} name='retweet' size={25} color={'white'} />
              <FontAwesome onPresse={() => navigation.goBack()} name='close' size={25} color={'white'} />
            </View>
            <View
              style={{
                marginTop: 'auto',
                alignItems: 'center',
                justifyContent: 'space-around',
                flexDirection: 'row',
                marginHorizontal: 60
              }}
            >
              <IconButton icon={'camera'} size={50} onPress={() => takePicture()} containerColor='white' />
            </View>
          </Camera>
        )
      }
    </View>
  )
}
