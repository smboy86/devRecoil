/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src';
import {name as appName} from './app.json';

import 'react-native-gesture-handler';
import {enableScreens} from 'react-native-screens';
enableScreens();

AppRegistry.registerComponent(appName, () => App);
