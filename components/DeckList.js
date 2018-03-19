import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';

import DeckDetails from './DeckDetails';
import GLOBAL_STYLES from '../utils/styles';

class DeckList extends Component {
    render() {
        const { decks: deckData } = this.props;
        const { decks } = deckData;
        return (
            <View style={GLOBAL_STYLES.container}>
                {decks && decks.length ? (
                    decks.map(deck => (
                        <DeckDetails key={deck.title} deck={deck} />
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
}
function mapStateToProps(decks) {
    return {
        decks
    };
}

export default connect(mapStateToProps)(DeckList);
