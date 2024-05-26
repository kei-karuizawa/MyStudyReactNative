import React from 'react'
import {
  SafeAreaView,
  StatusBar,
  View,
  StyleSheet,
} from 'react-native'

import CustomInput from './chapter-15/15-2/example1/CustomInput'
const MKSZ628App = () => {

  return (
    <SafeAreaView>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor='#FFFFFF'
      />
      <View style={styles.container}>
        <CustomInput />
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
    marginTop: 0,
  }
})

export default MKSZ628App
