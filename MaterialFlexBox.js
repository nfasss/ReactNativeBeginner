/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View} from 'react-native';

class MaterialFlexBox extends Component {
  render() {
    return (
      <View style={{flexDirection:'row', 
      alignItems:'center',justifyContent:'space-between'}}>
        {/* <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: 20,
            marginBottom: 20,
            color: 'black',
          }}>
          Material Flex Box
        </Text> */}
        <View style={{backgroundColor: '#ee5253', width:50, height: 100}} />
        <View style={{backgroundColor: '#feca57', width:50, height: 120}} />
        <View style={{backgroundColor: '#1dd1a1', width:50, height: 150}} />
        <View style={{backgroundColor: '#5f27cd', width:50, height: 200}} />


        {/*Flex is use for flexible view.
        <View style={{backgroundColor: '#ee5253', flex: 1, height: 100}} />
        <View style={{backgroundColor: '#feca57', flex: 1, height: 120}} />
        <View style={{backgroundColor: '#1dd1a1', flex: 1, height: 150}} />
        <View style={{backgroundColor: '#5f27cd', flex: 1, height: 200}} /> */}
      </View>
    );
  }
}

export default MaterialFlexBox;
