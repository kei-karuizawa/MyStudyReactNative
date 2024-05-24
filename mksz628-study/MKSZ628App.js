import React from 'react'
import {
  SafeAreaView,
  StatusBar,
  View,
  StyleSheet,
} from 'react-native'
import MKSZ628Course711Example1Pressable from './chapter-7/7-11/example1/MKSZ628Course711Example1Pressable'

const MKSZ628App = () => {

  return (
    <SafeAreaView>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor='#FFFFFF'
      />
      <View style={styles.container}>
        <MKSZ628Course711Example1Pressable />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 30,
  }
})

export default MKSZ628App
