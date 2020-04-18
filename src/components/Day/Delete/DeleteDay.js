import React from "react";
import RequestUtils from "../../../utils/RequestUtils";
import {URL, DELETE_DAY_PATH} from "../../../constants/ApiConstants";

export default class DeleteDay extends React.Component {

    handleClick = async () => {
        const dayId = this.props.id;
        const response = await RequestUtils.submitDeleteRequest(URL + DELETE_DAY_PATH + dayId);

        if (response.status === 200) {
            this.props.onDayDeleted(dayId);
        }
    };

    render() {
        const deleteDayText = "Delete day";
        const deleteDayClasses = "delete-day pointer-hover";

        return (
            <span onClick={this.handleClick} className={deleteDayClasses}>{deleteDayText}</span>
        )
    }
}