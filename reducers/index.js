import { ADD_CARD, ADD_DECK, RECEIVE_DECKS } from '../actions';

const INITIAL_DECKS = {
    decks: []
};

export function deckReducer(state = INITIAL_DECKS, action) {
    switch (action.type) {
    case RECEIVE_DECKS: {
        const { decks } = action.payload;
        return {
            ...state,
            decks
        };
    }
    case ADD_DECK: {
        const { title } = action.payload;
        return {
            ...state,
            decks: [
                ...state.decks,
                {
                    title,
                    questions: []
                }
            ]
        };
    }
    case ADD_CARD: {
        const { title, card } = action.payload;
        return {
            ...state,
            decks: [
                ...state.decks.map(deck => {
                    if (deck.title === title) {
                        deck.questions = [...deck.questions, card];
                    }
                    return deck;
                })
            ]
        };
    }
    default:
        return state;
    }
}
