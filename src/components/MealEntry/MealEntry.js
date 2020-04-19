import React from "react";
import RequestUtils from "../../utils/RequestUtils";
import {deleteMealEntryPath, URL} from "../../constants/ApiConstants";

export default class MealEntry extends React.Component {

    handleClick = async () => {
        const dayId = this.props.dayId;
        const mealEntryId = this.props.id;
        const response = await RequestUtils.submitDeleteRequest(URL + deleteMealEntryPath(dayId, mealEntryId));

        if (response.status === 200) {
            this.props.onMealEntryDeleted(mealEntryId);
        }
    };

    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>
                    {this.props.calories}
                    <span className='delete-meal-entry' onClick={this.handleClick}>x</span>
                </td>
            </tr>
        )
    }
}