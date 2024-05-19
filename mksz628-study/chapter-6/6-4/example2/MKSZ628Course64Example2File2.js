import { SafeAreaView } from 'react-native'

// 注意这个 import 方式。
import { test1, test2 }  from './MKSZ628Course64Example2File1'

// 下面两个调用没问题。
test1()
test2()

function MKSZ628Course64Example2File2() {
  return (
    <SafeAreaView></SafeAreaView>
  )
}

export default MKSZ628Course64Example2File2
