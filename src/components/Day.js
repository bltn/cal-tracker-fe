import React from "react";
import MealEntry from "./MealEntry";

export default class Day extends React.Component {
    render() {
        const mealEntryComponents = this.props.mealEntries.map((mealEntry) => {
            return <MealEntry key={mealEntry.name} name={mealEntry.name} calories={mealEntry.calories}/>
        });

        return (
            <table>
                <caption><span className="dayName">{this.props.name}</span><span className="addNewMealEntry">+ Add entry</span></caption>
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