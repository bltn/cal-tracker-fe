import React from "react";
import DeleteDay from "../Delete/DeleteDay";
import CreateMealEntry from "../../MealEntry/Create/CreateMealEntry";

export default class DayTable extends React.Component {
    render() {
        const noMealEntryComponents = this.props.mealEntryComponents.length === 0;
        const visibilityToggle = noMealEntryComponents ? "invisible" : "";

        return (
            <table>
                <caption>
                    <span className="dayName">{this.props.name}</span>
                    <DeleteDay key={this.props.id} id={this.props.id} onDayDeleted={this.props.onDayDeleted}/>
                </caption>
                <thead className={visibilityToggle}>
                <tr>
                    <th>Meal name</th>
                    <th>Calories</th>
                </tr>
                </thead>
                <tbody className={visibilityToggle}>
                {this.props.mealEntryComponents}
                </tbody>
                <tfoot>
                <tr>
                    <td className={visibilityToggle} valign="middle" align="left">Total : {this.props.totalCalories}</td>
                    <td valign="bottom" align="right">
                        <CreateMealEntry dayId={this.props.id} onMealEntryCreated={this.props.onMealEntryCreated}/>
                    </td>
                </tr>
                </tfoot>
            </table>
        )
    }
}