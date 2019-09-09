import React from "react";
import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

import AppTabs from "./tabs";

// AuthLoading screen
import AuthLoadingScreen from "../screens/AuthLoading";

// Onboarding screen
import OnboardingScreen from "../screens/Starter";

// Auth screen
import LoginScreen from "../screens/Login";
import RegisterScreen from "../screens/Register";

const AuthStack = createStackNavigator(
  {
    Register: {
      screen: RegisterScreen,
      navigationOptions: () => ({
        header: null
      })
    },
    Login: {
      screen: LoginScreen
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
      App: AppTabs
    },
    {
      initialRouteName: "Auth"
    }
  )
);
