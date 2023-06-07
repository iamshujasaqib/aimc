import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {UserAPI} from 'src/business/api/user';
import {UserRegisterData} from 'src/business/responses/UserResponse';
import {Logo} from 'src/components/Logo';
import {Colors} from 'src/constants/colors';
import {Screens} from 'src/constants/screens';
import {Button} from 'src/core/Button';
import {Margin} from 'src/core/Margin';
import {TabContent} from 'src/core/TabContent';
import {Text} from 'src/core/Text';
import {TextInput} from 'src/core/TextInput';
import {View} from 'src/core/View';

interface RegisterScreenProps {
  navigation: any;
}

export const Register = (props: RegisterScreenProps) => {
  const {navigation} = props;

  const [username, setUsername] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [loader, setLoader] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  async function onPress() {
    setError(false);
    const data: UserRegisterData = {
      firstName,
      lastName,
      email,
      password,
      username,
    };

    const isValid = isValidData(data);
    setError(!isValid);

    if (!isValid) return;
    setLoader(true);

    const res = await UserAPI.register(data).finally(() => setLoader(false));

    console.log(res);
    if (res.id) {
      navigation.replace(Screens.home.navigator);
    }
  }

  function isValidData(data: UserRegisterData) {
    if (data.email.length < 5) {
      return false;
    }
    if (data.firstName.length < 1) {
      return false;
    }
    if (data.lastName.length < 1) {
      return false;
    }
    if (data.password.length < 5) {
      return false;
    }
    if (data.username.length < 2) {
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
          placeholder="First Name"
          autoCapitalize="none"
          value={firstName}
          onChangeText={setFirstName}
          autoCorrect={false}
        />
        <TextInput
          placeholder="Last Name"
          autoCapitalize="none"
          value={lastName}
          onChangeText={setLastName}
          autoCorrect={false}
        />
        <TextInput
          placeholder="Username"
          autoCapitalize="none"
          value={username}
          onChangeText={setUsername}
          autoCorrect={false}
        />
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
          autoCorrect={false}
        />
        <TextInput
          placeholder="Password (min 5 digits)"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          autoCorrect={false}
        />
        <Margin top={20} />
        {error && (
          <Text style={{fontWeight: '500', color: Colors.danger}}>
            Data is invalid
          </Text>
        )}
        <Margin top={20} />
        <Button title="Register" loader={loader} onPress={onPress} />
        <View style={{alignSelf: 'flex-end', marginTop: 20}}>
          <Text style={styles.smallText}>
            Already a user?{' '}
            <Text
              onPress={() => navigation.navigate(Screens.auth.modules.login)}
              style={styles.registerText}>
              Login
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
