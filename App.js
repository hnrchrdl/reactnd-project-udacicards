import React from 'react';
import { createStore } from 'redux';

import { Provider } from 'react-redux';
import { View, StatusBar, StyleSheet } from 'react-native';
import { TabNavigator } from 'react-navigation';

import DeckList from './components/DeckList';
import DeckNew from './components/DeckNew';
import { deckReducer } from './reducers';
import { Constants } from 'expo';
import * as colors from './utils/colors';

const CustomStatusBar = () => (
    <View style={{ height: Constants.statusBarHeight }}>
        <StatusBar translucent backgroundColor={'#7c53c3'} />
    </View>
);
const Tabs = TabNavigator(
    {
        List: {
            screen: DeckList,
            navigationOptions: {
                tabBarLabel: 'Deck List'
            }
        },
        New: {
            screen: DeckNew,
            navigationOptions: {
                tabBarLabel: 'New Deck'
            }
        }
    },
    {
        tabBarOptions: {
            style: {
                backgroundColor: colors.BACKGROUND_ALT
            },
            activeTintColor: colors.FOREGROUND,
            inactiveTintColor: colors.FOREGROUND_ALT,
            indicatorStyle: {
                backgroundColor: colors.HIGHLIGHT
            }
        }
    }
);

export default class App extends React.Component {
    render() {
        return (
            <Provider store={createStore(deckReducer)}>
                <View style={[styles.app, { flex: 1 }]}>
                    <CustomStatusBar />
                    <Tabs />
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    app: {
        backgroundColor: colors.BACKGROUND
    }
});
