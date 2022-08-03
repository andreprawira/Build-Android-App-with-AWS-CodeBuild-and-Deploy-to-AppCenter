import * as React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {AuthContext} from '../context';

function LoginScreen() {
  const authContext = React.useContext(AuthContext);
  return (
    <View style={styles.conatiner}>
      <Text>Login Screen</Text>
      <Button
        title="Login"
        onPress={() => {
          authContext.setAuth(true);
        }}
      />
    </View>
  );
}

export {LoginScreen};

const styles = StyleSheet.create({
  conatiner: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
