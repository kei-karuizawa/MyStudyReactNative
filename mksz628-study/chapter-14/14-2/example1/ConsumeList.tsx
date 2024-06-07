import { StyleSheet, Text, View, FlatList, Switch, Button, ListRenderItemInfo, TouchableOpacity } from 'react-native'
import { useState, useMemo, useCallback } from 'react'
import { MKSZ628Course1402Example1Data1, MKSZ628Course1402Example1Data2 } from './MKSZ628Course1402Example1Data'
import { MKSZ628Course1402Example1TypeColors } from './MKSZ628Course1402Example1TypeColors'
import React from 'react'

export default () => {
  const [data, setData] = useState<any>(MKSZ628Course1402Example1Data1)
  const [showType, setShowType] = useState<boolean>(false)

  // 用了 useMemo 后结果是缓存的一个值，而不在是函数了。
  const calculateTotal = useMemo(() => {
    console.log('重新计算合计...')

    console.log('重新渲染合计...')

    return data.map((item: any) => item.amount)
      .reduce((pre: number, cur: number) => pre + cur)
  }, [data])

  // 用了 useMemo 后结果是缓存的一个 UI，而不在是函数了。
  const totalAmountView = useMemo(() => {
    const total = data.map((item: any) => item.amount)
      .reduce((pre: number, cur: number) => pre + cur)

    return (
      <View style={styles.totalLayout}>
        <Text style={styles.totalTxt}>{total}</Text>
        <Text style={styles.totalTxt}>合计：</Text>
      </View>
    )

  }, [data])

  // useCallback 缓存回调函数。
  // 这个用了高阶函数。
  const onItemPress = useCallback((item: any, index: number) => (() => {
    console.log(`点击了第${index}行。`)
  }), [])

  const renderItem = ({item, index}: ListRenderItemInfo<ConsumeDataType>) => {
    const styles = StyleSheet.create({
      itemLayout: {
        width: '100%',
        padding: 16,
        flexDirection: 'column',
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0'
      },
      labelRow: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
      },
      first: {
        flex: 0.4,
      },
      second: {
        flex: 0.3,
      },
      last: {
        flex: 0.6,
      },
      labelTxt: {
        flex: 1,
        fontSize: 14,
        color: '#666'
      },
      valueTxt: {
        flex: 1,
        fontSize: 18,
        color: '#333',
        fontWeight: 'bold'
      },
      valueRow: {
        marginTop: 10
      },
      typeLayout: {
        flex: 0.3,
      },
      typeTxt: {
        width: 20,
        height: 20,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
        borderRadius: 4,
        fontWeight: 'bold'
      }
    })

    return (
      <TouchableOpacity
        style={styles.itemLayout}
        onPress={onItemPress(item ,index)}
      >
        <View style={styles.labelRow}>
          <Text style={[styles.labelTxt, styles.first]}>序号</Text>
          {showType && <Text style={[styles.labelTxt, styles.second]}>类型</Text>}
          <Text style={[styles.labelTxt]}>消费名称</Text>
          <Text style={[styles.labelTxt, styles.last]}>消费金额</Text>
        </View>
        <View style={[styles.labelRow, styles.valueRow]}>
          <Text style={[styles.valueTxt, styles.first]}>{item.index}</Text>
          {showType && <View style={styles.typeLayout}>
            <Text style={[styles.typeTxt, {backgroundColor: MKSZ628Course1402Example1TypeColors[item.type]}]}>{item.type}</Text>
          </View>}
          <Text style={[styles.valueTxt]}>{item.name}</Text>
          <Text style={[styles.valueTxt, styles.last]}>{item.amount}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.root}>
      <View style={styles.titleLayout}>
        <Text style={styles.titleTxt}>消费记账单</Text>
        <Switch
          style={styles.switch}
          value={showType}
          onValueChange={value => setShowType(value)}
        />
        <Button
          title={'切换数据'}
          onPress={() => {
            setData(MKSZ628Course1402Example1Data2)
          }}
        />
      </View>
      <FlatList
        data={data}
        keyExtractor={(item, index) => {
          return `${item.index}-${item.name}`
        }}
        renderItem={renderItem}
      />
      {/*<View style={styles.totalLayout}>*/}
      {/*  <Text style={styles.totalTxt}>{calculateTotal}</Text>*/}
      {/*  <Text style={styles.totalTxt}>合计：</Text>*/}
      {/*</View>*/}
      {totalAmountView}
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  titleLayout: {
    width: '100%',
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleTxt: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
  },
  totalLayout: {
    width: '100%',
    height: 60,
    flexDirection: 'row-reverse',
    borderTopWidth: 1,
    borderTopColor: '#c0c0c0',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  totalTxt: {
    fontSize: 20,
    color: '#333',
    fontWeight: 'bold',
  },
  switch: {
    position: 'absolute',
    right: 16,
  }
})
