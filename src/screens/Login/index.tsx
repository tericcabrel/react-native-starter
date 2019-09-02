import React from "react";
import { View } from "react-native";
import { Button, Text, Icon } from "react-native-elements";
import { connect } from "react-redux";

import { fetchCountries } from "../../store/app/actions";
import translate from "../../utils/i18n";

import { styles } from "../../styles/login";
import colors from "../../styles/colors";
import Input from "../../components/Input";

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
        <View>
          <Icon
            type='ionicon'
            name='logo-playstation'
            size={96}
            color={colors.black}
            containerStyle={{
              height: 100,
              width: 100,
              backgroundColor: colors.white,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          />
        </View>
        <View style={styles.content}>
          {/* <Button
            icon={<Icon name="arrow-right" size={16} color="white" type="font-awesome"  />}
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
          />*/}
          <View style={{ marginTop: 40 }}>
            <Text style={{fontSize: 32, fontWeight: "bold", marginBottom: 15}}>Welcome Back!</Text>
            <Text style={{fontSize: 15 }}>Sign in to continue</Text>
          </View>
          <View style={styles.formContent}>
            <Input
              placeholder='Email'
              leftIcon={
                <Icon
                  type="font-awesome"
                  name='envelope'
                  size={24}
                  color='black'
                />
              }
             value=""/>
            <Input
              placeholder='Password'
              secureText={true}
              value=""
              leftIcon={
                <Icon
                  type="font-awesome"
                  name='lock'
                  size={24}
                  color='black'
                />
              }
              rightIcon={
                <Icon
                  type="font-awesome"
                  name='eye-slash'
                  size={24}
                  color='black'
                />
              }
            />
            <Text style={{textAlign: "right"}}>Forgot password?</Text>

            <Button
              title="SIGN IN"
              containerStyle={{ width: "100%", marginTop: 40, marginBottom: 15 }}
              buttonStyle={{ backgroundColor: colors.black }}
              onPress={() => {
                this.props.navigation.navigate("App");
              }}
            />
          </View>
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
