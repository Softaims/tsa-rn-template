import React, { useEffect, useState, useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthStack } from './stacks';
import * as SplashScreen from 'expo-splash-screen';
import useAuthStore from '../store/useAuthStore';
import useThemeStore from '../store/useThemeStore';
import { StatusBar, View } from 'react-native';
import { MainTabs } from './tabs';

/**
 * Application Navigation Flow
 * 
 * This component manages the entire navigation flow of the app:
 * 
 * 1. App Initialization:
 *    - Keeps splash screen visible during initialization
 *    - Loads custom fonts
 *    - Checks for existing auth token
 *    - Fetches user details if token exists
 * 
 * 2. Authentication Flow:
 *    - Shows AuthStack if no user is authenticated
 *    - Shows MainTabs if user is authenticated
 * 
 */

SplashScreen.preventAutoHideAsync(); // keep native splash visible

export default function Navigator() {
  const theme = useThemeStore((state) => state.theme);
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      try {
        // const token = await retrieveTokenSecurely();
        // if (token) {
          setTimeout(() => {
            setUser({
              id: '1',
              firstName: 'John', 
              email: 'john@example.com'
            });
          }, 3000);
        // }
      } catch (e) {
        // await removeTokenSecurely();
      } finally {
        setAppIsReady(true);
      }
    };

    prepare();
  }, []);

  // Cleanup when component unmounts
  useEffect(()=>{
    return () => {
      
    }
  }, []);

  // Hide splash screen when fonts are loaded and app is ready
  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [ appIsReady]);

  // Show loading screen while fonts and app are initializing
  if (!appIsReady) {
    return <View style={{ flex: 1, backgroundColor: theme.white }} />;
  }

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      {
        user ? (
          <>
            <StatusBar barStyle={'dark-content'} backgroundColor="transparent" translucent />
            <View style={{ flex: 1, backgroundColor: theme.white }}>
              <MainTabs />
            </View>
          </>
        ) : (
          <>
            <StatusBar barStyle={'light-content'} backgroundColor="transparent" translucent />
            <AuthStack />
          </>
        )
      }
    </NavigationContainer>
  );
}
