import React from 'react';

import {View, Text} from 'react-native';

//Basics
import SimpleButton from './reactNativeElements/SimpleButton';
import UsingComposition from './reactNativeElements/UsingComposition';
import UsingThemeProvider from './reactNativeElements/UsingThemeProvider';
import OrderOfStyles from './reactNativeElements/OrderOfStyles';

import AvatarComponents from './reactNativeElements/AvatarComponents';
import BadgeComponents from './reactNativeElements/BadgesComponents';

function App() {
  return (
    <>
      {/* <SimpleButton />
      <UsingComposition /> */}
      {/* <UsingThemeProvider /> */}
      {/* <OrderOfStyles /> */}
      {/* <AvatarComponents /> */}
      <BadgeComponents />
    </>
  );
}

export default App;
