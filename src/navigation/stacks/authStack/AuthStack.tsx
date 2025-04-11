import { createStackNavigator } from '@react-navigation/stack';
import { AuthScreen } from '../../../screens';
import { Text } from 'react-native';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="auth-screen"
        component={AuthScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}