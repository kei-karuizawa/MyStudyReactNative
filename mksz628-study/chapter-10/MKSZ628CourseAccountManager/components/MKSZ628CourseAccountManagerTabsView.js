import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MKSZ628CourseAccountMangerAccountType from './MKSZ628CourseAccountMangerAccountType'
import { forwardRef, useImperativeHandle, useState } from 'react'

export default forwardRef((props, ref) => {
  const getSelectedIndex = (type) => {
    switch (type) {
      case MKSZ628CourseAccountMangerAccountType.GAME:
        return 0
      case MKSZ628CourseAccountMangerAccountType.PLATFORM:
        return 1
      case MKSZ628CourseAccountMangerAccountType.CARD:
        return 2
      case MKSZ628CourseAccountMangerAccountType.OTHER:
        return 3
    }
  }

  const theSelectedIndex = props.selectedTypeName === undefined ? 0 : getSelectedIndex(props.selectedTypeName)
  const [selectedIndex, setSelectedIndex] = useState(theSelectedIndex)

  const getTypeName = () => {
    switch (selectedIndex) {
      case 0:
        return '游戏'
      case 1:
        return '平台'
      case 2:
        return '银行卡'
      case 3:
        return '其他'
    }
  }

  useImperativeHandle(ref, () => {
    return {
      getTypeName
    }
  })

  const types = [
    MKSZ628CourseAccountMangerAccountType.GAME,
    MKSZ628CourseAccountMangerAccountType.PLATFORM,
    MKSZ628CourseAccountMangerAccountType.CARD,
    MKSZ628CourseAccountMangerAccountType.OTHER
  ]

  const renderTabs = () => {
    let tabsComponents = []

    for (let index = 0; index < types.length; index++) {
      tabsComponents.push(
        <TouchableOpacity
          style={[
            styles.tab,
            index === 0 && styles.tabLeftBorder,
            index === 3 && styles.tabRightBorder,
            index > 0 && styles.tabMoveLeft1Pixel,
            selectedIndex === index && styles.tabSelected,
          ]}
          onPress={() => {
            setSelectedIndex(index)
          }}
          key={index}
        >
          <Text
            style={[
              styles.tabTitle,
              selectedIndex === index && styles.tabTitleSelected,
            ]}
          >
            {types[index]}
          </Text>
        </TouchableOpacity>
      )
    }

    return tabsComponents
  }

  return (
    <View style={[styles.container, props.style]}>
      {renderTabs()}
    </View>
  )
})

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    // marginTop: 8,
  },
  tab: {
    flex: 1,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    // borderRadius: 8,
    backgroundColor: 'white',
    height: 30,
  },
  tabLeftBorder: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  tabRightBorder: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  tabMoveLeft1Pixel: {
    marginLeft: -1,
  },
  tabSelected: {
    backgroundColor: 'blue',
  },
  tabTitle: {
    height: '100%',
    fontSize: 16,
    color: 'gray',
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  tabTitleSelected: {
    color: 'white',
  },
})
