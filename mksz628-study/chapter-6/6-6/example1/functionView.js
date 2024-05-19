import React, { useEffect, useRef, useState } from 'react'
import { Text, View, ScrollView, useWindowDimensions, useColorScheme } from 'react-native'

function functionView(props) {

  // 函数式组件没有 `this`，写了会报错。
  const { name, age, level, sex } = props

  // state 在赋初始值是也是一次赋值，所以也是一次变化，也会执行副作用。
  // 函数式一个 set 对应一个更新。
  const [address, setAddress] = useState('福建省福州市')

  // Ref 使用。
  const scrollViewRef = useRef(null)

  // useWindowDimensions 使用。
  const { width, height } = useWindowDimensions()
  console.log(`width:${width}, height:${height}`)

  const colorScheme = useColorScheme()
  console.log(`useColorScheme=${colorScheme}`)

  // 函数式组件没有生命周期，但有副作用,
  // useEffect 可以监听一个值的变化并发通知。
  // 中括号里就是要监听的值，值一但发生变化就会执行回调函数。
  // 如果中括号啥都不写，那就会在第一次加载组件的时候执行回调，就相当于 class 组件 `componentDidMount`，但两者实际上不是一回事。
  useEffect(() => {
    console.log('useEffect[]...')

    setTimeout(() => {
      console.log('福州市台江区')
      setAddress('福州市台江区')

      scrollViewRef.current.scrollToEnd({amimted: true})
    }, 2000)
  }, [])

  // useEffect 可以写多个。
  useEffect(() => {
    console.log(`useEffect[${address}]...`)
  }, [address])

  console.log('return...')
  return (
    <View style={{ width: '100%', height: 200, backgroundColor: 'blue' }}>
      <Text style={{fontSize: 20, color: 'white'}}>{`name=${name}, age=${age}, level=${level}, sex=${sex}`}</Text>
      <Text style={{fontSize: 20, color: 'yellow'}}>{address}</Text>

      <ScrollView ref={scrollViewRef}>
        {/* marginVertical：上下 margin */}
        <Text style={{ fontSize: 24, marginVertical: 12, color: 'red' }}>AAA</Text>
        <Text style={{ fontSize: 24, marginVertical: 12, color: 'red' }}>BBB</Text>
        <Text style={{ fontSize: 24, marginVertical: 12, color: 'red' }}>CCC</Text>
        <Text style={{ fontSize: 24, marginVertical: 12, color: 'red' }}>DDD</Text>
        <Text style={{ fontSize: 24, marginVertical: 12, color: 'red' }}>EEE</Text>
        <Text style={{ fontSize: 24, marginVertical: 12, color: 'red' }}>FFF</Text>
        <Text style={{ fontSize: 24, marginVertical: 12, color: 'red' }}>GGG</Text>
        <Text style={{ fontSize: 24, marginVertical: 12, color: 'red' }}>HHH</Text>
      </ScrollView>
    </View>
  )
}


export default functionView

// 执行顺序：
// return...
// useEffect...
