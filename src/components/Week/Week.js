import React from "react";
import Day from "../Day/Day";
import CreateDay from "../Day/Create/CreateDay";
import {URL, GET_DAYS_PATH} from "../../constants/ApiConstants";

export default class Week extends React.Component {
    constructor(props) {
        super(props);
        this.state = { days: [] };
    }

    componentDidMount() {
        fetch(URL + GET_DAYS_PATH).then(res => res.json()).then(result => {
            this.setState({days: result})
        });
    }

    handleDayCreated = (dayJson) => {
        const newDays = [...this.state.days, dayJson];
        this.setState({ days: newDays });
    };

    handleDayDeleted = (dayId) => {
        const newDays = [...this.state.days].filter(day => day.id !== dayId);
        this.setState({ days: newDays });
    };

    render() {
        const dayComponents = this.state.days.map((day) => {
            return <Day key={day.id} id={day.id} name={day.name} onDayDeleted={this.handleDayDeleted} mealEntries={day.meal_entries}/>
        });

        return (
            <React.Fragment>
                <h1>Meal entries</h1>
                <CreateDay onDayCreated={this.handleDayCreated}/>
                { dayComponents }
            </React.Fragment>
        );
    }
}
