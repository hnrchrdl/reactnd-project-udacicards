import React from 'react';
import * as colors from '../utils/colors';
import { StyleSheet } from 'react-native';

import { TouchableOpacity, Text } from 'react-native';

export default ({ text, type, onPress }) => (
    <TouchableOpacity style={[styles.btn, styles[type]]} onPress={onPress}>
        <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
);
const styles = StyleSheet.create({
    btn: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 2,
        margin: 5
    },
    btnText: {
        color: colors.FOREGROUND,
        textAlign: 'center'
    },
    default: {
        borderColor: colors.BACKGROUND_ALT,
        borderWidth: 2,
        backgroundColor: colors.BACKGROUND
    },
    submit: {
        borderColor: colors.HIGHLIGHT_ALT,
        borderWidth: 2,
        backgroundColor: colors.BACKGROUND
    },
    yes: {
        borderColor: colors.HIGHLIGHT_ALT,
        borderWidth: 2,
        backgroundColor: colors.BACKGROUND
    },
    no: {
        borderColor: colors.BACKGROUND_ALT,
        borderWidth: 2,
        backgroundColor: colors.BACKGROUND
    }
});
