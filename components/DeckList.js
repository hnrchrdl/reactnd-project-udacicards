import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, Text, View, TouchableOpacity } from 'react-native';
import { getDecksAsync } from '../actions';

import Deck from './Deck';

import GLOBAL_STYLES from '../utils/styles';

class DeckList extends Component {
    constructor(props) {
        super(props);
        this.renderDeck = this.renderDeck.bind(this);
    }
    componentDidMount() {
        this.props.getDecks();
    }
    renderDeck(item) {
        const { navigation } = this.props;
        return (
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('Deck', {
                        deckTitle: item.title
                    })
                }
            >
                <Deck deck={item} />
            </TouchableOpacity>
        );
    }
    render() {
        const { decks } = this.props;
        const keys = Object.keys(decks || {});
        return (
            <View style={GLOBAL_STYLES.container}>
                {decks && keys.length ? (
                    <FlatList
                        data={keys.map(key => ({ key, ...decks[key] }))}
                        renderItem={({ item }) => this.renderDeck(item)}
                    />
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
