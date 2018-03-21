import { TabNavigator } from 'react-navigation';
import DeckList from './DeckList';
import DeckNew from './DeckNew';
import * as colors from '../utils/colors';

export default TabNavigator(
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
