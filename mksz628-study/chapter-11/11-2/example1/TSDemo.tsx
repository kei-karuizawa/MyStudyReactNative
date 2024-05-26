import React from "react"
import {
  View,
  Button
} from 'react-native'

export default () => {

  const onButtonPress: () => void = () => {
    console.log('Press')
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
