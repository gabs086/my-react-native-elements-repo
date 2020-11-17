import React from 'react';
import {View, Text} from 'react-native';
import {Button, ThemeProvider} from 'react-native-elements';

export default function SimpleButton() {
  return (
    <ThemeProvider>
      <Button title="Hey!" />
    </ThemeProvider>
  );
}
