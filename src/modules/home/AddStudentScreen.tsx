import React, {useState} from 'react';
import {StudentAPI} from 'src/business/api/student';
import {StudentResponse} from 'src/business/responses/StudentResponse';
import {Colors} from 'src/constants/colors';
import {Button} from 'src/core/Button';
import {Margin} from 'src/core/Margin';
import {ScreenHeader} from 'src/core/ScreenHeader';
import {TabContent} from 'src/core/TabContent';
import {Text} from 'src/core/Text';
import {TextInput} from 'src/core/TextInput';
import {View} from 'src/core/View';

interface Props {
  navigation: any;
}

export const AddStudentScreen = (props: Props) => {
  const {navigation} = props;
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const [loader, setLoader] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  async function onPress() {
    setError(false);
    const data: StudentResponse = {
      firstName,
      lastName,
      email,
    };

    const isValid = isValidData(data);
    setError(!isValid);

    if (!isValid) return;
    setLoader(true);

    const res = await StudentAPI.register(data).finally(() => {
      setLoader(false);
      navigation.goBack();
    });
  }

  function isValidData(data: StudentResponse) {
    if (data.email.length < 5) {
      return false;
    }
    if (data.firstName.length < 1) {
      return false;
    }
    if (data.lastName.length < 1) {
      return false;
    }

    return true;
  }

  return (
    <TabContent flex>
      <ScreenHeader title="Add Student" />
      <Margin top={20} />
      <View style={{width: '90%'}}>
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
          placeholder="Email"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
          autoCorrect={false}
        />
        <Margin top={20} />
        {error && (
          <Text style={{fontWeight: '500', color: Colors.danger}}>
            Data is invalid
          </Text>
        )}
        <Margin top={20} />

        <Button title="Save" loader={loader} onPress={onPress} />
      </View>
    </TabContent>
  );
};
