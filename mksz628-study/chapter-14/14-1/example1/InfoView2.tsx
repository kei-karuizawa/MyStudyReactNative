import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
  info: UserInfo
}

export default class InfoView2 extends React.Component<Props, any> {

  constructor(props: Props) {
    super(props)
  }

  // 这里相当于函数式的 useMemo。
  // 这个返回值的含义与函数式的 useMemo 相反。
  shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<any>, nextContext: any): boolean {
    return JSON.stringify(nextProps.info) != JSON.stringify(this.props.info)
  }

  render(): React.ReactNode {

    console.log('render...')

    const { info } = this.props

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
  }
}

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
