import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Text} from 'react-native';
import {Colors} from 'src/constants/colors';
import {Screens} from 'src/constants/screens';
import {AuthStack} from 'src/routes/auth';

const Stack = createNativeStackNavigator();

export const MainApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={Screens.auth.navigator} component={AuthStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
