import React from "react"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

function PercentageData(props) {
    const percentage = props.value;

    return (
        <div className="data--contents">
            <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                className={props.color}
            />
            <div className="data--text">
                <h3>{props.title}</h3>
                <p>{props.additionalData}</p>
            </div>
        </div>
    )
}

export default PercentageData