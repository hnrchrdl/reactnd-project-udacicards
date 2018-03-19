import { StyleSheet } from 'react-native';
import * as colors from './colors';

export default StyleSheet.create({
    defaulttext: {
        color: colors.FOREGROUND
    },
    container: { padding: 20 },
    input: {
        borderColor: colors.FOREGROUND_ALT,
        color: colors.FOREGROUND,
        padding: 10,
        borderWidth: 1,
        marginBottom: 5
    }
});
