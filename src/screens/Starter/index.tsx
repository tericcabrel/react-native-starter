import React from "react";
import { Image } from "react-native";

import Onboarding from "../../components/Onboarding";

class Starter extends React.Component<any> {
  _handleDone = () => {
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <Onboarding
        onDone={this._handleDone}
        onSkip={() => console.log('Skip')}
        skipToPage={3}
        pages={[
          {
            backgroundColor: 'white',
            image: <Image source={require('../../assets/images/react.png')} style={{ height: 150, width: 150 }} />,
            title: 'React Native',
            subtitle: "React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces."
          },
          {
            backgroundColor: 'white',
            image: <Image source={require('../../assets/images/typescript.png')} style={{ height: 150, width: 150 }} />,
            title: 'TypeScript',
            subtitle: "TypeScript is a strongly typed, object oriented, compiled language. TypeScript is a typed superset of JavaScript compiled to JavaScript."
          },
          {
            backgroundColor: 'white',
            image: <Image source={require('../../assets/images/react-navigation.png')} style={{ height: 150, width: 150 }} />,
            title: 'React Navigation',
            subtitle: "React Navigation is a JavaScript-based library for routing. Promoted by both Facebook and the React Native documentation as the primary solution for routing."
          },
          {
            backgroundColor: 'white',
            image: <Image source={require('../../assets/images/redux.png')} style={{ height: 150, width: 160 }} />,
            title: 'Redux',
            subtitle: "Redux helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test."
          }
        ]}
      />
    );
  }
}

export default Starter;
