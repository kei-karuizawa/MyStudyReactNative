import {
  Button,
  Image,
  ImageBackground,
  Modal,
  Pressable,
  SafeAreaView, SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { useState } from 'react'

const MenuAndShareComponents = () => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      width: '100%',
      flex: 1,
      // backgroundColor: 'purple',
      alignItems: 'center',
      // marginBottom: 8,
      // marginTop: 16,
    },
    menuButton: {
      width: 30,
      height: 30,
      marginTop: 10,
      marginLeft: 10,
    },
    shareButton: {
      width: 30,
      height: 30,
      position: 'absolute',
      top: 10,
      right: 10,
    }
  })

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.menuButton}
      >
        <Image
          style={{ width: '100%', height: '100%' }}
          source={require('../../assets/images/icon_menu.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.shareButton}
      >
        <Image
          style={{ width: '100%', height: '100%' }}
          source={require('../../assets/images/icon_share.png')}
        />
      </TouchableOpacity>
    </View>
  )
}

const MessageComponents = () => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      width: '100%',
      flex: 3,
      // backgroundColor: 'red',
      alignItems: 'center',
    },
    avatar: {
      width: 80,
      height: 80,
      borderRadius: 40,
      // marginTop: 20,
      marginLeft: 20,
    },
    add: {
      width: 20,
      height: 20,
      // marginTop: 40,
      // // marginRight: 40,
      position: 'relative',
      top: 20,
      right: 15,
    },
    name: {
      fontSize: 30,
      color: 'white',
      // marginTop: 20,
      marginLeft: 12,
    },
    redBookNum: {
      // marginTop: 10,
      // marginLeft: 12,
      color: '#C0C0C0',
      textAlign: 'center',
      textAlignVertical: 'center'
    },
    qrCode: {
      width: 15,
      height: 15,
      marginLeft: 6
    },
  })

  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={require('../../assets/images/default_avatar.png')}
      />
      <TouchableOpacity>
        <Image
          style={styles.add}
          source={require('../../assets/images/icon_add.png')}
        />
      </TouchableOpacity>
      <View>
        <Text style={styles.name}>大公爵</Text>
        <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 12, padding: 2, alignItems: 'center' }}>
          <Text style={styles.redBookNum}>小红书号：118302851</Text>
          <TouchableOpacity>
            <Image
              style={styles.qrCode}
              source={require('../../assets/images/icon_code.png')}
            />
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

// 点击关注，填写简介 && 性别图标。
const OtherMessageComponents = () => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      width: '100%',
      flex: 2,
      // backgroundColor: 'blue',
      justifyContent: 'center',
    },
    label: {
      fontSize: 16,
      color: '#C0C0C0',
      // marginTop: 20,
      marginLeft: 12,
    },
    iconContainer: {
      width: 40,
      height: 20,
      marginLeft: 12,
      marginTop: 14,
      backgroundColor: 'gray',
      // padding: 2,
      // marginHorizontal: 15,
      // marginVertical: 8,
      borderRadius: 10,
      paddingVertical: 4,
      // paddingHorizontal: 4,
    },
    icon: {
      // width: 20,
      // height: 20,
      // marginLeft: 12,
      // marginTop: 14,
      backgroundColor: 'gray',
      // padding: 2,
      // marginHorizontal: 15,
      // marginVertical: 8,
      borderRadius: 10,
      width: '100%',
      height: '100%',
    },
  })
  return (
    <View style={styles.container}>
      <Text style={styles.label}>点击关注，填写简介</Text>
      <View style={styles.iconContainer}>
        <Image
          style={styles.icon}
          source={require('../../assets/images/icon_female.png')}
          resizeMode={'contain'}
        />
      </View>
    </View>
  )
}

const SectionHeader = ({section}) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#C0C0C0',
      padding: 12,
    },
    txt: {
      fontSize: 26,
      fontWeight: 'bold',
    },
  })

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>{section.title}</Text>
    </View>
  )
}

// 粉丝数据子视图。
const DataViewComponent = () => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      // width: '100%',
      // backgroundColor: 'yellow',
      paddingTop: 12,
      paddingBottom: 12,
      paddingLeft: 0,
      justifyContent: 'flex-start',
      flex: 3,
    },
    num: {
      fontSize: 16,
      color: '#C0C0C0',
      // textAlign: 'center',
      // textAlignVertical: 'center',
      // backgroundColor: 'blue',
      padding: 0,
    },
    title: {
      fontSize: 16,
      color: '#C0C0C0',
      // textAlign: 'center',
      // textAlignVertical: 'center',
      // backgroundColor: 'red',
    },
    dataView: {
      flexDirection: 'column',
      // flex: 1,
      alignItems: 'center',
      marginRight: 28,
      paddingLeft: 10,
    },
    modalView: {
      // marginTop: 100,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    closeTxt: {
      fontSize: 26,
      textAlign: 'center',
      backgroundColor: 'blue',
      color: 'white',
    },
    closeButton: {
      marginTop: 100,
    },
  })

  const [visible, setVisible] = useState(false)

  const renderItem = ({ item }) => {
    const styles = StyleSheet.create({
      container: {
        flexDirection: 'row',
        padding: 12,
        backgroundColor: 'white',
      },
      txt: {
        fontSize: 24,
      },
    })

    return (
      <View style={styles.container}>
        <Text style={styles.txt}>{item}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.dataView}>
        <Text
          style={styles.num}
          onPress={() => setVisible(true)}
        >
          142
        </Text>
        <Text
          style={styles.title}
          onPress={() => {
            setVisible(true)
          }}
        >
          关注
        </Text>
      </View>
      <View style={styles.dataView}>
        <Text style={styles.num}>1098</Text>
        <Text style={styles.title}>粉丝</Text>
      </View>
      <View style={styles.dataView}>
        <Text style={styles.num}>1042</Text>
        <Text style={styles.title}>获赞与收藏</Text>
      </View>
      <Modal
        animationType={'slide'}
        visible={visible}
        transparent={true}
      >
        <View style={styles.modalView}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setVisible(false)}
          >
            <Text style={styles.closeTxt}>关闭</Text>
          </TouchableOpacity>
          <SectionList
            sections={[
              {title: 'A', data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']},
              {title: 'B', data: ['1', '2', 3, '4', '5', '6', '7', '8', '9', '10']},
            ]}
            renderItem={renderItem}
            renderSectionHeader={({section}) => {
              return <SectionHeader style={{ backgroundColor: 'white' }} section={section} />
            }}
          />
        </View>
      </Modal>
    </View>

  )
}

// 编辑资料按钮和设置按钮子视图。
const EditAndSettingsSubComponent = () => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      // width: '100%',
      // backgroundColor: 'green',
      alignItems: 'center',
      // padding: 6,
      flex: 2,
      justifyContent: 'flex-end'
    },
    edit: {
      // fontSize: 14,
      height: 30,
      color: '#C0C0C0',
      textAlign: 'center',
      textAlignVertical: 'center',
      borderWidth: 1,
      borderColor: '#C0C0C0',
      borderRadius: 16,
      marginRight: 4,
      paddingHorizontal: 10,
    },
    button: {
      width: 30,
      height: 30,
      marginLeft: 8,
      borderWidth: 1,
      borderRadius: 14,
      borderColor: '#C0C0C0',
      paddingHorizontal: 20,
      tintColor: '#C0C0C0',
      marginRight: 8,
    },
  })

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.edit}>编辑资料</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={styles.button}
          source={require('../../assets/images/icon_setting.png')}
          resizeMode='center'
        />
      </TouchableOpacity>
    </View>
  )
}

// 粉丝数据，编辑资料以及设置总视图。
const DataAndEditAndSettingsComponents = () => {
  const styles = StyleSheet.create({
    dataViewComponent: {
      // flex: 5,
    },
    editAndSettingsSubComponent: {
      // flex: 1,
    },
  })

  return (
    <View style={{ flexDirection: 'row', width: '100%', flex: 2 }}>
      <DataViewComponent style={styles.dataViewComponent} />
      <EditAndSettingsSubComponent style={styles.editAndSettingsSubComponent} />
    </View>
  )
}

const ButtonsView = (props) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      borderBottomColor: '#C0C0C0',
      borderBottomWidth: 1,
      paddingVertical: 6,
      backgroundColor: 'white',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      marginTop: -8,
      // paddingTop: 12,
    },
    text: {
      fontSize: 22,
      // marginRight: 18,
      fontWeight: 'bold',
      color: '#C0C0C0',
      // backgroundColor: 'green',
      textAlign: 'center',
      textAlignVertical: 'center'
    },
    buttonPress: {
      color: 'black',
    },
    line: {
      // width: '100%',
      height: 2,
      backgroundColor: 'red',
      marginLeft: 2,
      marginRight: 2,
    },
    button: {
      flexDirection: 'column',
      // backgroundColor: 'yellow',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 18,
    },
  })

  const [whichButtonToTap, setWhichButtonToTap] = useState(0)

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => {
          setWhichButtonToTap(0)
          props.buttonFunction(0)
        }}
      >
        {(state) => {
          // const { pressed } = state
          return (
            <View>
              <Text style={[styles.text, whichButtonToTap === 0 && styles.buttonPress]}>笔记</Text>
              {whichButtonToTap === 0 &&<View style={styles.line} />}
            </View>
          )
        }}
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => {
          setWhichButtonToTap(1)
          props.buttonFunction(1)
        }}
      >
        {(state) => {
          return (
            <View>
              <Text style={[styles.text, whichButtonToTap === 1 && styles.buttonPress]}>收藏</Text>
              {whichButtonToTap === 1 &&<View style={styles.line} />}
            </View>
          )
        }}
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => {
          setWhichButtonToTap(2)
          props.buttonFunction(2)
        }}
      >
        {(state) => {
          return (
            <View>
              <Text style={[styles.text, whichButtonToTap === 2 && styles.buttonPress]}>赞过</Text>
              {whichButtonToTap === 2 &&<View style={styles.line} />}
            </View>
          )
        }}
      </Pressable>
    </View>
  )
}

const CustomerView = (props) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      // backgroundColor: 'blue',
    },
    image: {
      width: 100,
      height: 100,
      marginTop: 80,
    },
    text: {
      fontSize: 20,
      color: '#C0C0C0',
      textAlign: 'center',
      textAlignVertical: 'center',
      marginTop: 20,
    },
    textButton: {
      fontSize: 20,
      color: '#C0C0C0',
      borderColor: '#C0C0C0',
      borderWidth: 1,
      borderRadius: 14,
      paddingVertical: 2,
      paddingHorizontal: 12,
      textAlign: 'center',
      textAlignVertical: 'center',
      marginTop: 20,
    },
  })

  let text = ''
  let title = ''
  let imageSource = ''
  switch (props.buttonState) {
    case 0:
      text = '用一句话，分享今天的快乐吧~'
      title = '去分享'
      imageSource = require('../../assets/images/icon_1.png')
      break
    case 1:
      text = '111用一句话，分享今天的快乐吧~'
      title = '1111去分享'
      imageSource = require('../../assets/images/icon_2.png')
      break
    case 2:
      text = '222用一句话，分享今天的快乐吧~'
      title = '222去分享'
      imageSource = require('../../assets/images/icon_3.png')
      break
    default:
      text = ''
      title = '121'
      imageSource = ''
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={imageSource}
      />
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.textButton}>{title}</Text>
    </View>
  )
}

// 总视图。
export default () => {
  const [buttonState, setButtonState] = useState(0)

  const buttonFunction = (buttonState) => {
    setButtonState(buttonState)
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.imageBackground}
        resizeMode="stretch"
        source={require('../../assets/images/icon_bg.png')}
      >
        <MenuAndShareComponents />
        <MessageComponents />
        <OtherMessageComponents />
        <DataAndEditAndSettingsComponents />
      </ImageBackground>
      {/*<View style={styles.listContainer}>*/}
        <ButtonsView buttonFunction={buttonFunction} />
        <CustomerView buttonState={buttonState} />
      {/*</View>*/}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // height: '100%',
    flexDirection: 'column',
    padding: 0,
    // backgroundColor: 'red',
  },
  imageBackground: {
    width: '100%',
    height: 300,
    flexDirection: 'column',
    // padding: 20,
    // backgroundColor: 'red',
  },
  listContainer: {
    width: '100%',
    // height: 500,
    // backgroundColor: 'yellow',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: -10,
    // position: 'absolute',
    // bottom: 0,
  },
})
