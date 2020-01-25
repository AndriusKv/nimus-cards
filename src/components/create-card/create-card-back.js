import React, { Fragment } from "react";
import { getRandomString } from "../../helpers";
import { useStore } from "../../context/CreateDeckContext";
import Icon from "../icon";
import TextSizeSelect from "./create-card-text-size-select";

export default function CreateCardBackSide({ index }) {
    const { state, dispatch } = useStore();
    const { back, id: cardId } = state.cards[index];
    const { type, textOptions, multiOptions, exactOptions } = back;

    function updateCardBack(payload) {
        dispatch({
            type: "UPDATE_CARD_BACK",
            index,
            payload
        });
    }

    function handleChange({ target }, key) {
        const { value } = target;

        if (value !== back[key]) {
            textOptions[key] = value;
            updateCardBack({ textOptions });
        }
    }

    function handleTypeChange({ target }) {
        updateCardBack({ type: target.value });
    }

    function addOption() {
        multiOptions.options.push({ id: getRandomString() });
        updateCardBack({ multiOptions });
    }

    function removeOption(optionIndex) {
        multiOptions.options.splice(optionIndex, 1);
        updateCardBack({ multiOptions });
    }

    function toggleUseGrid() {
        multiOptions.useGrid = !multiOptions.useGrid;
        updateCardBack({ multiOptions });
    }

    function markAnswerAsCorrect(id) {
        multiOptions.correctId = id;
        updateCardBack({ multiOptions });
    }

    function handleOptionTextChange({ target }) {
        const { name, value } = target;
        const option = multiOptions.options[name];

        if (value !== option.value) {
            option.value = value;
            updateCardBack({ multiOptions });
        }
    }

    function handleInputChange({ target }) {
        const { name, value, checked } = target;

        if (name === "caseSensitive") {
            exactOptions.caseSensitive = checked;
        }
        else {
            exactOptions.value = value;
        }
        updateCardBack({ exactOptions });
    }

    function renderTextAnswerType() {
        return (
            <textarea className="input create-side-text-input"
                value={textOptions.value}
                style={{ fontSize: `${textOptions.textSize}px` }}
                onChange={event => handleChange(event, "value")}>
            </textarea>
        );
    }

    function renderExactAnswerType() {
        return (
            <div onChange={handleInputChange}>
                <label className="creact-exact-input-container">
                    <div className="creact-exact-input-title">Provide answer:</div>
                    <input type="text" className="input creact-exact-input" name="input"
                        autoComplete="off"
                        defaultValue={exactOptions.value}/>
                </label>
                <label className="checkbox-container creact-exact-checkbox-container">
                    <input type="checkbox" className="sr-only checkbox-input"
                        name="caseSensitive"
                        defaultChecked={exactOptions.caseSensitive}/>
                    <div className="checkbox create-checkbox">
                        <div className="checkbox-tick"></div>
                    </div>
                    <span className="checkbox-label">Case sensitive</span>
                </label>
            </div>
        );
    }

    function renderMultiAnswerType() {
        return (
            <Fragment>
                <label onInput={toggleUseGrid}
                    className="checkbox-container creact-multi-checkbox-container">
                    <input type="checkbox" className="sr-only checkbox-input"
                        defaultChecked={multiOptions.useGrid}/>
                    <div className="checkbox create-checkbox">
                        <div className="checkbox-tick"></div>
                    </div>
                    <span className="checkbox-label">Use grid to display choices</span>
                </label>
                <ul>
                    {multiOptions.options.map(({ id, value }, index) => (
                        <li className="create-option" key={id}>
                            <label>
                                <input type="radio" className="sr-only radio-input" name={cardId}
                                    checked={multiOptions.correctId === id}
                                    onChange={() => markAnswerAsCorrect(id)}/>
                                <div className="radio create-option-radio"
                                    title="Mark answer as correct"></div>
                            </label>
                            <input type="text" className="input create-option-input" name={index}
                                defaultValue={value} autoComplete="off" onChange={handleOptionTextChange}/>
                            <button className="btn btn-icon" title="Remove answer"
                                onClick={() => removeOption(index)}>
                                <Icon name="remove" />
                            </button>
                        </li>
                    ))}
                </ul>
            </Fragment>
        );
    }

    function renderAnswerType(type) {
        if (type === "text") {
            return renderTextAnswerType();
        }
        else if (type === "multi") {
            return renderMultiAnswerType();
        }
        else if (type === "exact") {
            return renderExactAnswerType();
        }
        return null;
    }

    return (
        <div>
            <div className="deck-form-field-title">BACK</div>
            <div className="create-side-toolbar">
                <ul className="create-side-types" onChange={handleTypeChange}>
                    <li className="create-side-type">
                        <label>
                            <input type="radio" className="sr-only create-type-radio"
                                name={`type-${cardId}`} value="text"
                                defaultChecked={type === "text"}/>
                            <Icon name="text" title="Text" className="create-option-type-icon"/>
                        </label>
                    </li>
                    <li className="create-side-type">
                        <label>
                            <input type="radio" className="sr-only create-type-radio"
                                name={`type-${cardId}`} value="multi"
                                defaultChecked={type === "multi"}/>
                            <Icon name="list" title="Multiple choice" className="create-option-type-icon"/>
                        </label>
                    </li>
                    <li className="create-side-type">
                        <label>
                            <input type="radio" className="sr-only create-type-radio"
                                name={`type-${cardId}`} value="exact"
                                defaultChecked={type === "exact"}/>
                            <Icon name="text-short" title="Exact answer" className="create-option-type-icon"/>
                        </label>
                    </li>
                </ul>
                {type === "text" && <TextSizeSelect
                    textSize={textOptions.textSize}
                    handleChange={event => handleChange(event, "textSize")}/>
                }
                {type === "multi" && (
                    <button className="btn btn-icon" onClick={addOption} title="Add option">
                        <Icon name="add-list-item" />
                    </button>
                )}
            </div>
            <div className="create-side-content">
                {renderAnswerType(type)}
            </div>
        </div>
    );
}
