import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, TextInput } from 'react-native';

import { addDeck as addDeckActionCreator } from '../actions';
import Button from './Button';

import GLOBAL_STYLES from '../utils/styles';
import * as colors from '../utils/colors';

class DeckNew extends Component {
    state = {
        text: ''
    };
    submitCard = () => {
        const { text } = this.state;
        const { allDecks, createNewDeck } = this.props;
        if (text && !allDecks.find(d => d.title === text)) createNewDeck(text);
    };
    render() {
        return (
            <View style={GLOBAL_STYLES.container}>
                <TextInput
                    style={GLOBAL_STYLES.input}
                    autoFocus={true}
                    placeholder="Deck Title"
                    selectionColor={colors.HIGHLIGHT}
                    underlineColorAndroid={colors.BACKGROUND_ALT}
                    onChangeText={text => this.setState({ text })}
                    value={this.state.text}
                />
                <Button text="SUBMIT" type="submit" onPress={this.submitCard} />
            </View>
        );
    }
}

function mapStateToProps(decks) {
    return {
        allDecks: decks ? decks.decks : []
    };
}

function mapDispatchToProps(dispatch) {
    return {
        createNewDeck: title => dispatch(addDeckActionCreator(title))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckNew);