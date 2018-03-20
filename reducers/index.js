import { ADD_CARD, ADD_DECK, RECEIVE_DECKS } from '../actions';

const INITIAL_DECKS = {};

export default (decks = INITIAL_DECKS, action) => {
    switch (action.type) {
    case RECEIVE_DECKS: {
        const { decks } = action.payload;
        return decks;
    }
    case ADD_DECK: {
        const { title } = action.payload;
        return {
            ...decks,
            [title]: {
                title,
                questions: []
            }
        };
    }
    case ADD_CARD: {
        const { title, card } = action.payload;
        return {
            ...decks,
            [title]: {
                ...decks[title],
                questions: [...decks[title].questions, card]
            }
        };
    }
    default:
        return decks;
    }
};
