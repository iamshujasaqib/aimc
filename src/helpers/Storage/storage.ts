import AsyncStorage from '@react-native-async-storage/async-storage';

export const StorageKeys = {
  userId: '@userId',
};

export const store = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value.toString());
  } catch (e) {
    // saving error
  }
};

export const get = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.stringify(value);
    }
  } catch (e) {
    // error reading value
    console.log(e);
  }
};
