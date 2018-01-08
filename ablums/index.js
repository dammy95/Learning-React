// Import a library to help crete a component
import React from 'react';
import { AppRegistry, Text, View } from 'react-native';

import AlbumList from './src/components/AlbumList';
import Header from './src/components/header';

// Create a component
const App = () => {
  return (
    <View>
      <Header headerText={'Ablums!!'}/> 
      <AlbumList />
    </View>
  );
};

// Render it to the device
AppRegistry.registerComponent('ablums', () => App);
