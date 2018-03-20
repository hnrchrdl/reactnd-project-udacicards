import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import Deck from './Deck';
import Button from './Button';
import GLOBAL_STYLES from '../utils/styles';

class DeckDetails extends Component {
    constructor(props) {
        super(props);
        this.startQuiz = this.startQuiz.bind(this);
        this.addQuestion = this.addQuestion.bind(this);
    }
    startQuiz() {
        const { navigation, deck } = this.props;
        if (deck.questions.length) {
            navigation.navigate('Quiz', { deckTitle: deck.title });
        }
    }
    addQuestion() {
        const { navigation, deck } = this.props;
        navigation.navigate('QuestionNew', { deckTitle: deck.title });
    }
    render() {
        const { deck } = this.props;
        return (
            <View style={GLOBAL_STYLES.container}>
                <Deck deck={deck} />
                <View>
                    <Button
                        type="submit"
                        text="Start Quiz"
                        onPress={this.startQuiz}
                    />
                    <Button
                        type="default"
                        text="Add Question"
                        onPress={this.addQuestion}
                    />
                </View>
            </View>
        );
    }
}

function mapStateToProps(decks, { navigation }) {
    const { deckTitle } = navigation.state.params;
    return {
        deck: decks[deckTitle],
        navigation
    };
}

export default connect(mapStateToProps)(DeckDetails);
