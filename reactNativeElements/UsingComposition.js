import React from 'react'
import { View, Text } from 'react-native'

import { Button } from 'react-native-elements';

const RaisedButton = (props) => <Button raised {...props} />;


export default function UsingComposition() {
    return (
        <RaisedButton title="Yea" />
    )
}
