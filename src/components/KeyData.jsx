import React from "react"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

function KeyData(props) {
    const value = props.value;
    const [isShown, setIsShown] = React.useState(false)
    const handleClick = event => {
        setIsShown(current => !current)
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
                <button className={props.lightMode ? "show-key light" : "show-key"} onClick={handleClick}>show key</button>
            </div>
        </div>
            {isShown && (
                <div className="modal">
                    <table>
                        <title>Key</title>
                        <tr>
                            <th colspan="2">KP Index Range</th>
                            <th>storm strength</th>
                            <th>aurora may be visible below</th>
                            <th>colors</th>
                            <th>intensity</th>
                        </tr>
                        <tr>
                            <td>KP0</td>
                            <td>KP1</td>
                            <td>quiet</td>
                            <td>64&deg; lattitude</td>
                            <td>green</td>
                            <td>faint glow</td>
                        </tr>
                        <tr>
                            <td>KP2</td>
                            <td>KP3</td>
                            <td>quiet</td>
                            <td>60&deg; lattitude</td>
                            <td>+ yellow</td>
                            <td>glow with possible movement</td>
                        </tr>
                        <tr>
                            <td>KP4</td>
                            <td>KP5</td>
                            <td>minor</td>
                            <td>56&deg; lattitude</td>
                            <td>+ pink, purple, blue</td>
                            <td>active movement</td>
                        </tr>
                        <tr>
                            <td>KP6</td>
                            <td>KP7</td>
                            <td>moderate</td>
                            <td>52&deg; lattitude</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>KP8</td>
                            <td>KP9</td>
                            <td>strong</td>
                            <td>48&deg; lattitude</td>
                            <td>+ red</td>
                            <td></td>
                        </tr>
                    </table>
                </div>
            )}
        
        </>
    )
}

export default KeyData