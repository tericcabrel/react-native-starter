import React from "react";
import {
  View,
  ScrollView
} from "react-native";
import { Icon, ListItem } from "react-native-elements";
import { NavigationScreenProp } from "react-navigation";

import translate from "../../utils/i18n";
import styles from "../../styles/settings";
import colors from '../../styles/colors';

interface ISettingsProps {
  navigation: NavigationScreenProp<any, any>
}


class Settings extends React.Component<ISettingsProps> {
  static navigationOptions = {
    title: translate('settings.title')
  };

  constructor(props: ISettingsProps) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{ backgroundColor: colors.white, marginVertical: 30 }}>
            <ListItem
              title={translate('locale.title')}
              leftIcon={
                <Icon 
                  type='ionicon' 
                  name='md-globe'
                  size={20}
                  color={colors.white}
                  containerStyle={{
                    height: 30,
                    width: 30,
                    borderRadius: 8,
                    backgroundColor: '#39B2FF',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                />
              }
              chevron
              bottomDivider
            />
            <ListItem
              title={translate('settings.notification')}
              leftIcon={
                <Icon 
                  type='ionicon' 
                  name='ios-notifications'
                  size={20}
                  color={colors.white}
                  containerStyle={{
                    height: 30,
                    width: 30,
                    borderRadius: 8,
                    backgroundColor: '#F73836',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                />
              }
              chevron
              bottomDivider
            />
          </View>
          <View style={{ backgroundColor: colors.white }}>
            <ListItem
              title={translate('settings.terms')}
              leftIcon={
                <Icon 
                  type='ionicon' 
                  name='ios-journal'
                  size={20}
                  color={colors.white}
                  containerStyle={{
                    height: 30,
                    width: 30,
                    borderRadius: 8,
                    backgroundColor: colors.warning,
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                />
              }
              chevron
              bottomDivider
            />
            <ListItem
              title={translate('settings.privacy')}
              leftIcon={
                <Icon 
                  type='ionicon' 
                  name='ios-lock'
                  size={20}
                  color={colors.white}
                  containerStyle={{
                    height: 30,
                    width: 30,
                    borderRadius: 8,
                    backgroundColor: colors.brand.success,
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                />
              }
              chevron
              bottomDivider
            />
            <ListItem
              title={translate('settings.help')}
              leftIcon={
                <Icon 
                  type='ionicon' 
                  name='ios-help-buoy'
                  size={20}
                  color={colors.white}
                  containerStyle={{
                    height: 30,
                    width: 30,
                    borderRadius: 8,
                    backgroundColor: '#D939FF',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                />
              }
              chevron
              bottomDivider
            />
            <ListItem
              title={translate('settings.about')}
              leftIcon={
                <Icon 
                  type='ionicon' 
                  name='ios-information-circle'
                  size={20}
                  color={colors.white}
                  containerStyle={{
                    height: 30,
                    width: 30,
                    borderRadius: 8,
                    backgroundColor: colors.brand.info,
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                />
              }
              chevron
              bottomDivider
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Settings;
