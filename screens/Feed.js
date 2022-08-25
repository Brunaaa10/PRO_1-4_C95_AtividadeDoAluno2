import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Feed extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <text>Feeds</text>
      </View>
    );
  }
}
