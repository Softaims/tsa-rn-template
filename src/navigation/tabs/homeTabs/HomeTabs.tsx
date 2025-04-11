import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../../../screens';

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="home-screen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          title: 'Home',
          headerShown: false,
        }} />
    </Tab.Navigator>
  );
}