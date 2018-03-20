import { AsyncStorage } from 'react-native';

const DECK_STORAGE_KEY = 'hnrchrdl:udacicards:decks2';

export function getDeck(id) {
    // Return a Deck by it's title
    return getDecks().then(decks => decks[id]);
}

export function getDecks() {
    // Returns all available decks.
    return AsyncStorage.getItem(DECK_STORAGE_KEY).then(JSON.parse);
}

export function addDeck(title) {
    // Merge a new deck with empty list of questions to storage
    return AsyncStorage.mergeItem(
        DECK_STORAGE_KEY,
        JSON.stringify({
            [title]: { title, questions: [] }
        })
    ).then(data => {
        return data;
    });
}
export function addCardToDeck(title, card) {
    // Retrieve a deck by it's title, add card to list of questions
    // and merge card back in
    return getDeck(title).then(deck => {
        const questions = [...deck.questions, card];
        return AsyncStorage.mergeItem(
            DECK_STORAGE_KEY,
            JSON.stringify({
                [title]: { ...deck, questions }
            })
        );
    });
}
