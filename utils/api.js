import { AsyncStorage } from 'react-native';

const DECK_STORAGE_KEY = 'hnrchrdl:udacicards:decks';

export function getDeck(id) {
    // Return a Deck by it's title.
    return getDecks().then(decks => {
        return decks[id] || null;
    });
}

export function getDecks() {
    // Returns all available decks.
    return AsyncStorage.getItem(DECK_STORAGE_KEY).then(data => {
        if (!data) {
            // Initialize Async Storage when there is no data
            AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify({}));
            return {};
        }
        return JSON.parse(data);
    });
}

export function addDeck(title) {
    // Merge a new deck with empty list of questions to storage.
    return AsyncStorage.mergeItem(
        DECK_STORAGE_KEY,
        JSON.stringify({
            [title]: { title, questions: [] }
        })
    );
}
export function addCardToDeck(title, card) {
    // Retrieve a deck by it's title, add card to list of questions
    // and merge card back in
    return getDeck(title).then(deck => {
        const questions = deck ? [...(deck.questions || []), card] : [card];
        return AsyncStorage.mergeItem(
            DECK_STORAGE_KEY,
            JSON.stringify({
                [title]: { ...deck, questions }
            })
        );
    });
}
