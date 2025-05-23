import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import useThemeStore from '../../store/useThemeStore';
import { font_size, ThemeTypes } from '../../constants';

export function SplashScreen() {
  const theme = useThemeStore(state => state.theme);
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/images/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Splash Screen</Text>
    </View>
  );
}

const createStyles = (theme: ThemeTypes) => StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100
  },
  title: {
    fontSize: font_size.XXL,
    fontWeight: 'bold',
    color: theme.primary
  }
});