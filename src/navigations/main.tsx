import React from "react";
import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import { Icon } from "react-native-elements";

// AuthLoading screen
import AuthLoadingScreen from "../screens/AuthLoading";

// Onboarding screen
import OnboardingScreen from "../screens/Starter";

// Auth screen
import LoginScreen from "../screens/Login";
import RegisterScreen from "../screens/Register";

// App screen
import HomeScreen from "../screens/Home";
import SettingsScreen from "../screens/Settings";

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    headerMode: "none",
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

const AppStack = createBottomTabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: () => ({
      tabBarIcon: ({ tintColor }: { tintColor: string }) => (
        <Icon type='ionicon' name='ios-home' color={tintColor} size={25} />
      )
    })
  },
  Settings: {
    screen: SettingsStack,
    navigationOptions: () => ({
      tabBarIcon: ({ tintColor }: { tintColor: string }) => (
        <Icon type='ionicon' name='ios-cog' color={tintColor} size={25} />
      )
    })
  }
}, {
  initialRouteName: 'Home'
});

const AuthStack = createStackNavigator(
  {
    Register: {
      screen: RegisterScreen,
      navigationOptions: () => ({
        header: null
      })
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: () => ({
        header: null
      })
    }
  },
  {
    initialRouteName: "Login"
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      Onboarding: OnboardingScreen,
      Auth: AuthStack,
      App: AppStack
    },
    {
      initialRouteName: "App"
    }
  )
);
