import React from "react";

export default class MealEntry extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.calories}</td>
            </tr>
        )
    }
}