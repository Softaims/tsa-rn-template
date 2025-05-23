import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useThemeStore from '../../store/useThemeStore';
import { font_size, ThemeTypes } from '../../constants';

export function HomeScreen() {
  const theme = useThemeStore(state => state.theme);
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
    </View>
  );
}

const createStyles = (theme: ThemeTypes) => StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
    fontSize:font_size.XXL,
    fontWeight:'bold',
    color:theme.primary
  }
});