import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStack, ProfileStack } from '../../stacks';

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="home"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          title: 'Home',
          headerShown: false,
        }} />
      <Tab.Screen
        name="profile"
        component={ProfileStack}
        options={{
          tabBarLabel: 'Profile',
          title: 'Profile',
          headerShown: false,
        }} />
    </Tab.Navigator>
  );
}