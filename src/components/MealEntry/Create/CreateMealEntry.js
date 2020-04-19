import React from "react";
import CreateMealEntryButton from "./CreateMealEntryButton";
import CreateMealEntryForm from "./CreateMealEntryForm";
import RequestUtils from "../../../utils/RequestUtils";
import {URL, postMealEntryPath} from "../../../constants/ApiConstants";

export default class CreateMealEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLinkVisible: true,
            isFormVisible: false
        }
    }

    handleShowForm = () => {
        this.setState({
            isLinkVisible: false,
            isFormVisible: true

        })
    };

    handleHideForm = () => {
        this.setState({
            isLinkVisible: true,
            isFormVisible: false

        })
    };

    handleFormSubmit = async (event) => {
        event.preventDefault();

        const mealName = event.target.name.value;
        const calories = event.target.calories.value;
        const body = JSON.stringify({meal_entry: {name: mealName, calories: calories}});

        const response = await RequestUtils.submitPostRequest(URL + postMealEntryPath(this.props.dayId), body);
        const data = await response.json();

        if (response.status === 200) {
            this.handleHideForm();
            this.props.onMealEntryCreated(data.meal_entry.id, data.meal_entry.name, data.meal_entry.calories);
        }
    };

    render() {
        return (
            <React.Fragment>
                <CreateMealEntryButton
                    isVisible={this.state.isLinkVisible}
                    onClick={this.handleShowForm}/>

                <CreateMealEntryForm
                    isVisible={this.state.isFormVisible}
                    hideForm={this.handleHideForm}
                    onSubmit={this.handleFormSubmit}/>
            </React.Fragment>
        )
    }
}