import React, { useRef } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Animated
} from 'react-native';

export default () => {

  const marginLeft = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.root}>
      <Button title='按钮' onPress={() => {
        // Animated.timing(marginLeft, {
        //     toValue: 300,
        //     duration: 500,
        //     useNativeDriver: false,
        // }).start();

        // velocity：初始速度。
        // deceleration：衰减系数，默认 0.997。越小，动画值衰减越快。
        Animated.decay(marginLeft, {
          velocity: 1,
          deceleration: 0.990,
          useNativeDriver: false,
        }).start();
      }} />

      <Animated.View
        style={[
          styles.view,
          {marginLeft: marginLeft}
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  view: {
    width: 100,
    height: 100,
    backgroundColor: '#3050ff',
    marginTop: 20,
  },
});
