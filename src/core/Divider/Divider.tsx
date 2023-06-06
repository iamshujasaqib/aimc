import React from 'react';
import {StyleSheet} from 'react-native';
import {Colors} from 'src/constants/colors';
import {View} from '../View';

export const Divider = () => {
  return <View style={styles.main} />;
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: 1,
    backgroundColor: Colors.grey,
    marginVertical: 5,
  },
});
