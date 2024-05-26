import { SafeAreaView, StyleSheet, Text } from 'react-native'
import { useEffect, useState } from 'react'

function MKSZ628Course0608Task() {
  const [counter, setCounter] = useState(0)

  // useEffect(() => {
  //   setCounter(1)
  // }, [])

  useEffect(() => {

    // 闭包有个坑！
    // 闭包里面取的值都是上一次的值，而不是外面更新后的值，所以闭包里的 counter 值只会变一次。
    const interval = setInterval(() => {

      // 用传入闭包的形式解决上面的坑，
      // data 则是实时 counter 的值。
      setCounter((data) => {
        return data + 1
      })
    }, 1000)
    setCounter(counter + 1)

    // 组件卸载时会回调这个方法。
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>RN计数器</Text>
      <Text style={styles.counter}>{counter}</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    width: '100%',
    height: 200,
  },
  counter: {
    fontSize: 40,
    fontWeight: 'bold',
    width: '100%',
    height: 300,
  }
})

export default MKSZ628Course0608Task
