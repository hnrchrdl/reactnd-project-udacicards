import React from 'react';

import { Provider } from 'react-redux';
import { View, StatusBar } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Constants } from 'expo';

import DeckDetails from './components/DeckDetails';
import DeckList from './components/DeckList';
import DeckNew from './components/DeckNew';
import Quiz from './components/Quiz';
import QuestionNew from './components/QuestionNew';
import GLOBAL_STYLES from './utils/styles';

import * as colors from './utils/colors';
import configureStore from './store';

const CustomStatusBar = () => (
    <View style={{ height: Constants.statusBarHeight }}>
        <StatusBar translucent backgroundColor={'#7c53c3'} />
    </View>
);

const Home = TabNavigator(
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

const Main = StackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                header: null
            }
        },
        Deck: {
            screen: DeckDetails,
            navigationOptions: {
                headerTitle: 'Deck'
            }
        },
        Quiz: {
            screen: Quiz,
            navigationOptions: {
                headerTitle: 'Quiz'
            }
        },
        QuestionNew: {
            screen: QuestionNew,
            navigationOptions: {
                headerTitle: 'New Card'
            }
        }
    },
    {
        initialRouteName: 'Home',
        headerMode: 'screen',
        navigationOptions: {
            headerStyle: {
                backgroundColor: colors.BACKGROUND_ALT
            },
            headerTitleStyle: {
                color: colors.FOREGROUND_ALT
            }
        }
    }
);

const store = configureStore();

export default class App extends React.Component {
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
