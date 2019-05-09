import React, { useEffect, useContext, useState } from "react";
import { CreateDeckContext, CreateDeckProvider } from "../context/CreateDeckContext";
import { getRandomString } from "../helpers";
import { fetchDecks } from "../services/db";
import Card from "./create-card/create-card";

function CreateDeck(props) {
    const { state, dispatch } = useContext(CreateDeckContext);
    const [formMessage, setFormMessage] = useState("");
    let messageTimeout = 0;

    useEffect(() => {
        clearTimeout(messageTimeout);
        messageTimeout = setTimeout(() => {
            setFormMessage("");
        }, 3200);

        return () => {
            clearTimeout(messageTimeout);
        };
    }, [formMessage]);

    useEffect(() => {
        const { id } = props.match.params;

        if (id && !props.location.state) {
            fetchDecks().then(decks => {
                const deck = findDeck(decks, id);

                if (deck) {
                    dispatch({ type: "RESET_DECK", deck });
                }
            });
        }
        else {
            dispatch({ type: "RESET_DECK", deck: getDeck(props.location.state) });
        }
    }, []);

    function findDeck(decks, deckId) {
        return decks.find(({ id }) => id === deckId);
    }

    function getDeck(deck = {}) {
        return {
            id: getRandomString(),
            title: "",
            description: "",
            cards: [getNewCard()],
            ...deck
        };
    }

    function getNewCard() {
        return {
            id: getRandomString(),
            front: {
                text: "",
                textSize: 16
            },
            back: {
                type: "text",
                text: "",
                textSize: 16,
                input: "",
                correct: 0,
                options: [
                    { id: getRandomString() },
                    { id: getRandomString() }
                ]
            }
        };
    }

    function addCard() {
        const lastCard = state.cards[state.cards.length - 1];
        const card = getNewCard();

        if (lastCard) {
            card.front.textSize = lastCard.front.textSize;
            card.back.textSize = lastCard.back.textSize;
            card.back.type = lastCard.back.type;
        }
        dispatch({ type: "ADD_CARD", card });
    }

    function isFrontValid(side) {
        return side.text || side.attachment;
    }

    function isBackValid(side) {
        if (side.type === "text") {
            return side.text.length > 0;
        }
        else if (side.type === "exact") {
            return side.input.length > 0;
        }
        const validOptionCount = side.options.reduce((acc, { text }) => {
            if (text) {
                acc += 1;
            }
            return acc;
        }, 0);
        return validOptionCount > 1;
    }

    function validateCards(cards) {
        let validCardCount = 0;

        for (const { front, back } of cards) {
            if (isFrontValid(front) && isBackValid(back)) {
                validCardCount += 1;
            }
        }

        if (validCardCount !== cards.length) {
            setFormMessage("Please fill in both card sides");
        }
        else if (validCardCount < 2) {
            setFormMessage("Please fill in at least two cards");
        }
        else {
            return true;
        }
    }

    function handleChange({ target }) {
        const { name, value } = target;

        dispatch({ type: "UPDATE_DECK", name, value });
    }

    function cleanupCards(cards) {
        return cards.map(card => {
            if (card.back.type === "multi") {
                card.back.text = "";
                card.back.input = "";
                card.back.caseSensitive = false;
                card.back.options = card.back.options.filter(({ text }) => text);
                return card;
            }
            card.back.correct = 0;
            card.back.options = card.back.options.slice(0, 2).map((option => {
                option.text = "";
                return option;
            }));

            if (card.back.type === "text") {
                card.back.input = "";
                card.back.caseSensitive = false;
            }
            else if (card.back.type === "exact") {
                card.back.input = card.back.input.trim();
                card.back.text = "";
            }
            return card;
        });
    }

    function handleSubmit() {
        if (!state.title) {
            setFormMessage("Title is required");
            return;
        }
        const valid = validateCards(state.cards);

        if (valid) {
            state.cards = cleanupCards(state.cards);
            props.history.push({
                pathname: "/decks",
                state
            });
        }
    }

    return (
        <React.Fragment>
            <div className="create-input-group">
                <label className="create-input-label">
                    <div className="create-side-name">TITLE</div>
                    <input className="input create-title-input"
                        name="title"
                        value={state.title}
                        onChange={handleChange} />
                </label>
                <label className="create-input-label">
                    <div className="create-side-name">DESCRIPTION (OPTIONAL)</div>
                    <textarea className="input side-text create-description-input"
                        name="description"
                        value={state.description}
                        onChange={handleChange}></textarea>
                </label>
            </div>
            <ul>{state.cards.map((card, index) => <Card key={card.id} index={index} card={card} />)}</ul>
            <div className="container-footer create-footer">
                <button className="btn" onClick={addCard}>New Card</button>
                {formMessage && <span className="create-message">{formMessage}</span>}
                <button className="btn" onClick={handleSubmit}>Create</button>
            </div>
        </React.Fragment>
    );
}

export default function CreateDeckContainer(props) {
    return (
        <CreateDeckProvider>
            <CreateDeck {...props} />
        </CreateDeckProvider>
    );
}