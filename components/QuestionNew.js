import React, { Component } from 'react';
import { TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import GLOBAL_STYLES from '../utils/styles';
import * as colors from '../utils/colors';
import Button from './Button';

import { addCardAsync } from '../actions/';

class QuestionNew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: '',
            answer: ''
        };
        this.submitCard = this.submitCard.bind(this);
    }
    submitCard() {
        const { question, answer } = this.state;
        const { deckTitle, createNewCard, navigation } = this.props;
        if (question && answer) {
            createNewCard(deckTitle, { question, answer });
            navigation.goBack();
        }
    }
    render() {
        return (
            <View style={GLOBAL_STYLES.container}>
                <TextInput
                    style={GLOBAL_STYLES.input}
                    autoFocus={true}
                    placeholder="Your Question"
                    selectionColor={colors.HIGHLIGHT}
                    underlineColorAndroid={colors.BACKGROUND_ALT}
                    onChangeText={question => this.setState({ question })}
                    value={this.state.question}
                />
                <TextInput
                    style={GLOBAL_STYLES.input}
                    multiline={true}
                    numberOfLines={5}
                    maxHeight={150}
                    placeholder="The Answer"
                    selectionColor={colors.HIGHLIGHT}
                    underlineColorAndroid={colors.BACKGROUND_ALT}
                    onChangeText={answer => this.setState({ answer })}
                    value={this.state.answer}
                />
                <Button text="SUBMIT" type="submit" onPress={this.submitCard} />
            </View>
        );
    }
}

function mapStateToProps(decks, { navigation }) {
    const { deckTitle } = navigation.state.params;
    return {
        deckTitle,
        navigation
    };
}

function mapDispatchToProps(dispatch) {
    return {
        createNewCard: addCardAsync(dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionNew);
