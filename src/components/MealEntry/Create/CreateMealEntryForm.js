import React from "react";

export default class CreateMealEntryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            calories: 0,
        }
    }

    handleNameChange = (event) => {
        const calories = this.state.calories;
        this.setState({
            name: event.target.value,
            calories: calories
        });
    };

    handleCaloriesChange = (event) => {
        const name = this.state.name;
        this.setState({
            name: name,
            calories: event.target.value
        });
    };

    render() {
        const formClasses = `create-meal-entry-form ${this.props.isVisible ? "" : "invisible"}`;
        const spanClasses = "cancel-new-meal-entry pointer-hover red-underline-txt";
        const submitClasses = "create-meal-entry-btn green-btn pointer-hover";

        return (
            <form className={formClasses} onSubmit={this.props.onSubmit}>
                <input className="name"
                       name="name"
                       type="text"
                       placeholder="Meal name"
                       required={true}
                       onChange={this.handleNameChange}/>

               <input className="calories"
                       name="calories"
                       type="number"
                       placeholder="Calories"
                       required={true}
                       onChange={this.handleCaloriesChange}/><br/>

                <span className={spanClasses} onClick={this.props.hideForm}>Cancel</span>
                <input type="submit" className={submitClasses}/>
            </form>
        )
    }
}