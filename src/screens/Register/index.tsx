import React from "react";
import { View } from "react-native";
import { Button, Header } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

import translate from "../../utils/i18n";

import { styles } from "../../styles/register";

class Register extends React.Component<any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          leftComponent={<Icon name="pencil" size={16} color="white" />}
          centerComponent={{
            text: translate("register.title"),
            style: { color: "#fff" }
          }}
        />
        <View style={styles.content}>
          <Button
            icon={<Icon name="arrow-left" size={16} color="white" />}
            title={translate("register.btn_login")}
            containerStyle={{ width: "100%" }}
            onPress={() => {
              this.props.navigation.navigate("Login");
            }}
          />
        </View>
      </View>
    );
  }
}

export default Register;
