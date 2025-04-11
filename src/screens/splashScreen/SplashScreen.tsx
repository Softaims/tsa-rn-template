import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  useEffect(() => {
    const hideSplashScreen = async () => {
      await SplashScreen.preventAutoHideAsync();

      // //
      // 💡 Replace setTimeout with Api calls
      // //
      setTimeout(async () => {
        await SplashScreen.hideAsync();
      }, 5000);
    };

    hideSplashScreen();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>App Name</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000',
  },
});
