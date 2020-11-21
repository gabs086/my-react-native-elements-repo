import React from 'react';

import {View, Text} from 'react-native';

//Basics
import SimpleButton from './reactNativeElements/SimpleButton';
import UsingComposition from './reactNativeElements/UsingComposition';
import UsingThemeProvider from './reactNativeElements/UsingThemeProvider';
import OrderOfStyles from './reactNativeElements/OrderOfStyles';

//Darkmode components
import ThemeProvider from './reactNativeElements/ThemeProvider';
import Screen from './reactNativeElements/Screen';
import Switch from './reactNativeElements/Switch';

import {AppearanceProvider} from 'react-native-appearance';

function App() {
  return (
    <>
      {/* <SimpleButton />
      <UsingComposition /> */}
      {/* <UsingThemeProvider /> */}
      {/* <OrderOfStyles /> */}

      {/* Wrap the whole app win AppearanceProvider Component  */}
      <AppearanceProvider>

        {/* Wrap the app with useContext component */}
        <ThemeProvider>
          <Screen>
            <Switch />
          </Screen>
          
        </ThemeProvider>
      </AppearanceProvider>
    </>
  );
}

export default App;
