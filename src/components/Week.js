import React from "react";
import Day from "./Day";

export default class Week extends React.Component {
    constructor(props) {
        super(props);
        this.state = { days: [] };
    }

    componentDidMount() {
        fetch('http://localhost:3000/days').then(res => res.json()).then(result => {
            this.setState({days: result})
        });
    }

    render() {
        console.log(`STATE: ${JSON.stringify(this.state)}`);
        const dayComponents = this.state.days.map((day) => {
            return <Day key={day.name} name={day.name} mealEntries={day.meal_entries}/>
        });

        return (
            <React.Fragment>
                <h1>Meal entries</h1>
                { dayComponents }
            </React.Fragment>
        );
    }
}
