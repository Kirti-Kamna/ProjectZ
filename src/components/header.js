import * as React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

// import Icon from 'react-native-vector-icons/Ionicons';

const CustomHeader = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <View style={{flex: 1}}>{<Icon name="md-menu" size={30} />}</View> */}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
  iconContainer: {
    marginTop: 16,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  footerTitle: {
    fontSize: 18,
    textAlign: 'center',
    color: 'grey',
  },
  footerText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'grey',
  },
});

export default CustomHeader;
