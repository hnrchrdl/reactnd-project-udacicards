import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import GLOBAL_STYLES from '../utils/styles';
import Button from './Button';
import * as colors from '../utils/colors';
import { resetNotifications } from '../utils/notifications';

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAnswer: false,
            questionIndex: 0,
            countCorrect: 0
        };
        this.submitAnswer = this.submitAnswer.bind(this);
        this.goBack = this.goBack.bind(this);
        this.reset = this.reset.bind(this);
    }
    submitAnswer(correct) {
        const { countCorrect, questionIndex } = this.state;
        this.setState({
            questionIndex: questionIndex + 1,
            countCorrect: correct ? countCorrect + 1 : countCorrect,
            showAnswer: false
        });
    }
    reset() {
        this.setState({
            showAnswer: false,
            questionIndex: 0,
            countCorrect: 0
        });
    }
    goBack() {
        const { navigation } = this.props;
        navigation.goBack();
    }
    renderResults() {
        const { countCorrect } = this.state;
        const { deck } = this.props;

        // Cancel notifications for today, because a quiz was finished.
        resetNotifications();

        return (
            <View style={styles.center}>
                <Text
                    style={[
                        GLOBAL_STYLES.defaulttext,
                        styles.results,
                        styles.resultsHeader
                    ]}
                >
                    Your Score:
                </Text>
                <Text style={[GLOBAL_STYLES.defaulttext, styles.results]}>
                    {(countCorrect / deck.questions.length * 100).toFixed(0)}
                    %
                </Text>
                <View style={styles.btnWrapper}>
                    <Button
                        type="default"
                        text="Restart Quiz"
                        onPress={this.reset}
                    />
                    <Button
                        type="default"
                        text="Back to Deck"
                        onPress={this.goBack}
                    />
                </View>
            </View>
        );
    }
    renderQuestion() {
        const { questionIndex } = this.state;
        const { deck } = this.props;
        const questions = deck.questions;
        const card = questions[questionIndex];
        const { question, answer } = card;
        const { showAnswer } = this.state;
        return (
            <View>
                <View style={styles.right}>
                    <Text style={GLOBAL_STYLES.defaulttext}>
                        {questionIndex + 1} / {questions.length}
                    </Text>
                </View>
                <Text style={[GLOBAL_STYLES.defaulttext, styles.question]}>
                    {question}
                </Text>
                {showAnswer ? (
                    <Text style={[GLOBAL_STYLES.defaulttext, styles.answer]}>
                        {answer}
                    </Text>
                ) : (
                    <Text
                        style={[
                            GLOBAL_STYLES.defaulttext,
                            styles.answer,
                            styles.textBtn
                        ]}
                        onPress={() => this.setState({ showAnswer: true })}
                    >
                        Show Answer
                    </Text>
                )}
                <View>
                    <Button
                        type="yes"
                        text="Correct"
                        onPress={() => this.submitAnswer(true)}
                    />
                    <Button
                        type="no"
                        text="Incorrect"
                        onPress={() => this.submitAnswer(false)}
                    />
                </View>
            </View>
        );
    }
    render() {
        const { questionIndex } = this.state;
        const { deck } = this.props;
        const questions = deck.questions;
        return (
            <ScrollView
                style={[GLOBAL_STYLES.container]}
                contentContainerStyle={styles.scrollContainer}
            >
                {questionIndex >= questions.length
                    ? this.renderResults()
                    : this.renderQuestion()}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    question: {
        padding: 20,
        fontSize: 30
    },
    answer: {
        padding: 20,
        marginBottom: 30,
        fontSize: 20
    },
    textBtn: {
        textAlign: 'center',
        color: colors.HIGHLIGHT
    },
    btnWrapper: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'center'
    },

    center: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    right: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    results: {
        fontSize: 30,
        textAlign: 'center'
    },
    resultsHeader: {
        fontSize: 25,
        color: colors.FOREGROUND_ALT
    },
    scrollContainer: {
        paddingBottom: 50
    }
});
function mapStateToProps(decks, { navigation }) {
    const { deckTitle } = navigation.state.params;
    return {
        deckTitle,
        deck: decks[deckTitle]
    };
}
export default connect(mapStateToProps)(Quiz);
