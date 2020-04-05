import React from "react";

export default class CreateDayForm extends React.Component {
    handleChange = (event) => {
        this.setState({dayName: event.target.value});
    };

    render() {
        const formClasses = `create-day-form ${this.props.isVisible ? "" : "invisible"}`;
        const spanClasses = "pointer-hover cancel";
        const submitClasses = "create-day-btn green-btn pointer-hover";

        return (
            <form className={formClasses} onSubmit={this.props.onSubmit}>
                <input name="dayName" type="text" placeholder="Day name" onChange={this.handleChange}/>
                <br/>
                <span className={spanClasses} onClick={this.props.hideForm}>Cancel</span>
                <input type="submit" className={submitClasses}/>
            </form>
        )
    }
}
