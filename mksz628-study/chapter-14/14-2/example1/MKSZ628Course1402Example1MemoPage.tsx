import React, { useState } from 'react'
import { Button, View } from 'react-native'
import ConsumeList from './ConsumeList.tsx'

export default () => {

  const [info,setInfo] = useState<UserInfo>({
    avatar: '',
    name: '',
    description: ''
  })

  return (
    <View style={{ width: '100%' }}>
      <ConsumeList />
    </View>
  )
}
