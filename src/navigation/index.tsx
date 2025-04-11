import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { AuthStack } from './stacks';
import { HomeTabs } from './tabs';
import * as SplashScreen from 'expo-splash-screen';
import useAuthStore from '../store/useAuthStore';
import { StatusBar, TextInput, View } from 'react-native';
import useThemeStore from '../store/useThemeStore';

SplashScreen.preventAutoHideAsync(); // keep native splash visible

export default function Navigator() {
  const theme = useThemeStore((state) => state.theme);
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      try {
        // // // //
        // // 💡 Replace setTimeout with Api calls and Auth token verification
        // // 💭 If verified, set user else AuthStack

        await new Promise(resolve => setTimeout(resolve, 3000));
        setUser({ id: 'xxx-xxx-xxx', name: 'Jon Doe', email: 'jondoe@mail.com' });
      } catch (e) {
        console.error(e);
      } finally {
        setAppIsReady(true);
        await SplashScreen.hideAsync();
      }
    };

    prepare();
  }, []);

  if (!appIsReady) {
    return (
      <View style={{ flex: 1, backgroundColor: theme.background }}></View>
    );
  }

  return (
    <NavigationContainer>
      <StatusBar barStyle={'dark-content'} />
      {user ? <HomeTabs /> : <AuthStack />}
    </NavigationContainer>
  )
}