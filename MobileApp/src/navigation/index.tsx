import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import BottomTabs from './tabs';
import {ProtectedStackNavigator} from './protected';
import {AuthContext} from '../context';
import {GuestStackNavigator} from './guest';

function RootNavigator() {
  const [auth, setAuth] = React.useState(false);
  const changeAuth = (a: boolean) => {
    setAuth(a);
  };
  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth: changeAuth,
      }}>
      <NavigationContainer>
        {auth ? <ProtectedStackNavigator /> : <GuestStackNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default RootNavigator;
