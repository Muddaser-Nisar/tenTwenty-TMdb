// /**
//  * @format
//  */

// import { AppRegistry } from 'react-native';
// import App from './src/navigation/AppNavigation';
// import { name as appName } from './app.json';

// AppRegistry.registerComponent(appName, () => App);

// // /**
// //  * @format
// //  */

// // import {AppRegistry} from 'react-native';
// // import App from './App';
// // import {name as appName} from './app.json';

// // AppRegistry.registerComponent(appName, () => App);

// import React from 'react';
// import { AppRegistry, LogBox, Text, TextInput } from 'react-native';
// import { Provider } from 'react-redux';
// import persistStore from 'redux-persist/es/persistStore';
// import { PersistGate } from 'redux-persist/integration/react';
// import store from 'redux/store';
// import App from './App';
// import { name as appName } from './app.json';
// LogBox.ignoreAllLogs();

// let persistor = persistStore(store);

// const AppRedux = () => (
//     <Provider {...{ store }}>
//         <PersistGate persistor={persistor}>
//             <App />
//             {/* <FlashMessage position={'top'} /> */}
//         </PersistGate>
//     </Provider>
// );

// Text.defaultProps = Text.defaultProps || {};
// Text.defaultProps.allowFontScaling = false;
// TextInput.defaultProps = TextInput.defaultProps || {};
// TextInput.defaultProps.allowFontScaling = false;

// AppRegistry.registerComponent(appName, () => AppRedux);

import React from 'react';
import { AppRegistry, LogBox, Text, TextInput } from 'react-native';
// import { GestureHandlerRootView } from 'react-native-gesture-handler'; // Move here
import { Provider } from 'react-redux';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';
import store from 'redux/store';
import App from './src/navigation/AppNavigation';
import { name as appName } from './app.json';
LogBox.ignoreAllLogs();

let persistor = persistStore(store);

const AppRedux = () => (
  <Provider {...{ store }}>
    <PersistGate persistor={persistor}>
      {/* <GestureHandlerRootView style={{ flex: 1 }}> */}
      <App />
      {/* </GestureHandlerRootView> */}
    </PersistGate>
  </Provider>
);

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;

AppRegistry.registerComponent(appName, () => AppRedux);
