import { StackNavigator } from 'react-navigation';

import DeckDetails from './DeckDetails';
import Home from './Home';
import Quiz from './Quiz';
import QuestionNew from './QuestionNew';

import * as colors from '../utils/colors';

export default StackNavigator(
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
