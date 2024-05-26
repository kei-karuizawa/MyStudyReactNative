import React, { useRef } from 'react'
import { ImageBackground, View, StyleSheet, Text } from 'react-native'

export default () => {

  const viewRef = useRef(null)
  // const imageRef = useRef((): void?)

  return (
    <View style={styles.root}>
      <ImageBackground
        style={styles.viewStyle}
        imageStyle={styles.imageStyle}
        source={{uri: 'https://gitlab.com/kiriha/my-public-pictures/-/raw/main/kana/avatar.jpg?ref_type=heads'}}
        ref={viewRef}
        // imageRef={imageRef}
      >
        <Text style={{color: 'red', fontSize: 28}}>子元素</Text>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    flexDirection: 'column'
  },
  viewStyle: {
    width: '100%',
    height: 150,
    backgroundColor: 'red',
  },
  imageStyle: {
    resizeMode: 'repeat',
    //borderRadius: 10,
  },
})
