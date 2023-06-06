import React from 'react';
import {StyleSheet, SafeAreaView as CoreView, ViewProps} from 'react-native';
import {Colors} from '../../constants/colors';

interface MyViewProps extends ViewProps {
  flex?: boolean;
  row?: boolean;
  border?: boolean;
  transparent?: boolean;
}

export const SafeAreaView = (props: MyViewProps) => {
  const {
    children,
    flex = false,
    row = false,
    border = false,
    transparent = false,
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
        style,
      ]}>
      {children}
    </CoreView>
  );
};

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  transparent: {
    backgroundColor: 'transparent',
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
});
