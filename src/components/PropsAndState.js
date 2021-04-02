import React, { useState } from "react"

export const PropsAndState = ({ yourName }) => {
    let [countClicks, setCountClicks] = useState(0)
    // isHidden is a variable, setIsHidden is a function that targets that variable.
    // in useState(false), false becomes the default value of isHidden 
    let [isHidden, setIsHidden] = useState(false)
    //
    const handleClick = () => {
        //make a copy of state, modify it, and then setState to the copy
        const newCountClicks = ++countClicks
        setCountClicks(newCountClicks)
    }

    const handleHide = () => {
        //if isHidden is true, setIsHidden(false) changes it to false
        if (isHidden) {
            setIsHidden(false)
        } else {
            setIsHidden(true)
        }
    }


    return (
        <>
            <h3>Welcome, {yourName} </h3>
            <p>{countClicks}</p>
            <button onClick={(handleClick)}>Click Me</button>
            {/* When the button is clicked, the function inside onClick will run  */}
            <button onClick={handleHide}>Hide/Show</button>
            <div hidden={isHidden}>Hello</div>
        </>
    )
}