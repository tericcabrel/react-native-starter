import React from "react";
import {SafeAreaView, TouchableOpacity, View} from "react-native";
import {Button, Header, Icon, Text} from "react-native-elements";

import translate from "../../utils/i18n";

import { styles } from "../../styles/register";
import Input from "../../components/Input";
import colors from "../../styles/colors";

class Register extends React.Component<any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={{ flex: 1}}>
        <View style={styles.iconBackContainer}>
          <Button
            icon={
              <Icon
                type="ionicon"
                name="ios-arrow-back"
                size={32}
                color="#000"
              />
            }
            buttonStyle={{ borderColor: '#fff', width: 50 }}
            type="outline"
            onPress={() => {
              this.props.navigation.navigate("Login");
            }}
          />
        </View>
        <View style={styles.content}>
          <View style={ styles.headerTextContainer }>
            <Text style={styles.headerMainText}>Almost there !</Text>
            <Text style={styles.headerSecondaryText}>We are excited to see you here..!</Text>
          </View>
          <View style={styles.formContent}>
            <Input
              placeholder='Username'
              leftIcon={
                <Icon
                  type="ionicon"
                  name='ios-person'
                  size={16}
                  color='black'
                />
              }
              value=""
              containerStyle={styles.inputContainerStyle}
            />
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
              containerStyle={styles.inputContainerStyle}
            />
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
              containerStyle={styles.inputContainerStyle}
            />
            <Input
              placeholder='Confirm password'
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
              containerStyle={styles.inputContainerStyle}
            />

            <Button
              title="SIGN UP"
              containerStyle={styles.signUpButtonContainer}
              buttonStyle={{ backgroundColor: colors.black, }}
              onPress={() => {
                this.props.navigation.navigate("App");
              }}
            />
          </View>
          <View style={styles.policyContainer}>
            <Text>By signing up you agree our </Text>
            <TouchableOpacity onPress={ () => { }}>
              <Text style={styles.policyTextLink}>Terms & condition </Text>
            </TouchableOpacity>
            <Text>and </Text>
          </View>
          <View>
            <TouchableOpacity onPress={ () => { }}>
              <Text style={styles.policyTextLink}>Privacy Policy</Text>
            </TouchableOpacity>
          </View>
        </View>
        </SafeAreaView>
      </View>
    );
  }
}

export default Register;
