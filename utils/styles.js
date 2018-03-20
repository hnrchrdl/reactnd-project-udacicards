import { StyleSheet } from 'react-native';
import * as colors from './colors';

export default StyleSheet.create({
    app: {
        backgroundColor: colors.BACKGROUND,
        flex: 1
    },
    defaulttext: {
        color: colors.FOREGROUND
    },
    container: {
        backgroundColor: colors.BACKGROUND,
        padding: 20,
        flex: 1
    },
    input: {
        borderColor: colors.BACKGROUND_ALT,
        color: colors.FOREGROUND,
        padding: 10,
        borderWidth: 1,
        marginBottom: 5
    }
});
