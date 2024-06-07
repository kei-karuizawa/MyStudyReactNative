import { TextInput, StyleSheet } from 'react-native'
import { forwardRef, useImperativeHandle, useState } from 'react'

export default forwardRef((props, ref) => {
  const [value, setValue] = useState('')

  const getValue = () => {
    return value
  }

  useImperativeHandle(ref, () => {
    return {
      getValue
    }
  })

  return (
    <TextInput
      style={[styles.textInput, props.style]}
      onChangeText={(value) => setValue(value)}
      defaultValue={props.defaultValue}
    />
  )
})

const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    backgroundColor: '#E0E0E0',
    borderRadius: 8,
    height: 40,
  },
})
