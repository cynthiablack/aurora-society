import React from "react"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

function KeyData(props) {
    const value = props.value;
    const [isShown, setIsShown] = React.useState(false)
    const handleClick = event => {
        setIsShown(current => !current)
        alert(props.alert);
    }


    return (
        <>
        <div className={props.lightMode ? "data-contents light" : "data-contents"}>
            <CircularProgressbar
                value={value}
                maxValue={props.maxValue}
                text={`${value}`}
                className={props.color}
            />
            <div className="data-text">
                <h3>{props.title}</h3>
                <p>{props.additionalData}</p>
                <button className={props.lightMode ? "show-key light" : "show-key"} onClick={handleClick}>about {props.title}</button>
            </div>
        </div>
        </>
    )
}

export default KeyData