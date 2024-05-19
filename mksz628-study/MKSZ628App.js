import React, { useEffect, useState } from 'react'
import {
  SafeAreaView,
  StatusBar,
  View,
  StyleSheet, Text,
} from 'react-native'
import ClassView from './chapter-6/6-5/example1/ClassView'
import FunctionView from './chapter-6/6-6/example1/functionView'
import MKSZ628Course67Example1File1 from './chapter-6/6-7/example1/MKSZ628Course67Example1File1'
import MKSZ628Course67Example1File2 from './chapter-6/6-7/example1/MKSZ628Course67Example1File2'
import MKSZ628Course67Example1File3 from './chapter-6/6-7/example1/MKSZ628Course67Example1File3'

const MKSZ628App = () => {

  // const [showClassView, setShowClassView] = useState(true)
  //
  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowClassView(false)
  //   }, 2000)
  // }, [])

  return (
    <SafeAreaView>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor='#FFFFFF'
      />
      <View style={styles.container}>
        {/*{ showClassView && <ClassView /> }*/}

        {/*<ClassView name='lisi' age={22} level={'top'} sex={true} />*/}

        {/*<FunctionView name='lisi' age={22} level={'top'} sex={true} />*/}

        {/*<MKSZ628Course67Example1File1 />*/}

        {/*<MKSZ628Course67Example1File2*/}
        {/*  customView={() => {*/}
        {/*    return (*/}
        {/*      <View>*/}
        {/*        <Text>AAA</Text>*/}
        {/*      </View>*/}
        {/*    )*/}
        {/*  }}*/}
        {/*/>*/}

        <MKSZ628Course67Example1File3>
          <View>
            <Text>BBB</Text>
          </View>
        </MKSZ628Course67Example1File3>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 30,
  }
})

export default MKSZ628App
