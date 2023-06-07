import React from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {Screens} from 'src/constants/screens';
import {Margin} from 'src/core/Margin';
import {HomeStack} from './home';
import {Colors} from 'src/constants/colors';

const BottomNav = createBottomTabNavigator();

interface TabBarOptionsProps {
  title: string;
  iconName: string;
}

export const Tabs = () => {
  const screenOptions: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarLabelStyle: {
      fontWeight: 'bold',
    },
    tabBarActiveTintColor: Colors.red_1,
    tabBarInactiveTintColor: Colors.grey,
    tabBarStyle: {
      backgroundColor: Colors.white,
      alignItems: 'center',
      justifyContent: 'center',
    },
  };

  function tabBarOptions({title, iconName}: TabBarOptionsProps) {
    const options: BottomTabNavigationOptions = {
      title: title,
      tabBarIcon: ({color, focused}: any) => {
        return (
          <>
            <Margin top={focused ? 10 : 3} />
            {/* <Icon name={iconName} color={color} /> */}
          </>
        );
      },
    };

    return options;
  }

  return (
    <BottomNav.Navigator screenOptions={screenOptions}>
      <BottomNav.Screen
        name={Screens.home.modules.main.navigator}
        component={HomeStack}
        options={tabBarOptions({title: 'Home', iconName: 'home-outline'})}
      />
    </BottomNav.Navigator>
  );
};
