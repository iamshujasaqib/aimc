import React from 'react';
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {Text} from 'core/Text';
import {ComponentStyles} from 'src/constants/style';
import {Colors} from 'src/constants/colors';
import {View} from '../View';

interface ButtonProps extends TouchableOpacityProps {
  title?: string;
  textStyle?: StyleProp<TextStyle>;
  secondary?: boolean;
  tertiary?: boolean;
  loader?: boolean;
}

export const Button = (props: ButtonProps) => {
  const {
    title,
    textStyle,
    style,
    secondary,
    tertiary,
    loader = false,
    ...rest
  } = props;
  return (
    <TouchableOpacity
      {...rest}
      style={[
        styles.main,
        secondary && styles.secondary,
        tertiary && styles.tertiary,
        style,
      ]}>
      <Text
        style={[
          styles.text,
          secondary && styles.textSecondary,
          tertiary && styles.textTertiary,
          textStyle,
        ]}>
        {title}
      </Text>
      {loader && (
        <ActivityIndicator color={Colors.red_1} style={{marginLeft: 5}} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    width: ComponentStyles.width,
    height: ComponentStyles.height,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: ComponentStyles.borderRadius,
    backgroundColor: Colors.red_1,
    marginVertical: 5,
    flexDirection: 'row',
  },
  text: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  textSecondary: {
    color: Colors.red_1,
    fontSize: 18,
    fontWeight: 'bold',
  },
  textTertiary: {
    color: Colors.red_1,
    fontSize: 18,
    fontWeight: 'bold',
  },
  secondary: {
    borderWidth: 1,
    backgroundColor: Colors.white,
    borderColor: Colors.red_1,
  },
  tertiary: {
    borderWidth: 0,
    backgroundColor: Colors.white,
  },
  iconContainer: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  absoluteIcon: {
    position: 'absolute',
    left: '2%',
  },
  relativeIcon: {
    marginRight: 5,
  },
});
