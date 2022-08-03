import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {AuthContext} from '../context';

const ReportScreen = () => {
  const authContext = React.useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text>Report</Text>
      <Button
        title="Logout"
        onPress={() => {
          authContext.setAuth(false);
        }}
      />
    </View>
  );
};

export {ReportScreen};

const styles = StyleSheet.create({
  container: {flex: 1, paddingTop: 12, paddingHorizontal: 10},
});
