import React from "react"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

function Data(props) {
    const percentage = props.percentage;

    return (
        <div className="data--contents">
            <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={{
                    path: {
                        stroke: `{props.color}`
                    }
                }}
            />
            <div className="data--text">
                <h3>Data Title</h3>
                <p>Additional Data</p>
            </div>
        </div>
    )
}

export default Data