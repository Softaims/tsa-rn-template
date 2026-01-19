import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

export function HomeScreen() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
    </View>
  );
}