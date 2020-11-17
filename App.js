import React from 'react';

import {View, Text} from 'react-native';

//Basics
import SimpleButton from './reactNativeElements/SimpleButton';
import UsingComposition from './reactNativeElements/UsingComposition';
import UsingThemeProvider from './reactNativeElements/UsingThemeProvider';
import OrderOfStyles from './reactNativeElements/OrderOfStyles';

function App() {
  return (
    <>
      {/* <SimpleButton />
      <UsingComposition /> */}
      {/* <UsingThemeProvider /> */}
      <OrderOfStyles />
    </>
  );
}

export default App;
