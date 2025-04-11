import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function AuthScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>AuthScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
    color: 'red',
  },
})