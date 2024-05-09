import React, {Component} from 'react';
import {Image, Text, TextInput, View} from 'react-native';

//create function that store all the component
const SampleComponent = () => {
  return (
    <View style={{marginTop: 30, marginLeft: 20, marginRight: 20}}>
      <View style={{width: 80, height: 80, backgroundColor: '#0abde3'}} />
      <Text>Prawito</Text>
      <Hudoro />
      <Text>Mila</Text>
      <Text>Azzamy</Text>
      <Photo />
      <TextInput style={{borderWidth: 1, marginTop: 20}} />
      <BoxGreen />
      <Profile />
    </View>
  );
};

//create component using function
const Hudoro = () => {
  return <Text>Hudoro Mangku Negoro</Text>;
};

const Photo = () => {
  return (
    <Image
      source={{
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH3X-1k2fJ2QW_oJ0T5a3uJuZABJGOH3B-FA&usqp=CAU',
      }}
      style={{width: 100, height: 100, marginTop: 20}}
    />
  );
};

//create component using class
class BoxGreen extends Component {
  render() {
    return <Text>Ini component dari class</Text>;
  }
}

//return must 1 function, then we need to wrap using view function.
//how to add color and resize the text

class Profile extends Component {
  render() {
    return (
      <View>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3x5i5EMUp2S4CBC2kHsnjLMdtP3JnUn0hevPE_LfQ8q1TWUSrqSSAdc9tsMsZ5y-uOm4&usqp=CAU',
          }}
          style={{width: 100, height: 100, borderRadius: 50, marginTop: 20}}
        />
        <Text style={{color: 'blue', fontSize: 24}}>Ini programmer</Text>
      </View>
    );
  }
}



export default SampleComponent;
