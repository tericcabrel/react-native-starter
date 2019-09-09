import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import { Icon } from "react-native-elements";

import colors from "../styles/colors";

// App screen
import HomeScreen from "../screens/Home";
import SettingsScreen from "../screens/Settings";

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    initialRouteName: "Home"
  }
);

const SettingsStack = createStackNavigator(
  {
    Settings: {
      screen: SettingsScreen
    }
  }
);

export default createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: ({ tintColor }: { tintColor: string }) => ({
        tabBarIcon: <Icon type='ionicon' name='ios-home' color={tintColor} size={25} />
      })
    },
    Setting: {
      screen : SettingsStack,
      navigationOptions: ({ tintColor }: { tintColor: string }) => ({
        tabBarIcon: <Icon type='ionicon' name='ios-cog' color={tintColor} size={25} />
      })
    }
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: colors.primary
    }
  }
);

