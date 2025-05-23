import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../../../screens';
import { AppRoutes } from '../../../types';

const Stack = createStackNavigator<AppRoutes>();

export function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerTitleAlign: 'center'
    }}>
      <Stack.Screen
        name="home-screen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}