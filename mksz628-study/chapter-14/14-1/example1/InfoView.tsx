import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
  info: UserInfo
}

export default React.memo((props: Props) => {

  const { info } = props

  console.log('render...')
  return (
    <View style={styles.content}>
      <Image
        style={styles.img}
        source={{uri: info.avatar}}
      />
      <Text style={styles.txt}>{info.name}</Text>
      <View style={styles.infoLayout}>
        <Text style={styles.infoTxt}>{info.description}</Text>
      </View>
    </View>
  )
}, (preProps: Props, nextProps: Props) => {
  // prePros：发生渲染之前的 props，nextProps 发生这次渲染变化的 props。
  // 返回 true，需要用缓存，不要重新渲染。
  // 返回 false，不要缓存，每次都重新渲染。
  // 这里没必要对象的每个属性都比较一次，可以将对象字符串化进行比较。
  return JSON.stringify(preProps.info) === JSON.stringify(nextProps.info)
})

const styles = StyleSheet.create({
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
