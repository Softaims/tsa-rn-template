import { createStackNavigator } from '@react-navigation/stack';
import { SplashScreen } from '../../../screens';
import { AppRoutes } from '../../../types';

const Stack = createStackNavigator<AppRoutes>();

export function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="splash-screen"
        component={SplashScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}