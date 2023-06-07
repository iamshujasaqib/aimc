import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screens} from 'src/constants/screens';
import {HomeScreen} from 'src/modules/home/HomeScreen';
import {AddStudentScreen} from 'src/modules/home/AddStudentScreen';

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={Screens.home.modules.main.modules.home}
        component={HomeScreen}
      />
      <Stack.Screen
        name={Screens.home.modules.main.modules.addStudent}
        component={AddStudentScreen}
      />
    </Stack.Navigator>
  );
};
