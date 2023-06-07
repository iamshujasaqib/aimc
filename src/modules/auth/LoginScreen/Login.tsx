import React from 'react';
import {StyleSheet} from 'react-native';
import {AuthAPI} from 'src/business/api/auth';
import {UserAPI} from 'src/business/api/user';
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

  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [loader, setLoader] = React.useState<boolean>(false);
  const [error, setError] = React.useState<boolean>(false);

  async function onPress() {
    setError(false);
    const isValid = isValidData({email, password});
    setError(!isValid);
    if (!isValid) return;
    setLoader(true);
    const res = await AuthAPI.login({email, password}).finally(() =>
      setLoader(false),
    );
    console.log(res);
  }

  function isValidData(data: {email: string; password: string}) {
    if (data.email.length < 5) {
      return false;
    }
    if (data.password.length < 5) {
      return false;
    }
    return true;
  }

  return (
    <TabContent tabStyle={styles.main} safeArea flex>
      <Margin top={40} />
      <Logo />
      <View style={{width: '90%', alignItems: 'center', marginTop: '30%'}}>
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          onChangeText={setEmail}
          value={email}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          onChangeText={setPassword}
          value={password}
        />
        <Margin top={20} />
        {error && (
          <Text style={{fontWeight: '500', color: Colors.danger}}>
            Given data is invalid
          </Text>
        )}
        <Margin top={20} />

        <Button title="Login" onPress={onPress} loader={loader} />
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
