import React from "react";
import CreateDayButton from "./CreateDayButton";
import CreateDayForm from "./CreateDayForm";
import {URL, POST_DAY_PATH} from "../../../constants/ApiConstants";
import RequestUtils from "../../../utils/RequestUtils";

export default class CreateDay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isButtonVisible: true,
            isFormVisible: false
        }
    }

    handleShowForm = () => {
        this.setState({
            isButtonVisible: false,
            isFormVisible: true
        })
    };

    handleHideForm = () => {
        this.setState({
            isButtonVisible: true,
            isFormVisible: false
        })
    };

    handleFormSubmit = async (event) => {
        event.preventDefault();

        const dayName = event.target.dayName.value;
        const body = JSON.stringify({day: {name: dayName}});

        const response = await RequestUtils.submitPostRequest(URL + POST_DAY_PATH, body);
        const data = await response.json();

        if (response.status === 200) {
            this.handleHideForm();
            this.props.onDayCreated(data.day);
        }
    };

    render() {
        return (
            <div className="create-day-wrapper">
                <CreateDayButton isVisible={this.state.isButtonVisible} onClick={this.handleShowForm}/>
                <CreateDayForm isVisible={this.state.isFormVisible} hideForm={this.handleHideForm} onSubmit={this.handleFormSubmit}/>
            </div>
        )
    }
}