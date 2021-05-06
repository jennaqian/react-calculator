import React from 'react'

function Display(props) {
    const {display} = props;

    return (
        <div>
            <input type="text" value={display} className="displayInput"></input>
        </div>
    )
}

export default Display;
