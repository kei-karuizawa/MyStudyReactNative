import React from 'react'
import {
  SafeAreaView,
  StatusBar,
  View,
  StyleSheet,
} from 'react-native'

import MKSZ628Course0719PersonInfo from './chapter-7/7-19/MKSZ628Course0719PersonInfo'

const MKSZ628App = () => {

  return (
    <SafeAreaView>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor='#FFFFFF'
      />
      <View style={styles.container}>
        <MKSZ628Course0719PersonInfo />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    marginTop: 0,
  }
})

export default MKSZ628App
