import {useNavigation} from '@react-navigation/native';
import React, {memo} from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors as COLORS} from 'src/constants/colors';
import {Margin} from 'src/core/Margin';
import {Text} from 'src/core/Text';
import {View} from 'src/core/View';

interface ScreenHeaderProps {
  title?: string;
  onBackPress?(): void;
  noBackButton?: boolean;
}

export const ScreenHeader = memo((props: ScreenHeaderProps) => {
  const {title, onBackPress, noBackButton = false} = props;
  const navigation = useNavigation();

  function onArrowBack() {
    if (!onBackPress) {
      navigation.goBack();
    } else {
      onBackPress();
    }
  }

  return (
    <View style={styles.main}>
      <SafeAreaView />
      <View style={styles.inner}>
        {!noBackButton && (
          <>
            <TouchableOpacity disabled={noBackButton} onPress={onArrowBack}>
              <Text style={{color: COLORS.black, fontSize: 30}}>X</Text>
            </TouchableOpacity>
            <Margin right={20} />
          </>
        )}
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  main: {
    width: '100%',
    backgroundColor: 'transparent',
  },
  inner: {
    width: '95%',
    alignSelf: 'center',
    height: 40,
    alignItems: 'center',
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  title: {
    color: COLORS.black,
    fontSize: 30,
    fontWeight: 'bold',
  },
});
