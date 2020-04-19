import React from "react";
import MealEntry from "../MealEntry/MealEntry";
import DeleteDay from "./Delete/DeleteDay";
import CreateMealEntry from "../MealEntry/Create/CreateMealEntry";

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

    render() {
        const mealEntryComponents = this.state.mealEntries.map((mealEntry) => {
            return <MealEntry key={mealEntry.id} id={mealEntry.id} name={mealEntry.name} calories={mealEntry.calories}/>
        });

        const dayNameSpanClasses = "dayName";

        return (
            <div className="table-wrapper">
                <table>
                    <caption>
                        <span className={dayNameSpanClasses}>{this.props.name}</span>
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
                    <tfoot>
                    <tr>
                        <td/>
                        <td valign="bottom" align="right">
                            <CreateMealEntry dayId={this.props.id} onMealEntryCreated={this.handleMealEntryCreated}/>
                        </td>
                    </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}