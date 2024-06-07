import React, { useState } from 'react'
import { Button, View } from 'react-native'
import InfoView2 from './InfoView2'

export default () => {

  const [info,setInfo] = useState<UserInfo>({
    avatar: '',
    name: '',
    description: ''
  })

  return (
    <View style={{ width: '100%' }}>
      <Button
        title={'按钮'}
        onPress={() => {
          setInfo({
            avatar: 'https://gitlab.com/kiriha/my-public-pictures/-/raw/main/kana/logo.jpg?ref_type=heads',
            name: '神流歌奈',
            description: '各位产品经理大家好，我是个人开发者账单，我学习 RN 两年半了，我喜欢安卓、RN、Flutter。'
          })
        }}
      />
      {/*<InfoView info={info}/>*/}
      <InfoView2 info={info} />
    </View>
  )
}
