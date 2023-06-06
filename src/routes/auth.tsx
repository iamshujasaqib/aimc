import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screens} from 'src/constants/screens';
import {Login} from 'src/modules/auth/LoginScreen';
import {Register} from 'src/modules/auth/RegisterScreen';

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={Screens.auth.modules.login} component={Login} />
      <Stack.Screen name={Screens.auth.modules.register} component={Register} />
    </Stack.Navigator>
  );
};
