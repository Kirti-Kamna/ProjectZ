import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from './login';

import HomeScreen from './homeScreen';
const MainStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
export const Auth = () => {
  console.log('hello world');
  return (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen name="Home" component={HomeScreen} />
    </AuthStack.Navigator>
  );
};

export const Main = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name="Home"
        component={HomeScreen}
        /*options={{
              headerShown: false,
            }}*/
      />
    </MainStack.Navigator>
  );
};
