import React from 'react'

function Display(props) {
    const {display} = props;

    return (
        <div>
            {/* <input value={display} className="displayInput"></input> */}
            <p className="displayInput">{new Intl.NumberFormat("en").format(display)}</p>
        </div>
    )
}

export default Display;
