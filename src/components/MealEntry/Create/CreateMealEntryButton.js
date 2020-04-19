import React from "react";

export default class CreateMealEntryButton extends React.Component {
    render() {
        const newMealEntrySpanClasses = `add-new-meal-entry green-btn pointer-hover ${this.props.isVisible ? "" : "invisible"}`;
        const newMealEntryText = "Add meal entry";

        return (
            <button onClick={this.props.onClick} className={newMealEntrySpanClasses}>{newMealEntryText}</button>
        )
    }
}