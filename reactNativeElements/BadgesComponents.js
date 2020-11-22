import React from 'react';
import {View, Text} from 'react-native';
import {Avatar, Badge, Icon, withBadge} from 'react-native-elements';

export default function BadgesComponents() {
  return (
    <View>
      <Text>// Standard badge</Text>
      <Badge value="99+" status="error" />
      <Badge value={<Text>My Custom Badge</Text>} />
      <Text>// Mini badge</Text>
      <Badge status="success" />
      <Badge status="error" />
      <Badge status="primary" />
      <Badge status="warning" />
      <Text>// Avatar with mini badge</Text>
      
      <View>
        <Avatar
          rounded
          source={{
            uri: 'https://randomuser.me/api/portraits/men/41.jpg',
          }}
          size="large"
        />

        <Badge
          status="success"
          containerStyle={{position: 'absolute', top: -4, right: -4}}
        />
      </View>
    </View>
  );
}
