import React from 'react';
import {View, Text} from 'react-native';

import {ThemeProvider, Button} from 'react-native-elements';

const theme = {
  Button: {
    titleStyle: {
      color: 'red',
    },
  },
};

const theme2 = {
    Button: {
      titleStyle: {
        color: 'red',
      },
    },
  };

export default function OrderOfStyles() {
  return (
      <>
      {/* Internal theming */}
    <ThemeProvider theme={theme}>
      <Button title="My Button" />
    </ThemeProvider>

    {/* External Theming */}
    {/* Prioritize the theming that is within the component */}
    <ThemeProvider theme={theme2}>
      <Button title="My Button" titleStyle={{ color: 'pink' }} />
    </ThemeProvider>

    </>
  );
}
