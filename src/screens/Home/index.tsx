import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Picker
} from "react-native";
import { Button, ListItem, Icon } from "react-native-elements";
import Modal from "react-native-modal";
import { connect } from "react-redux";
import { NavigationScreenProp } from "react-navigation";

import { LOCALES, MENU_IDS, MENU_ITEMS } from "../../utils/constants";
import { LocaleItemData, MenuItemData } from "../../utils/types";
import { setLocale } from "../../store/app/actions";
import translate from "../../utils/i18n";

import styles from "../../styles/home";

interface IHomeProps {
  locale: string;
  setLocale: (locale: string) => {};
  navigation: NavigationScreenProp<any, any>;
}

interface IHomeStates {
  isMenuModalVisible: boolean;
  isLocaleSelectVisible: boolean;
}

class Home extends React.Component<IHomeProps, IHomeStates> {
  static navigationOptions = {
    title: translate('home.title')
  };

  constructor(props: any) {
    super(props);
    this.state = {
      isMenuModalVisible: false,
      isLocaleSelectVisible: false
    };
  }

  toggleModalMenu(value: boolean) {
    this.setState({ isMenuModalVisible: value });
  }

  toggleLocaleSelect(value: boolean) {
    this.setState({ isLocaleSelectVisible: value });
  }

  handleMenu(item: MenuItemData) {
    switch (item.id) {
      case MENU_IDS.profile:
        // TODO Go to the profile
        break;
      case MENU_IDS.language:
        // TODO select language
        this.toggleLocaleSelect(true);
        break;
      case MENU_IDS.about:
        // TODO Got to about
        break;
      default:
    }
    this.toggleModalMenu(false);
  }

  keyExtractor = (item: MenuItemData, index: number) => item.id;

  renderItem = ({ item }: { item: MenuItemData }) => (
    <ListItem
      title={translate(item.name)}
      leftIcon={{
        name: item.icon,
        color: "#000"
      }}
      onPress={() => this.handleMenu(item)}
    />
  );

  changeLocale(locale: string, index: number) {
    console.log(index);
    this.props.setLocale(locale);
    this.toggleLocaleSelect(false);
  }

  render() {
    const { isMenuModalVisible, isLocaleSelectVisible } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Button
            icon={<Icon name="arrow-left" size={16} color="white" type="font-awesome"/>}
            title={translate("home.btn_login")}
            containerStyle={{ width: "100%" }}
            onPress={() => {
              this.props.navigation.navigate("Login");
            }}
          />
        </View>

        <Modal
          isVisible={isMenuModalVisible}
          animationInTiming={500}
          animationOutTiming={500}
          backdropTransitionInTiming={500}
          backdropTransitionOutTiming={500}
          onSwipeComplete={() => this.toggleModalMenu(!isMenuModalVisible)}
          swipeDirection={["down"]}
          style={styles.modalMenu}
        >
          <SafeAreaView>
            <View style={styles.modalMenuContainer}>
              <View>
                <Text>MENU</Text>
              </View>
              <FlatList
                keyExtractor={this.keyExtractor}
                data={MENU_ITEMS}
                renderItem={this.renderItem}
              />
            </View>
          </SafeAreaView>
        </Modal>

        {isLocaleSelectVisible && (
          <Picker
            selectedValue={this.props.locale}
            style={{ height: 300 }}
            onValueChange={(itemValue, itemIndex) =>
              this.changeLocale(itemValue, itemIndex)
            }
          >
            {LOCALES.map((localeItem: LocaleItemData, index: number) => (
              <Picker.Item
                key={index}
                label={translate(localeItem.name)}
                value={localeItem.id}
              />
            ))}
          </Picker>
        )}
      </View>
    );
  }
}

const mapStateToProps = ({ app }: { [any: string]: any }) => ({
  locale: app.locale
});

const mapDispatchToProps = (dispatch: any) => ({
  setLocale: (locale: string) => dispatch(setLocale(locale))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
