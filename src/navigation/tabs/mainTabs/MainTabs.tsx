import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStack } from "../../stacks";
import { AppRoutes } from "../../../types";
import { HomeSelectedIcon, HomeUnselectedIcon } from "../../../../assets/icons";

const Tab = createBottomTabNavigator<AppRoutes>();

export function MainTabs() {

  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        return {
          tabBarIcon: ({ color, size, focused }) => {
            let icon;

            if (route.name === "home") {
              icon = focused ? <HomeSelectedIcon /> : <HomeUnselectedIcon />;
            }
            return icon;
          },
        };
      }}>
      <Tab.Screen
        name="home"
        component={HomeStack}
        options={{
          tabBarLabel: "Home",
          title: "Home",
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
