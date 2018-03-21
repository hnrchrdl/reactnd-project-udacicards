import React from 'react';

import { Provider } from 'react-redux';
import { View, StatusBar } from 'react-native';
import { Constants } from 'expo';

import Main from './components/Main';

import GLOBAL_STYLES from './utils/styles';

import configureStore from './store';

import { setLocalNotifications } from './utils/notifications';

const CustomStatusBar = () => (
    <View style={{ height: Constants.statusBarHeight }}>
        <StatusBar translucent backgroundColor={'#7c53c3'} />
    </View>
);

const store = configureStore();

export default class App extends React.Component {
    componentDidMount() {
        setLocalNotifications();
    }
    render() {
        return (
            <Provider store={store}>
                <View style={[GLOBAL_STYLES.app, { flex: 1 }]}>
                    <CustomStatusBar />
                    <Main />
                </View>
            </Provider>
        );
    }
}
