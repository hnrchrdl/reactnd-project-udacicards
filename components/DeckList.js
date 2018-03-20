import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableOpacity } from 'react-native';
import { getDecksAsync } from '../actions';

import Deck from './Deck';

import GLOBAL_STYLES from '../utils/styles';

class DeckList extends Component {
    componentDidMount() {
        this.props.getDecks();
    }
    render() {
        const { decks, navigation } = this.props;
        const keys = Object.keys(decks);
        console.log(keys);
        return (
            <View style={GLOBAL_STYLES.container}>
                {decks && keys.length ? (
                    keys.map(key => (
                        <TouchableOpacity
                            key={key}
                            onPress={() =>
                                navigation.navigate('Deck', {
                                    deckTitle: decks[key].title
                                })
                            }
                        >
                            <Deck deck={decks[key]} />
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
}
function mapStateToProps(decks) {
    return {
        decks
    };
}
function mapDispatchToProps(dispatch) {
    return {
        getDecks: getDecksAsync(dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(DeckList);
