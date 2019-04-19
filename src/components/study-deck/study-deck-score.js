import React from "react";
import { Link } from "react-router-dom";
import StudyScoreBar from "./study-deck-score-bar";

export default function StudyDeckScore({ score, mode, initNextLevel }) {
    const { session } = score;

    function getLeitnerBtnText() {
        let level = score.currentLevel + 1;

        if (score.wrong) {
            level -= level > 1 ? 1 : 0;
        }
        else {
            level += 1;
        }
        return `Continue to Level ${level}`;
    }

    return (
        <div className="deck-score-container">
            <h3 className="deck-score-title">Session Results</h3>
            <div className="deck-score-in-percent">{Math.round(session.right / session.total * 100)}%</div>
            <div className="deck-score-bars">
                <div className="deck-score-bar-container">
                    <span className="deck-score-bar-name">Right</span>
                    <div className="deck-score-bar">
                        <StudyScoreBar score={session} name="right" />
                    </div>
                </div>
                <div className="deck-score-bar-container">
                    <span className="deck-score-bar-name">Wrong</span>
                    <div className="deck-score-bar">
                        <StudyScoreBar score={session} name="wrong" />
                    </div>
                </div>
            </div>
            <div className="deck-score-btn-container">
                {!score.isLast && (
                    <button className="btn deck-score-btn" onClick={initNextLevel}>
                        {mode === "standard" ? "Next Round" : getLeitnerBtnText()}
                    </button>
                )}
                <Link to="/decks" className="btn">Close</Link>
            </div>
        </div>
    );
}
