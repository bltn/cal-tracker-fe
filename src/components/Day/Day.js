import React from "react";
import MealEntry from "../MealEntry/MealEntry";
import DeleteDay from "./Delete/DeleteDay";

export default class Day extends React.Component {
    render() {
        const mealEntryComponents = this.props.mealEntries.map((mealEntry) => {
            return <MealEntry key={mealEntry.id} id={mealEntry.id} name={mealEntry.name} calories={mealEntry.calories}/>
        });

        const newMealEntrySpanClasses = "add-new-meal-entry pointer-hover";
        const dayNameSpanClasses = "dayName";
        const newMealEntryText = "Add meal entry";

        return (
            <table>
                <caption>
                    <span className={dayNameSpanClasses}>{this.props.name}</span>
                    <span className={newMealEntrySpanClasses}>{newMealEntryText}</span>
                    <DeleteDay key={this.props.id} id={this.props.id} onDayDeleted={this.props.onDayDeleted}/>
                </caption>
                <thead>
                <tr>
                    <th>Meal name</th>
                    <th>Calories</th>
                </tr>
                </thead>
                <tbody>
                {mealEntryComponents}
                </tbody>
            </table>
        )
    }
}