import React from 'react'
import {
  SafeAreaView,
  StatusBar,
  View,
  StyleSheet,
} from 'react-native'
import MKSZ628Course68Task from './chapter-6/6-8/MKSZ628Course68Task'

const MKSZ628App = () => {

  return (
    <SafeAreaView>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor='#FFFFFF'
      />
      <View style={styles.container}>
        <MKSZ628Course68Task />
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
