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

    // 联合类型
    let arg: number | string = '1'
    arg = 12
    // arg = false  // 报错。
    const name: string | undefined | null = null;
    type user = {
      name?: String
      age?: number
      speak?: () => void
    }
    const u: user | undefined = {}
    u?.speak?.()

    // 字面量
    let sex: 'male' | 'female' = 'male'
    console.log(sex)
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
