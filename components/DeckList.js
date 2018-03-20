import React from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableOpacity } from 'react-native';

import Deck from './Deck';

import GLOBAL_STYLES from '../utils/styles';

function DeckList({ decks: deckData, navigation }) {
    const { decks } = deckData;
    return (
        <View style={GLOBAL_STYLES.container}>
            {decks && decks.length ? (
                decks.map(deck => (
                    <TouchableOpacity
                        key={deck.title}
                        onPress={() =>
                            navigation.navigate('Deck', {
                                deckTitle: deck.title
                            })
                        }
                    >
                        <Deck deck={deck} />
                    </TouchableOpacity>
                ))
            ) : (
                <Text style={GLOBAL_STYLES.defaulttext}>
                    You do not have any decks yet. Please create a new deck
                    first.
                </Text>
            )}
        </View>
    );
}
function mapStateToProps(decks) {
    return {
        decks
    };
}

export default connect(mapStateToProps)(DeckList);
