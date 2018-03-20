import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GLOBAL_STYLES from '../utils/styles';
import * as colors from '../utils/colors';

export default ({ deck }) => (
    <View style={styles.frame}>
        {deck && (
            <View>
                <Text style={[GLOBAL_STYLES.defaulttext, styles.header]}>
                    {deck.title}
                </Text>
                <Text style={[GLOBAL_STYLES.defaulttext, styles.subheader]}>
                    {deck.questions.length} questions.
                </Text>
            </View>
        )}
    </View>
);

const styles = StyleSheet.create({
    frame: {
        borderColor: colors.FOREGROUND,
        borderWidth: 1,
        padding: 20,
        marginBottom: 20
    },
    header: {
        textAlign: 'center',
        fontSize: 30
    },
    subheader: {
        textAlign: 'center',
        fontSize: 20,
        color: colors.FOREGROUND_ALT
    }
});
