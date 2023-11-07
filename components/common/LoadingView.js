import React from 'react'
import LottieView from 'lottie-react-native';

export const LoadingView = ({width, height}) => {
  return (
    <>
        <LottieView
            autoPlay
            style={{
            width: width,
            height: height,
            }}
            loop
            // Find more Lottie files at https://lottiefiles.com/featured
            source={{ uri: 'https://lottie.host/e8426a29-479a-464e-9dc7-163ee6f95e98/Ik2wRTLwWv.json'}}
        />
    </>
  )
}
