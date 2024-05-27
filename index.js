/**
 * @format
 */

import {AppRegistry, UIManager, Platform} from 'react-native';
//import App from './App';
import {name as appName} from './app.json';

import MKSZ628App from './mksz628-study/MKSZ628App'

// 安卓手动开启布局动画。
if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    console.log('enable ...');
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

AppRegistry.registerComponent(appName, () => MKSZ628App);
