import React from 'react';
import {View, Text} from 'react-native';

import {ThemeProvider, Button} from 'react-native-elements';

const theme = {
  Button: {
    raised: true,
  },
};

export default function UsingThemeProvider() {
  return (
    <ThemeProvider theme={theme}>
      <Button title="My Button" />
      <Button title="My 2nd Button" />
    </ThemeProvider>
  );
}
