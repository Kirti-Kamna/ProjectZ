import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {Main} from './navigation';
import {Auth} from './navigation';

import AsyncStorage, {
  useAsyncStorage,
} from '@react-native-async-storage/async-storage';

export const AuthLoading = () => {
  const [isLoggedIn, setLoggedIn] = useState(getUserInfo.include());

  // const []

  useEffect(() => {
    getData();
  }, []);

  // console.log('isLoggedIn', isLoggedIn);
  const getData = () => {
    const getUserInfo = AsyncStorage.getItem('UserData');
    console.log('getUserInfo', getUserInfo);

    // if (getUserInfo != null) {
    //   console.log('getUserInfoFinal', getUserInfo);
    //   return <Auth />;
    // } else <Main />;

    // if (getUserInfo != null) {
    //   setLoggedIn(true);
    // }
    // getUserInfo != null setLoggedIn(true) : null;
    // const getUserInfo2 = AsyncStorage.getItem(userValue);
    // try {
    //   AsyncStorage.getItem('UserData').then(value => {
    //     if (value != null) {
    //       //  Alert.alert('Logged In Successfully!');

    //       setLoggedIn(true);
    //     }
    //   });
    // } catch (error) {

    // }
  };

  return isLoggedIn ? <Auth /> : <Main />;
};
