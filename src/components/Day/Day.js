import React from "react";
import MealEntry from "../MealEntry/MealEntry";
import DayTable from "./Table/DayTable";

export default class Day extends React.Component {
    constructor(props) {
        super(props);
        this.state = { mealEntries: this.props.mealEntries }
    }

    handleMealEntryCreated = (mealId, mealName, calories) => {
        const newMealEntry = {id: mealId, name: mealName, calories: calories};
        const newMealEntries = [...this.state.mealEntries, newMealEntry];

        this.setState({
            mealEntries: newMealEntries
        });
    };

    handleMealEntryDeleted = (mealEntryId) => {
        const newMealEntries = [...this.state.mealEntries].filter(mealEntry => mealEntry.id !== mealEntryId);

        this.setState({
            mealEntries: newMealEntries
        });
    };

    render() {
        const mealEntryComponents = this.state.mealEntries.map((mealEntry) => {
            return <MealEntry
                key={mealEntry.id}
                id={mealEntry.id}
                name={mealEntry.name}
                calories={mealEntry.calories}
                dayId={this.props.id}
                onMealEntryDeleted={this.handleMealEntryDeleted}/>
        });

        const getTotalCalories = () => {
            if (this.state.mealEntries.length === 0) {
                return 0;
            }
            return this.state.mealEntries.map(mealEntry => mealEntry.calories).reduce((a, b) => a + b);
        };

        return (
            <div className="table-wrapper">
                <DayTable
                    id={this.props.id}
                    key={this.props.key}
                    name={this.props.name}
                    totalCalories={getTotalCalories()}
                    onDayDeleted={this.props.onDayDeleted}
                    mealEntryComponents={mealEntryComponents}
                    onMealEntryCreated={this.handleMealEntryCreated}/>
            </div>
        )
    }
}