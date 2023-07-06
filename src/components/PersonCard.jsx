import React, { useState } from 'react'

const PersonCard = (props) => {
    const [state, setState] = useState({
        clickCount : 0
    });

    const handleClick = () => {
        setState({
            clickCount: state.clickCount + 1
        });
    }

    return (
        <div>
            <h1>{props.lastName}, {props.firstName}</h1>
            <p>Age : {props.age + state.clickCount}</p>
            <p>Hair Color : {props.hairColor}</p>
            <button onClick={ handleClick }>Birthday Button for {props.firstName} {props.lastName}</button>
        </div>
    )
}

export default PersonCard;