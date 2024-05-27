import React from 'react'
import {
  SafeAreaView,
  StatusBar,
  View,
  StyleSheet,
} from 'react-native'

import Anim10 from './chapter-9/9-12/example1/Anim10'

const MKSZ628App = () => {

  return (
    <SafeAreaView>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor='#FFFFFF'
      />
      <View style={styles.container}>
        <Anim10 />
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
