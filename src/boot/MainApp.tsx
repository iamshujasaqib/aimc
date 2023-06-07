import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Screens} from 'src/constants/screens';
import {AuthStack} from 'src/routes/auth';
import {Tabs} from 'src/routes/tabs';

const Stack = createNativeStackNavigator();

export const MainApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={Screens.auth.navigator} component={AuthStack} />
        <Stack.Screen name={Screens.home.navigator} component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
