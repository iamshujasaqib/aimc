import React from 'react';
import {StyleSheet, Text as MyText, TextProps} from 'react-native';
import {Colors} from 'src/constants/colors';

interface MyTextProps extends TextProps {
  bold?: boolean;
  black?: boolean;
  white?: boolean;
  alignCenter?: boolean;
}

export const Text = (props: MyTextProps) => {
  const {
    children,
    bold = false,
    black = false,
    white = false,
    alignCenter = false,
    style,
    ...rest
  } = props;
  return (
    <MyText
      {...rest}
      style={[
        styles.main,
        bold && styles.bold,
        black && styles.black,
        white && styles.white,
        alignCenter && styles.alignCenter,
        style,
      ]}>
      {children}
    </MyText>
  );
};

const styles = StyleSheet.create({
  main: {
    fontSize: 14,
    color: Colors.black,
  },
  bold: {
    fontWeight: 'bold',
  },
  black: {
    color: Colors.black,
  },
  white: {
    color: Colors.white,
  },
  alignCenter: {
    textAlign: 'center',
  },
});
