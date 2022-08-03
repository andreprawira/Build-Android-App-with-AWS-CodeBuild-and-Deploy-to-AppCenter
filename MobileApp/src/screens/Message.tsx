import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MessageScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Message</Text>
    </View>
  );
};

export {MessageScreen};

const styles = StyleSheet.create({
  container: {flex: 1, paddingTop: 12, paddingHorizontal: 10},
});
