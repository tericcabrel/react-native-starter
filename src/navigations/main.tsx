import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

// Splash screen
import SplashScreen from "../screens/Splash";

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
      Splash: SplashScreen,
      Auth: AuthStack,
      App: AppStack
    },
    {
      initialRouteName: "Splash"
    }
  )
);
