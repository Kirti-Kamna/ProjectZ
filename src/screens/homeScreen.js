import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import CustomHeader from '../components/header';
export const HomeScreen = () => {
  return (
    <View style={{flex: 1}}>
      <CustomHeader title="Gratitude" />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>
        <Text>Welcome to the Home Screen</Text>
      </View>
    </View>
  );
};

export default HomeScreen;
