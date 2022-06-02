import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ROUTES} from 'src/constants/routes';
import {
  Home,
  Welcome,
  LaunchDetails,
  ErrorScreen,
  GestureAnimation,
} from 'src/screens';

const RootStack = createStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerBackTitle: '',
        }}>
        <RootStack.Screen
          name={ROUTES.WELCOME}
          component={Welcome}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name={ROUTES.HOME}
          component={Home}
          options={{headerTitle: 'Missions List'}}
        />
        <RootStack.Screen
          name={ROUTES.DETAILS}
          component={LaunchDetails}
          options={{headerTitle: 'Mission Details'}}
        />
        <RootStack.Screen name={ROUTES.ERROR} component={ErrorScreen} />
        <RootStack.Screen
          name={ROUTES.GESTURE_ANIMATION}
          component={GestureAnimation}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
