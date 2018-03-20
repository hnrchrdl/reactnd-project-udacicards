import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import GLOBAL_STYLES from '../utils/styles';
import Button from './Button';
import { HIGHLIGHT } from '../utils/colors';
import * as colors from '../utils/colors';

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAnswer: false
        };
        this.submitAnswer = this.submitAnswer.bind(this);
    }
    submitAnswer(correct) {
        console.log(correct);
    }
    render() {
        const { question, answer } = this.props;
        const { showAnswer } = this.state;
        return (
            <View style={GLOBAL_STYLES.container}>
                <View>
                    <Text style={[GLOBAL_STYLES.defaulttext, styles.question]}>
                        {question}
                    </Text>
                    {!showAnswer && (
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
                    {showAnswer && (
                        <Text
                            style={[GLOBAL_STYLES.defaulttext, styles.answer]}
                        >
                            {answer}
                        </Text>
                    )}
                    <View style={styles.btnWrapper}>
                        <Button
                            type="yes"
                            text="yes"
                            onPress={() => this.submitAnswer(true)}
                        />
                        <Button
                            type="no"
                            text="no "
                            onPress={() => this.submitAnswer(false)}
                        />
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    question: {
        padding: 20,
        fontSize: 30
    },
    answer: {
        margin: 30,
        fontSize: 20
    },
    textBtn: {
        textAlign: 'center',
        color: colors.HIGHLIGHT
    },
    btnWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});
function mapStateToProps(state, { navigation }) {
    const { deckTitle } = navigation.state.params;
    return {
        deckTitle,
        navigation,
        question: 'Question',
        answer: 'Answer'
    };
}
function mapDispatchToProps() {
    return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
