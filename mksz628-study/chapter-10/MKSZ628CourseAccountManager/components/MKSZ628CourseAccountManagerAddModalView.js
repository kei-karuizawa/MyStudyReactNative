import {
  Modal,
  View,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Image,
} from 'react-native'
import MKSZ628CourseAccountManagerTabsView from './MKSZ628CourseAccountManagerTabsView'
import MKSZ628CourseAccountManagerModalTextInput from './MKSZ628CourseAccountManagerModalTextInput'
import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import { load, save, SAVEKEY } from '../utils/Storage'
import { uuid } from '../utils/UUID'

export default forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false)
  const [isModify, setIsModify] = useState(false)

  const accountTypeRef = useRef(null)
  const accountNameRef = useRef(null)
  const accountRef = useRef(null)
  const passwordRef = useRef(null)

  // 准备修改的数据。
  const [showItem, setShowItem] = useState(null)

  useImperativeHandle(ref, () => {
    return {
      showModal,
      hiddenModal,
    }
  })

  const showModal = (isModify, item) => {
    setVisible(true)
    setIsModify(isModify)
    setShowItem(item)
  }

  const hiddenModal = () => {
    setVisible(false)
  }

  const onSaveProgress = () => {
    const id = isModify ? showItem.id : uuid()

    const accountType = accountTypeRef.current.getTypeName()
    const accountName = accountNameRef.current.getValue()
    const account = accountRef.current.getValue()
    const password = passwordRef.current.getValue()

    const saveObject = {
      id,
      accountType,
      accountName,
      account,
      password
    }

    // 获取已经存储的数据。
    load(SAVEKEY).then((resultString) => {
      let data = resultString === null ? [] : JSON.parse(resultString)
      if (isModify) {
        // 修改数据的话，取出对应 id 的数据，修改后直接保存。
        for (let i = 0; i < data.length; i++) {
          if (data[i].id === showItem.id) {
            data[i] = saveObject
            break
          }
        }
      } else {
        data.push(saveObject)
      }
      save(SAVEKEY, JSON.stringify(data)).then(() => {
        console.log(`账号数据保存成功：${JSON.stringify(data)}`)
        hiddenModal()
        // 闭包回调。
        props.saveCallback()
      })
    })
  }

  return (
      <Modal
        visible={visible}
        statusBarTranslucent={true}
        transparent={true}
        onRequestClose={hiddenModal}
        animationType={'fade'}
        onDismiss={() => {
        }}
        onShow={() => {
        }}
      >
        <KeyboardAvoidingView
          style={styles.root}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          /* 下面这个属性是指键盘弹出时视图是否向上偏移一段距离，是指键盘弹出时的距离，而不是键盘弹出再收起时的距离。 */
          keyboardVerticalOffset={0}
        >
        <View style={styles.container}>
          <Text style={styles.titleView}>{isModify ? '修改账号' : '添加账号'}</Text>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => {
              setVisible(false)
            }}
          >
            <Image
              style={styles.closeImage}
              source={require('../../../assets/images/icon_close_modal.png')}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
          <Text style={styles.subTitle}>账号类型</Text>
          <MKSZ628CourseAccountManagerTabsView
            style={styles.tabView}
            selectedTypeName={showItem?.accountType}
            ref={accountTypeRef}
          />
          <Text style={styles.subTitle}>账号名称</Text>
          <MKSZ628CourseAccountManagerModalTextInput
            style={styles.textInput}
            ref={accountNameRef}
            defaultValue={isModify && showItem.accountName}
          />
          <Text style={styles.subTitle}>账号</Text>
          <MKSZ628CourseAccountManagerModalTextInput
            style={styles.textInput}
            ref={accountRef}
            defaultValue={isModify && showItem.account}
          />
          <Text style={styles.subTitle}>密码</Text>
          <MKSZ628CourseAccountManagerModalTextInput
            style={styles.textInput}
            ref={passwordRef}
            defaultValue={isModify && showItem.password}
          />
          <TouchableOpacity
            style={styles.saveButton}
            activeOpacity={0.5}
            onPress={onSaveProgress}
          >
            <Text style={styles.saveText}>保 存</Text>
          </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
      </Modal>
  )
})

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000060',
  },
  container: {
    width: '80%',
    borderRadius: 12,
    backgroundColor: 'white',
    padding: 14,
  },
  titleView: {
    width: '100%',
    fontSize: 20,
    backgroundColor: 'white',
    height: 48,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#000060',
    fontWeight: 'bold',
  },
  closeButton: {
    width: 30,
    height: 30,
    position: 'absolute',
    right: 14,
    top: 16,
  },
  closeImage: {
    width: '100%',
    height: '100%',
  },
  subTitle: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'left',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    marginTop: 12,
  },
  tabView: {
    marginTop: 8,
  },
  textInput: {
    marginTop: 8,
  },
  saveButton: {
    marginTop: 16,
    backgroundColor: 'blue',
    borderRadius: 12,
    height: 40,
    marginBottom: 10,
  },
  saveText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    height: '100%',
  },
})
