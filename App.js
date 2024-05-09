import React from 'react';
import {ScrollView, View} from 'react-native';
import SampleComponent from './SampleComponent';
import StylingReactNativeComponent from './StylingReactNativeComponent';
import MaterialFlexBox from './MaterialFlexBox';

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <StylingReactNativeComponent />
        <SampleComponent /> */}
        <MaterialFlexBox />
      </ScrollView>
    </View>
  );
};

export default App;
