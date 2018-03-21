import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, TextInput } from 'react-native';

import { addDeckAsync } from '../actions';
import Button from './Button';

import GLOBAL_STYLES from '../utils/styles';
import * as colors from '../utils/colors';

class DeckNew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
        this.submitCard = this.submitCard.bind(this);
    }

    submitCard() {
        const { text } = this.state;
        const { createNewDeck, navigation } = this.props;
        if (text) {
            createNewDeck(text);
            this.setState({ text: '' });
            navigation.navigate('Deck', { deckTitle: text });
        }
    }

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
                <Button
                    text="Create Deck"
                    type="submit"
                    onPress={this.submitCard}
                />
            </View>
        );
    }
}

function mapStateToProps() {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        createNewDeck: addDeckAsync(dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckNew);
