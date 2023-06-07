import React, {useState} from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput as TI,
  TextInputProps,
  ViewStyle,
} from 'react-native';
import {Colors} from 'src/constants/colors';
import {ComponentStyles} from 'src/constants/style';
import {View} from '../View';

interface MyTIProps extends TextInputProps {
  mainContainerStyle?: StyleProp<ViewStyle>;
  iconContainerStyle?: StyleProp<ViewStyle>;
  singleBorder?: boolean;
  rounded?: boolean;
  title?: string;
}

export const TextInput = (props: MyTIProps) => {
  const [active, setActive] = useState(false);
  const color = active ? Colors.red_1 : Colors.grey;
  const {
    style,
    mainContainerStyle,
    iconContainerStyle,
    singleBorder,
    rounded,
    ...rest
  } = props;
  const placeholderTextColor = singleBorder ? Colors.black : Colors.grey;

  return (
    <View
      row
      style={[
        styles.main,
        singleBorder && styles.singleBorderMain,
        rounded && styles.roundedView,
        {borderColor: color},
        mainContainerStyle,
      ]}>
      <TI
        onBlur={() => setActive(false)}
        onFocus={() => setActive(true)}
        placeholderTextColor={placeholderTextColor}
        {...rest}
        style={[styles.ti, styles.noIconTi, style]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    height: ComponentStyles.height,
    width: ComponentStyles.width,
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: ComponentStyles.borderRadius,
    borderWidth: 1,
    borderColor: Colors.red_1,
  },
  ti: {
    height: '100%',
    width: '85%',
    padding: 10,
    borderColor: Colors.red_1,
    color: 'black',
  },
  iconContainer: {
    borderRadius: ComponentStyles.borderRadius,
    width: '15%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  noIconTi: {
    width: '100%',
  },
  singleBorderMain: {
    borderTopWidth: 0,
    borderBottomWidth: 2,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    backgroundColor: 'transparent',
  },
  singleBorderMainIcon: {
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    backgroundColor: 'transparent',
    borderColor: Colors.red_1,
  },
  roundedView: {
    backgroundColor: 'transparent',
    borderColor: Colors.red_1,
    borderRadius: 30,
    borderWidth: 1.5,
  },
  roundedViewIcon: {
    backgroundColor: 'transparent',
    borderColor: Colors.red_1,
    borderRadius: 30,
  },
  divider: {
    height: '50%',
    width: 2,
    alignSelf: 'center',
  },
  titleContainer: {
    backgroundColor: 'transparent',
    borderRadius: 3,
    minWidth: 10,
    position: 'absolute',
    left: 20,
  },
});
