import { StyleSheet } from "react-native";
import colors from "./colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
    // alignItems: "center",
    // justifyContent: "center",
  },
  logoContainer: {
    height: 100,
    width: 100,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    flex: 1,
  },
  headerTextContainer: {
    marginTop: 30
  },
  headerMainText: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 15
  },
  headerSecondaryText: {
    fontSize: 15
  },
  formContent: {
    marginTop: 40,
    marginBottom: 30
  },
  forgotPasswordText: {
    textAlign: "right",
    marginTop: 10,
  },
  signInButtonContainer: {
    width: "100%",
    marginTop: 50,
    marginBottom: 15
  },
  formExtraText: {
    textAlign: 'center',
    color: '#8f8f8f',
  },
  socialLoginContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 40
  },
  socialLoginContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 200
  },
  socialButtonContainer: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderColor: '#c7c7c7',
    shadowColor: "#c7c7c7",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
  },
  signUpContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpText: {
    color: '#8f8f8f'
  },
  signUpLink: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
