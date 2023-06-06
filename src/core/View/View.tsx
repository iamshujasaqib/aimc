import React from 'react';
import {StyleSheet, View as CoreView, ViewProps} from 'react-native';
import {Colors} from '../../constants/colors';
import {SafeAreaView} from '../SafeAreaView';

export interface MyViewProps extends ViewProps {
  flex?: boolean;
  row?: boolean;
  border?: boolean;
  transparent?: boolean;
  fullWidth?: boolean;
  safeArea?: boolean;
}

export const View = (props: MyViewProps) => {
  const {
    children,
    flex = false,
    row = false,
    border = false,
    transparent = false,
    fullWidth = false,
    safeArea = false,
    style,
    ...rest
  } = props;
  return (
    <CoreView
      {...rest}
      style={[
        styles.main,
        flex && styles.flex,
        row && styles.row,
        border && styles.border,
        transparent && styles.transparent,
        fullWidth && styles.fullWidth,
        style,
      ]}>
      {safeArea && <SafeAreaView />}
      {children}
    </CoreView>
  );
};

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flex: {
    flex: 1,
  },
  border: {
    borderWidth: 1,
    borderColor: Colors.black,
  },
  transparent: {
    backgroundColor: 'transparent',
  },
  fullWidth: {
    width: '100%',
  },
});
