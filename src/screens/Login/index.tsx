import React from "react";
import { TouchableOpacity, View } from "react-native";
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
              containerStyle={styles.logoContainer}
            />
          </View>
          <View style={styles.content}>
            <View style={ styles.headerTextContainer }>
              <Text style={styles.headerMainText}>Welcome Back!</Text>
              <Text style={styles.headerSecondaryText}>Sign in to continue</Text>
            </View>
            <View style={styles.formContent}>
              <Input
                placeholder='Email'
                leftIcon={
                  <Icon
                    type="font-awesome"
                    name='envelope'
                    size={16}
                    color='black'
                  />
                }
                value=""
                containerStyle={{ borderColor: 'red' }}/>
              <Input
                placeholder='Password'
                secureText={true}
                value=""
                leftIcon={
                  <Icon
                    type="font-awesome"
                    name='lock'
                    size={20}
                    color='black'
                  />
                }
                rightIcon={
                  <Icon
                    type="font-awesome"
                    name='eye-slash'
                    size={16}
                    color='black'
                  />
                }
              />
              <Text style={styles.forgotPasswordText}>Forgot password?</Text>

              <Button
                title="SIGN IN"
                containerStyle={styles.signInButtonContainer}
                buttonStyle={{ backgroundColor: colors.black }}
                onPress={() => {
                  this.props.navigation.navigate("App");
                }}
              />
            </View>
            <View>
              <Text style={styles.formExtraText}>or login with</Text>
              <View style={styles.socialLoginContainer}>
                <View style={styles.socialLoginContent}>
                  <Button
                    type="outline"
                    icon={
                      <Icon
                        type="evilicon"
                        name='sc-facebook'
                        size={32}
                        color='#1877f2'
                      />
                    }
                    buttonStyle={styles.socialButtonContainer}
                  />
                  <Button
                    type="outline"
                    icon={
                      <Icon
                        type="font-awesome"
                        name='google'
                        size={24}
                        color='#ef4138'
                      />
                    }
                    buttonStyle={styles.socialButtonContainer}
                  />
                  <Button
                    type="outline"
                    icon={
                      <Icon
                        type="font-awesome"
                        name='twitter'
                        size={28}
                        color='#26a4ef'
                      />
                    }
                    buttonStyle={styles.socialButtonContainer}
                  />
                </View>
              </View>
              <View style={styles.signUpContent}>
                <Text style={styles.signUpText}>Don't have an account? </Text>
                <TouchableOpacity
                  onPress={ () => {
                    this.props.navigation.navigate("Register");
                  }}
                >
                  <Text style={styles.signUpLink}> SIGN UP!</Text>
                </TouchableOpacity>
              </View>
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
