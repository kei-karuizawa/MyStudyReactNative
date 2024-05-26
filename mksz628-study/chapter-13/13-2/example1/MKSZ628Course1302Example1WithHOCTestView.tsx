import React from 'react'
import { StyleSheet, Text } from 'react-native'

type IReactComponent =
  React.ComponentClass
  | React.FunctionComponent
  | React.ForwardRefExoticComponent<any>

export default <T extends IReactComponent>(OriginView: T): T => {

  const HOCView = (props: any) => {
    return (
      <>
        <OriginView {...props} />
        <Text style={styles.txt}>HOC</Text>
      </>
    )
  }

  return HOCView as T
}

const styles = StyleSheet.create({
  txt: {
    position: 'absolute',
    left: 0,
    bottom: 50,
    fontSize: 30,
    color: 'red'
  }
})
