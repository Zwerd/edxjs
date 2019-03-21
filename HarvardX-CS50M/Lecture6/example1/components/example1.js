
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createSwitchNavigator} from 'react-navigation';

class ScreenComponentOne extends React.Component {
  render(){
    return (
      <View style={{flex:1, alineItems:'center',justifycontent:'center', broderWidth:25, borderColor:'teal' }}>
        <Button title="Go to screen two"/>
      </View>
    )
  }
}

const AppNavigator = createSwitchNavigator({
  RouteNameOne: ScreenComponentOne,
})

export default class App extends React.Component {
  render(){
    return <AppNavigator />
  }
}
