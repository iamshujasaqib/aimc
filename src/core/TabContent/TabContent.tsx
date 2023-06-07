import React, {memo, ReactNode} from 'react';
import {ScrollView, StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {MyViewProps, View} from '../View';

interface TabContentProps extends MyViewProps {
  children?: ReactNode | undefined;
  tabStyle?: StyleProp<ViewStyle>;
}

export const TabContent = memo((props: TabContentProps) => {
  const {children, tabStyle, ...left} = props;
  const {style, transparent = false, ...rest} = left;
  return (
    <ScrollView style={[styles.main, tabStyle]}>
      <View {...rest} transparent={transparent} style={[styles.main, style]}>
        {children}
      </View>
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  main: {},
});
