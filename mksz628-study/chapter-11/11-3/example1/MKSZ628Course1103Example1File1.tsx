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

    // - number 类型。

    // 声明 number 类型。
    const num1: number = 12
    const num2: number = 12.34
    console.log(num1 + num2)
    console.log(add(7, 8))

    // 下面代码只是提示错，但是可以运行，而且结果也是错的（78）。
    // console.log(add(7, '8'))

    // 下面代码只是提示错，但是可以运行，而且结果也是错的（hello）。
    // 可见 TS 是在开发阶段的，运行时不会报错。
    // let num3: number = 5
    // num3 = 'hello'
    // console.log(num3)

    // 下面代码打印的是对象 `{}`。调用 `valueOf()` 后才打印数字。
    // const num4: Number = new Number(13)
    // console.log(num4.valueOf())

    // string 类型。
    const s1: string = 'hello'
    const s2: string = 'word'
    const s3: string = `hello: ${s2}`
    console.log(s3)
    console.log(2 + '3')  // 23。
    console.log('2' + 3)  // 23。
    const s5 = new String('String 对象')
    console.log(s5) // {"0": "S", "1": "t", "2": "r", "3": "i", "4": "n", "5": "g", "6": " ", "7": "对", "8": "象"}
    console.log(s5.valueOf())  // String 对象

    // boolean 类型。
    const b1: boolean = true
    const b2: boolean = false
    const b3: boolean = !!null  // false.
    console.log(b3)
    // 报错。
    //const b4: boolean = undefined
    const b5: boolean = 4 > 5
    const b6: Boolean = new Boolean(true)
    console.log(b6)  // {}.
    console.log(b6.valueOf())  // true.
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
