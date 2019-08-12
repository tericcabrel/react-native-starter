import React from "react";
import { View } from "react-native";
import { Header, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { connect } from "react-redux";

import { fetchCountries } from "../../store/app/actions";
import translate from "../../utils/i18n";

import { styles } from "../../styles/login";

class Login extends React.Component<any> {
  constructor(props: any) {
    super(props);
  }

  async fetchCountries() {
    await this.props.fetchCountries();
    console.log("Countries => ", this.props.countries);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          leftComponent={<Icon name="lock" size={16} color="white" />}
          centerComponent={{
            text: translate("login.title"),
            style: { color: "#fff" }
          }}
        />
        <View style={styles.content}>
          <Button
            icon={<Icon name="arrow-right" size={16} color="white" />}
            title={translate("login.btn_register")}
            containerStyle={{ width: "100%", marginBottom: 15 }}
            onPress={() => {
              this.props.navigation.navigate("Register");
            }}
          />
          <Button
            title={translate("login.btn_home")}
            containerStyle={{ width: "100%", marginBottom: 15 }}
            onPress={() => {
              this.props.navigation.navigate("App");
            }}
          />
          <Button
            title={translate("login.btn_country")}
            containerStyle={{ width: "100%" }}
            onPress={() => {
              this.fetchCountries();
            }}
            loading={this.props.loading}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ app }: { [any: string]: any }) => ({
  countries: app.countries,
  loading: app.loading
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchCountries: () => dispatch(fetchCountries())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
