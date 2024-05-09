import React, {Component} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import mixer from './Mixer.png';

const StylingReactNativeComponent = () => {
  return (
    <View style={{marginTop: 20, marginLeft: 20}}>
      <Text style={styles.text}>Product List</Text>

      <View
        style={{
          padding: 12,
          backgroundColor: '#F2F2F2',
          width: 225,
          borderRadius: 8,
          marginTop: 20,
        }}>
        <Image
          source={mixer}
          style={{width: 200, height: 200, borderRadius: 8}}
        />
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            marginTop: 16,
            color: 'black',
          }}>
          Mixer 4 in 1
        </Text>

        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            marginTop: 16,
            color: 'blue',
          }}>
          RM25.00
        </Text>
        <Text style={{fontSize: 12, marginTop: 12, color: 'grey'}}>
          Kuala Lumpur, Malaysia
        </Text>

        <View
          style={{
            backgroundColor: '#6FCF97',
            paddingVertical: 6,
            borderRadius: 25,
            marginTop: 10,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: 'white',
              textAlign: 'center',
            }}>
            Add To Cart
          </Text>
        </View>
      </View>
      <View
        style={{
          padding: 12,
          backgroundColor: '#F2F2F2',
          width: 225,
          borderRadius: 8,
          marginTop: 20,
        }}>
        <Image
          source={mixer}
          style={{width: 200, height: 200, borderRadius: 8}}
        />
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            marginTop: 16,
            color: 'black',
          }}>
          Mixer 4 in 1
        </Text>

        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            marginTop: 16,
            color: 'blue',
          }}>
          RM25.00
        </Text>
        <Text style={{fontSize: 12, marginTop: 12, color: 'grey'}}>
          Kuala Lumpur, Malaysia
        </Text>

        <View
          style={{
            backgroundColor: '#6FCF97',
            paddingVertical: 6,
            borderRadius: 25,
            marginTop: 10,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: 'white',
              textAlign: 'center',
            }}>
            Add To Cart
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default StylingReactNativeComponent;
