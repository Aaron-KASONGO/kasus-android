import React from 'react'
import LottieView from 'lottie-react-native';

export const EmptyView = ({width, height}) => {
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
            source={{ uri: 'https://lottie.host/a282f3b6-ba7a-4db5-99e0-4021ea8ffdbb/ldnJayBTez.json'}}
        />
    </>
  )
}
