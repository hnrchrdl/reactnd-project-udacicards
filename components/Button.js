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
        padding: 15
    },
    btnText: {
        color: colors.FOREGROUND,
        textAlign: 'center'
    },
    submit: {
        backgroundColor: colors.HIGHLIGHT_ALT
    },
    yes: {},
    no: {}
});