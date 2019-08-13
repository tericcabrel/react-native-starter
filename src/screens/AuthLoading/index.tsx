import React from "react";
import { View, StatusBar, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import { USER_STORAGE_KEY } from "../../utils/constants";

import { styles } from "../../styles/splash";

class AuthLoading extends React.Component<any> {
  constructor(props: any) {
    super(props);
  }

  async componentDidMount() {
    const userToken = await AsyncStorage.getItem(USER_STORAGE_KEY);
    this.props.navigation.navigate(userToken ? "App" : "Onboarding");
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

export default AuthLoading;
