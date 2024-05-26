import React, { useState } from 'react'
import { Button, View } from 'react-native'
import PageView from './PageView'

import { ThemeContext} from './ThemeContext'

export default () => {

  const [theme, setTheme] = useState('dark')

  return (
    <ThemeContext.Provider value={theme}>
      <Button title={'切  换'} onPress={() => {
        setTheme(state => {
          if (theme === 'dark') {
            return 'light'
          } else {
            return 'dark'
          }
        })
      }}
      />
      <View style={{ width: '100%'}}>
        <PageView />
      </View>
    </ThemeContext.Provider>
  )
}
