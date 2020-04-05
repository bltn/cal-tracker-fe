import React from "react";
import MealEntry from "../MealEntry/MealEntry";

export default class Day extends React.Component {
    render() {
        const mealEntryComponents = this.props.mealEntries.map((mealEntry) => {
            return <MealEntry key={mealEntry.id} name={mealEntry.name} calories={mealEntry.calories}/>
        });

        const newMealEntrySpanClasses = "pointer-hover addNewMealEntry";
        const dayNameSpanClasses = "dayName";
        const newMealEntryText = "+ Add meal entry";

        return (
            <table>
                <caption>
                    <span className={dayNameSpanClasses}>{this.props.name}</span>
                    <span className={newMealEntrySpanClasses}>{newMealEntryText}</span>
                </caption>
                <thead>
                <tr>
                    <th>Meal name</th>
                    <th>Calories</th>
                </tr>
                </thead>
                <tbody>
                { mealEntryComponents }
                </tbody>
            </table>
        )
    }
}