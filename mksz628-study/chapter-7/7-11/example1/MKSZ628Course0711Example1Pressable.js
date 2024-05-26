import React from 'react'
import { View, StyleSheet, Pressable, Text } from 'react-native'

export default () => {

  return (
    <View style={styles.root}>
      {/* 带样式的状态。 */}
      <Pressable style={(state) => {
        // 表示当前按钮有没有被按下。
        const { pressed } = state
        // 注意这个写法，只有在 pressed 为真时才会把 `buttonPress` 样式加上。
        return [styles.button, pressed && styles.buttonPress]
      }}>
        {/* 带状态的子节点。 */}
        {(state) => {
          const { pressed } = state
          return (
            <Text style={pressed ? styles.txtPress : styles.txt}>按 钮</Text>
          )
        }}
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: 'gray',
  },
  button: {
    width: 300,
    height: 65,
    backgroundColor: '#2020FF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonPress: {
    backgroundColor: 'white',
  },
  txt: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold'
  },
  txtPress: {
    fontSize: 18,
    color: '#2020FF',
    fontWeight: 'bold',
  }
})
