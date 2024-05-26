import React from "react"
import {
  View,
  Button
} from 'react-native'

export default () => {

  const add = (n1: number, n2: number): number => {
    return n1 + n2;
  }

  const onButtonPress: () => void = () => {

    const f1: () => void = () => {
      console.log('f1...')
    }
    f1()

    const f2: (s: string) => void = (s: string) => {
      console.log(s)
    }
    f2('hello word')

    const f3: (n1: number, n2: number) => number = (n1: number, n2: number) => n1 + n2
    console.log(f3(1, 2))

    const f4: (name: string, age?: number) => void = (name: string, age?: number) => {
      console.log(name, age || 0) // 第二个参数不穿取 0 岁。
    }
    f4('111')

    // 函数默认值。函数有默认值时就不要写类型了，直接赋值。
    const f5 = (name: string, age: number = 100) => {
      console.log(name, age)
    }
  }

  return (
    <View>
      <Button
        title={'按   钮'}
        onPress={onButtonPress}
      />
    </View>
  )
}
