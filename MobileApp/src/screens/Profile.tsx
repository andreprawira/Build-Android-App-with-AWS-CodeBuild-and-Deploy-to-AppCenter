import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text> Profile </Text>
    </View>
  );
};

export {ProfileScreen};

const styles = StyleSheet.create({
  container: {flex: 1, paddingTop: 12, paddingHorizontal: 10},
});
