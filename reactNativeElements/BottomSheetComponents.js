import React, {useState} from 'react';
import {View, Text} from 'react-native';

import {ListItem, BottomSheet, Button} from 'react-native-elements';

export default function BottomSheetComponents() {
  const [isVisible, setIsVisible] = useState(false);

  const list = [
    {title: 'List Item 1'},
    {title: 'List Item 2'},
    {
      title: 'Cancel',
      containerStyle: {backgroundColor: 'red'},
      titleStyle: {color: 'white'},
      onPress: () => setIsVisible(false),
    },
  ];

  console.log(isVisible);

  return (
    <>
      <View>
        <Button title="Bottom Sheet" onPress={(_) => setIsVisible(true)} />
      </View>

      <BottomSheet isVisible={isVisible}>
        {list.map((l, i) => (
          <ListItem
            key={i}
            containerStyle={l.containerStyle}
            onPress={l.onPress}>
            <ListItem.Content>
              <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </BottomSheet>
    </>
  );
}
