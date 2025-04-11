import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../../../screens/profileScreen/ProfileScreen';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="profile-screen"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}