import React from "react";

export default function CreateDayButton(props) {
    const text = "Add a new day";

    return (
        <button onClick={props.onClick} className={`green-btn pointer-hover ${props.isVisible ? "" : "invisible"}`}>
            {text}
        </button>
    )
}
