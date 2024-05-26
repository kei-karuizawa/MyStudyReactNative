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

    // 数组。
    const a1: number[] = [1, 2, 3, 4, 5, 6, 7]
    console.log(a1)
    const a2: Array<number> = [1, 2, 3, 4, 5, 6, 7]
    console.log(a2)
    const a3: Array<number> = new Array(5)
    console.log(a3)  // [undefined, undefined, undefined, undefined, undefined]
    a3[1] = 23
    console.log(a3)  // [undefined, 23, undefined, undefined, undefined]
    const a4: Array<number | string> = []
    a4.push(3)
    a4.push('3')
    //a4.push(true)  // 报错。
    console.log(a4)

    // 元组。
    const t1: [string, number, boolean] = ['1', 2, true]
    console.log(t1)
    console.log(t1[2])
    t1.push('1')  // 这个操作是可以的。
    console.log(t1)

    // 枚举。
    enum Job {
      Teacher,
      Programer,
      Cook
    }

    console.log(Job.Programer)
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
