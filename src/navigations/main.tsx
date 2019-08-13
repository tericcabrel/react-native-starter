import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

// AuthLoading screen
import AuthLoadingScreen from "../screens/AuthLoading";

// Onboarding screen
import OnboardingScreen from "../screens/Starter";

// Auth screen
import LoginScreen from "../screens/Login";
import RegisterScreen from "../screens/Register";

// App screen
import HomeScreen from "../screens/Home";

const AppStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    headerMode: "none",
    initialRouteName: "Home"
  }
);

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
      initialRouteName: "AuthLoading"
    }
  )
);
