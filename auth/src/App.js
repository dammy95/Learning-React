import firebase from 'firebase'; 
import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Header, Button } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  state = { loggedIn: false };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBZ01ab7UH1AZWeYo_rcX6_5OyaeLCc2jI',
      authDomain: 'authentication-17ae8.firebaseapp.com',
      databaseURL: 'https://authentication-17ae8.firebaseio.com',
      projectId: 'authentication-17ae8',
      storageBucket: 'authentication-17ae8.appspot.com',
      messagingSenderId: '622996391701'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    });
  };

  renderContent() {
    if (this.state.loggedIn) {
      return (
        <Button>
          Log Out
        </Button>
      );
    }

    return <LoginForm />;
  }

  render() {
    return (
      <View> 
      <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
};

export default App;
