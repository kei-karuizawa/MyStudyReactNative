import { SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import Home from './modules/Home'

export default function MKSZ628CourseAccountManagerApp() {
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar
        barStyle='default'
        translucent={true}
        // backgroundColor={'white'}
      />
      <Home />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F5F5F5',
  },
})
