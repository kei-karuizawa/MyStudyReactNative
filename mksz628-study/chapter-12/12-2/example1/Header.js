import React, { useContext } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

import { ThemeContext} from './ThemeContext'

export default () => {

  const theme = useContext(ThemeContext)
  const styles = theme === 'dark' ? darkStyles : lightStyles

  return (
    <View style={styles.content}>
      {/*<StatusBar translucent={true} backgroundColor={'#353535'} barStyle={'light-content'} />*/}
      <Image
        style={styles.img}
        source={{uri: 'https://gitlab.com/kiriha/my-public-pictures/-/raw/main/kana/logo.jpg?ref_type=heads'}}
      />
      <Text style={styles.txt}>个人信息介绍</Text>
      <View style={styles.infoLayout}>
        <Text style={styles.infoTxt}>各位产品经理大家好，我是个人开发者账单，我学习 RN 两年半了，我喜欢安卓、RN、Flutter。</Text>
      </View>
    </View>
  )
}

const darkStyles = StyleSheet.create({
  content: {
    width: '100%',
    height: '100%',
    backgroundColor: '#353535',
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 64,
  },
  img: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  txt: {
    width: '100%',
    height: 60,
    textAlign: 'center',
    marginTop: 20,
    fontSize: 30,
    color: 'white',
  },
  infoLayout: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'gray',
    borderRadius: 20,
  },
  infoTxt: {
    color: 'white',
    fontSize: 18,
  }
})

const lightStyles = StyleSheet.create({
  content: {
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 64,
  },
  img: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  txt: {
    width: '100%',
    height: 60,
    textAlign: 'center',
    marginTop: 20,
    fontSize: 30,
    color: 'white',
  },
  infoLayout: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'gray',
    borderRadius: 20,
  },
  infoTxt: {
    color: 'white',
    fontSize: 18,
  }
})
