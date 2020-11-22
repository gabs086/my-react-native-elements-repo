import React from 'react';
import {View, Text} from 'react-native';

import {Avatar, Accessory} from 'react-native-elements';

export default function AvatarComponents() {
  return (
    <View>
      <Text>Standard avatars</Text>
      {/* // Standard Avatar */}
      <Avatar
        rounded
        source={{
          uri:
            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        }}
      />
      {/* // Avatar with Title */}
      <Avatar
        rounded
        title="MD"
        source={{
          uri:
            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        }}
        onPress={() => console.log('Works!')}
      />
      {/* // Avatar with Icon */}
      <Avatar
        rounded
        icon={{name: 'home'}}
        source={{
          uri:
            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        }}
      />
      {/* // Standard Avatar with accessory */}
      <Avatar
        source={{
          uri:
            'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        }}>
        <Accessory />
      </Avatar>

      <Text>Avatar with icons</Text>

      <Avatar
        rounded
        icon={{name: 'user', type: 'font-awesome'}}
        onPress={() => console.log('Works!')}
        activeOpacity={0.7}
        containerStyle={{flex: 2, marginLeft: 20, marginTop: 115}}
      />
      <Avatar
        size="small"
        rounded
        icon={{name: 'user', type: 'font-awesome'}}
        onPress={() => console.log('Works!')}
        activeOpacity={0.7}
        containerStyle={{flex: 2, marginLeft: 20, marginTop: 115}}
      />
      <Avatar
        size="medium"
        overlayContainerStyle={{backgroundColor: 'blue'}}
        icon={{name: 'meetup', color: 'red', type: 'font-awesome'}}
        onPress={() => console.log('Works!')}
        activeOpacity={0.7}
        containerStyle={{flex: 3, marginTop: 100}}
      />
      <Avatar
        size="large"
        icon={{name: 'rocket', color: 'orange', type: 'font-awesome'}}
        overlayContainerStyle={{backgroundColor: 'white'}}
        onPress={() => console.log('Works!')}
        activeOpacity={0.7}
        containerStyle={{flex: 4, marginTop: 75}}
      />
      <Avatar
        size="xlarge"
        rounded
        icon={{name: 'home', type: 'font-awesome'}}
        onPress={() => console.log('Works!')}
        activeOpacity={0.7}
        containerStyle={{flex: 5, marginRight: 60}}
      />
      <Avatar
        size={200}
        rounded
        icon={{name: 'user', type: 'font-awesome'}}
        onPress={() => console.log('Works!')}
        activeOpacity={0.7}
        containerStyle={{flex: 2, marginLeft: 20, marginTop: 115}}
      />
    </View>
  );
}
