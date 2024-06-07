import { StyleSheet, Switch, Text, View } from 'react-native'
import { useState } from 'react'

export default (props) => {
  const [protect, setProtect] = useState(false)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>账号管理</Text>
      <Switch
        style={styles.switch}
        value={protect}
        onValueChange={(value) => {
          setProtect(value)
          props.protectCallback(value)
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlignVertical: 'center',
    textAlign: 'center',
    // color: 'black',
  },
  switch: {
    position: 'absolute',
    right: 30,
  },
})
