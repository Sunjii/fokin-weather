import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Alert} from "react-native";
import { StyleSheet, Text, View } from 'react-native';
import * as Location from "expo-location";

import Loading from "./Loading";

export default class extends React.Component {
  state = {
    isLoading: true
  };
  
  getLocation = async() => {
    try {
      const request = await Location.requestPermissionsAsync();
      console.log(request);
      const { coords: {latitude, longitude} } = await Location.getCurrentPositionAsync();
      this.setState( {isLoading: false} );
      
      // Send to API and get Weather

      console.log(coords.latitude, coords.longitude);
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
      
    }
  };
  
  componentDidMount(){
    this.getLocation();
  }
  render() {
    const {isLoading} = this.state;
    return isLoading ? <Loading /> : null;
  }
}

