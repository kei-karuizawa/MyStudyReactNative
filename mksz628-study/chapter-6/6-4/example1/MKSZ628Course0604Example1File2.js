import { SafeAreaView } from 'react-native'

// 注意这个 import 方式。
import MKSZ628Course0604Example1File1 from './MKSZ628Course0604Example1File1'

// 以下代码报错，提示 _MKSZ628Course0604Example1File.default.test1 is not a function (it is undefined)。
// MKSZ628Course0604Example1File1.test1()

// 这行代码就没问题。
// 这行代码实际上调用 `MKSZ628Course0604Example1File1` 的 `test1` 方法。
MKSZ628Course0604Example1File1()

export default function MKSZ628Course0604Example1File2() {
  return (
    <SafeAreaView></SafeAreaView>
  )
}
