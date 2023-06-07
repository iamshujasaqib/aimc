import React, {useMemo, useState} from 'react';
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
import ImageCropPicker from 'react-native-image-crop-picker';
import {ImageAPI} from 'src/business/api/image';
import {Avatar} from 'src/components/Avatar';
import {MEDIA_URL} from 'src/constants/url';

interface Props {
  navigation: any;
}

export const AddStudentScreen = (props: Props) => {
  const {navigation} = props;
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const [loader, setLoader] = useState<boolean>(false);
  const [imageLoader, setImageLoader] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [imageResponse, setImageResponse]: any = useState(null);
  const [localImg, setLocalImg]: any = useState(null);

  const uri = useMemo(
    () =>
      localImg
        ? {uri: localImg}
        : imageResponse
        ? {uri: imageResponse}
        : undefined,
    [localImg, imageResponse],
  );

  async function onPress() {
    setError(false);
    const data: StudentResponse = {
      firstName,
      lastName,
      email,
      avatar: imageResponse ? imageResponse : null,
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

  async function onImagePick() {
    let result: any = await ImageCropPicker.openPicker({
      compressImageQuality: 0.5,
    });

    setImageLoader(true);
    const res: any = await ImageAPI.uploadImage(result).finally(() =>
      setImageLoader(false),
    );

    if (res && res.uri) {
      setImageResponse(res.uri);
      setLocalImg(MEDIA_URL + res.uri);
    }
  }

  return (
    <TabContent flex>
      <ScreenHeader title="Add Student" />
      <Margin top={20} />
      <View style={{width: '90%'}}>
        <Avatar
          size={100}
          onPress={onImagePick}
          loader={imageLoader}
          source={uri}
        />
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
