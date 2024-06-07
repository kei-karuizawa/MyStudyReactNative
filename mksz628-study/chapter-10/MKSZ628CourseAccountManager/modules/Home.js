import React from 'react'
import MKSZ628CourseAccountManagerTitleView from '../components/MKSZ628CourseAccountManagerTitleView'
import { Image, TouchableOpacity, StyleSheet, View, SectionList, Text, LayoutAnimation, Alert } from 'react-native'
import { useEffect, useRef, useState } from 'react'
import MKSZ628CourseAccountManagerAddModalView from '../components/MKSZ628CourseAccountManagerAddModalView'
import { load, save, SAVEKEY } from '../utils/Storage'
import MKSZ628CourseAccountMangerAccountType from '../components/MKSZ628CourseAccountMangerAccountType'

import icon_game from '../assets/icon_game.png'
import icon_platform from '../assets/icon_platform.png'
import icon_bank from '../assets/icon_bank.png'
import icon_other from '../assets/icon_other.png'

export default () => {
  const modalRef = useRef(null)

  const [accountList, setAccountList] = useState([])
  // 列表展开收起状态，true 为展开，false 为收起。
  const [listExtendStatus, setListExtendStatus] = useState([
    true,
    true,
    true,
    true,
  ])

  const [protect, setProtect] = useState(false)

  useEffect(() => {
    loadData()
  }, [])

  const loadData = () => {
    load(SAVEKEY).then((resultString) => {
      const loadData = resultString === null ? [] : JSON.parse(resultString)
      console.log(`获取到本地数据：${JSON.stringify(loadData)}`)

      // 数据分组。
      const gameList = loadData.filter((item) => { return item.accountType === MKSZ628CourseAccountMangerAccountType.GAME})
      const platFormList = loadData.filter((item) => { return item.accountType === MKSZ628CourseAccountMangerAccountType.PLATFORM})
      const bankList = loadData.filter((item) => { return item.accountType === MKSZ628CourseAccountMangerAccountType.CARD})
      const otherList = loadData.filter((item) => { return item.accountType === MKSZ628CourseAccountMangerAccountType.OTHER})

      LayoutAnimation.easeInEaseOut()
      setAccountList([
        { type: MKSZ628CourseAccountMangerAccountType.GAME, data: gameList },
        { type: MKSZ628CourseAccountMangerAccountType.PLATFORM, data: platFormList },
        { type: MKSZ628CourseAccountMangerAccountType.CARD, data: bankList },
        { type: MKSZ628CourseAccountMangerAccountType.OTHER, data: otherList },
      ])
    })
  }

  const selectTypeIcon = (type) => {
    switch (type) {
      case MKSZ628CourseAccountMangerAccountType.GAME:
        return icon_game
      case MKSZ628CourseAccountMangerAccountType.PLATFORM:
        return icon_platform
      case MKSZ628CourseAccountMangerAccountType.CARD:
        return icon_bank
      case MKSZ628CourseAccountMangerAccountType.OTHER:
        return icon_other
    }
  }

  const renderSectionHeader = ({ section }) => {
    const styles = StyleSheet.create({
      container: {
        flexDirection: 'row',
        height: 46,
        backgroundColor: 'white',
        padding: 12,
        marginTop: 12,
        alignItems: 'center',
        marginHorizontal: 12,
        // borderWidth: 1,
        // borderColor: '#E0E0E0',
      },
      containerTopBorderRadius: {
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
      },
      containerBottomBorderRadius: {
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
      },
      image: {
        height: 24,
        width: 24,
      },
      text: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
        marginLeft: 12,
      },
      arrowButton: {
        padding: 16,
        position: 'absolute',
        right: 0,
      },
      arrowImage: {
        width: 24,
        height: 24,
      },
    })

    const headerCanAddBottomBorderRadius = () => {
      const dataLength = accountList[section.index].data.length
      if (listExtendStatus[section.index]) {
        // 展开的情况下，如果项目数量是 0，则加圆角；
        // 若项目数量 > 0，则不加圆角。
        return dataLength === 0;
      } else {
        // 收缩情况下，必定加圆角。
        return true
      }
    }

    return (
      <View
        style={[
          styles.container,
          styles.containerTopBorderRadius,
          headerCanAddBottomBorderRadius() && styles.containerBottomBorderRadius
        ]}
      >
        <Image
          style={styles.image}
          source={selectTypeIcon(section.type)}
          resizeMode={'contain'}
        />
        <Text style={styles.text}>{section.type}</Text>
        <TouchableOpacity
          style={[
            styles.arrowButton,
            {
              transform: [{ rotate: listExtendStatus[section.index] ? '0deg' : '-90deg' }],
            }
          ]}
          onPress={() => {
            const copy = [...listExtendStatus]
            copy[section.index] = !copy[section.index]
            LayoutAnimation.easeInEaseOut()
            setListExtendStatus(copy)
          }}
        >
          <Image
            style={styles.arrowImage}
            source={require('../assets/icon_arrow.png')}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      </View>
    )
  }

  const renderSectionItem = ({ item, section, index }) => {
    const styles = StyleSheet.create({
      container: {
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'white',
        marginHorizontal: 12,
        padding: 12,
        borderTopWidth: 1,
        borderTopColor: '#E0E0E0',
      },
      containerBottomBorderRadius: {
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
      },
      title: {
        fontWeight: 'bold',
        textAlignVertical: 'center',
        fontSize: 16,
        color: 'black',
      },
      subTextContainer: {
        flexDirection: 'row'
      },
      subText: {
        fontSize: 16,
        flex: 1,
        marginTop: 8,
      },
    })

    if (listExtendStatus[section.index] === false) {
      return null
    }

    const itemCanAddBottomBorderRadius = () => {
      const dataLength = accountList[section.index].data.length
      if (listExtendStatus[section.index]) {
        // 展开情况下，如果项目数量 > 0，且是本组的最后一个项目，则加圆角；
        // 如果项目数量为 0，则不加圆角。
        return dataLength > 0 && dataLength === index + 1
      } else {
        // 收缩情况下，不加圆角。
        return false
      }
    }

    return (
      <TouchableOpacity
        style={[
          styles.container,
          itemCanAddBottomBorderRadius() && styles.containerBottomBorderRadius
        ]}
        onPress={() => {
          modalRef.current.showModal(true, item)
        }}
        onLongPress={() => {
          const removeAction = () => {
            load(SAVEKEY).then((resultString) => {
              let theLoadData = resultString === null ? [] : JSON.parse(resultString)
              theLoadData = theLoadData.filter((loopItem) => { return loopItem.id !== item.id })
              save(SAVEKEY, JSON.stringify(theLoadData)).then(() => {
                loadData()
              })
            })
          }
          const buttons = [
            {text: '取消', onPress: () => {}},
            {text: '确定', onPress: removeAction},
          ]
          Alert.alert('删除账号', `确认删除账号「${item.accountName}」吗？`, buttons)
        }}
      >
        <Text style={styles.title}>{item.accountName}</Text>
        <View style={styles.subTextContainer}>
          <Text style={styles.subText}>{`账号：${item.account}`}</Text>
          <Text style={styles.subText}>{`密码：${protect ? '********' : item.password}`}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  console.log(`列表分组数据：${JSON.stringify(accountList)}`)

  return (
    <View style={styles.root}>
      <MKSZ628CourseAccountManagerTitleView
        protectCallback={(protect) => {
          setProtect(protect)
        }}
      />

      <SectionList
        style={styles.section}
        sections={accountList.map((section, index) => {return { ...section, index }})}
        renderItem={renderSectionItem}
        renderSectionHeader={renderSectionHeader}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
          modalRef.current.showModal(false)
        }}
      >
        <Image
          style={styles.addImage}
          source={require('../../../assets/images/icon_add.png')}
          resizeMode={'contain'}
        />
      </TouchableOpacity>

      <MKSZ628CourseAccountManagerAddModalView
        saveCallback={() => loadData()}
        ref={modalRef}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    backgroundColor: '#F0F0F0',
    marginTop: 24,
    marginBottom: 60,
  },
  addButton: {
    width: 60,
    height: 60,
    position: 'absolute',
    right: 20,
    bottom: 60,
  },
  section: {
    marginBottom: 60,
  },
  addImage: {
    width: '100%',
    height: '100%',
  },
})
