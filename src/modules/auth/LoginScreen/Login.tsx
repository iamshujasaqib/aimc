import React from 'react';
import {StyleSheet} from 'react-native';
import {Logo} from 'src/components/Logo';
import {Colors} from 'src/constants/colors';
import {Screens} from 'src/constants/screens';
import {Button} from 'src/core/Button';
import {Margin} from 'src/core/Margin';
import {TabContent} from 'src/core/TabContent';
import {Text} from 'src/core/Text';
import {TextInput} from 'src/core/TextInput';
import {View} from 'src/core/View';

interface LoginScreenProps {
  navigation: any;
}

export const Login = (props: LoginScreenProps) => {
  const {navigation} = props;
  return (
    <TabContent tabStyle={styles.main} safeArea flex>
      <Margin top={40} />
      <Logo />
      <View style={{width: '90%', alignItems: 'center', marginTop: '30%'}}>
        <TextInput placeholder="Email" autoCapitalize="none" />
        <TextInput placeholder="Password" secureTextEntry />
        <Margin top={20} />
        <Button title="Login" />
        <View style={{alignSelf: 'flex-end', marginTop: 20}}>
          <Text style={styles.smallText}>
            Not a user yet?{' '}
            <Text
              onPress={() => navigation.navigate(Screens.auth.modules.register)}
              style={styles.registerText}>
              Register
            </Text>
          </Text>
        </View>
      </View>
    </TabContent>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: Colors.boneWhite,
  },
  smallText: {
    fontSize: 13,
    color: Colors.grey,
  },
  registerText: {
    textDecorationLine: 'underline',
    fontWeight: '600',
    color: Colors.onyx,
  },
});
