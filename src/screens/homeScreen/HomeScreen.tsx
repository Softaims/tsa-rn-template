import { View, Text, StyleSheet } from 'react-native'
import React, { useMemo } from 'react'
import useThemeStore from '../../store/useThemeStore'

export default function HomeScreen() {
  const theme = useThemeStore((state) => state.theme)

  const styles = useMemo(() => createStyles(theme), [theme])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>HomeScreen</Text>
    </View>
  )
}

const createStyles = (theme: { [key: string]: any }) => StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.background,
  },
  text: {
    fontSize: 32,
    color: 'red',
  },
})
