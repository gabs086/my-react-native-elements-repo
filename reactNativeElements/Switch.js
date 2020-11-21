import * as React from 'react';
import {Switch} from 'react-native';
import {useTheme} from './ThemeProvider';

export default function Toggle() {
    // We're also pulling setScheme here!
    const {setScheme, isDark} = useTheme();

    const toggleScheme = () => {
        /*
        * setScheme will change the state of the context
        * thus will cause childrens inside the context provider to re-render
        * with the new color scheme
        */
        isDark ? setScheme('light') : setScheme('dark');
    }

    console.log(setScheme);

    return (
        <Switch value={isDark} onValueChange={toggleScheme}/>
    );
}