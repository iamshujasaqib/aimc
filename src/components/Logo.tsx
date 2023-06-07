import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'src/core/Text';

interface LogoProps {
  text?: string;
}

export const Logo = (props: LogoProps) => {
  const {text = 'aimc'} = props;
  return <Text style={styles.main}>{text.toUpperCase()}</Text>;
};

const styles = StyleSheet.create({
  main: {
    fontWeight: '700',
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 10,
  },
});
