import AsyncStorage from '@react-native-async-storage/async-storage'

export const SAVEKEY = 'ACCOUNTLIST'

export const save = async (key, value) => {
  return await AsyncStorage.setItem(key, value)
}

export const load = async (key) => {
  return await AsyncStorage.getItem(key)
}

export const remove = async (key) => {
  return await AsyncStorage.removeItem(key)
}
