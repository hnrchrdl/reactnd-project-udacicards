import * as api from '../utils/api';

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const ADD_CARD = 'ADD_CARD';

////////// ACTION CREATORS SYNC ////////////////

// Receive a list of decks
export function receiveDecks(decks) {
    return {
        type: RECEIVE_DECKS,
        payload: {
            decks
        }
    };
}

// Add a new deck
export function addDeck(title) {
    return {
        type: ADD_DECK,
        payload: {
            title
        }
    };
}

// Add a card to a deck
export function addCard(title, card) {
    return {
        type: ADD_CARD,
        payload: {
            title,
            card
        }
    };
}

////////// ACTION CREATORS ASYNC ////////////////
export const addCardAsync = dispatch => (title, card) => {
    return api.addCardToDeck(title, card).then(() => {
        dispatch(addCard(title, card));
    });
};

export const addDeckAsync = dispatch => title => {
    return api.addDeck(title).then(() => {
        dispatch(addDeck(title));
    });
};

export const getDecksAsync = dispatch => () => {
    return api.getDecks().then(decks => {
        dispatch(receiveDecks(decks));
    });
};
