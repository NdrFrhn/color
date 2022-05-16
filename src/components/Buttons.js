import React, {useState} from "react";

const Buttons = () => {
    const [ bool, setBool ] = useState([ false, false, false]); // bool stand for switch
    const [ color, setColor ] = useState([ 'red', 'yellow', 'blue']);
    const [ colorComb, setColorComb] = useState([ 'green', 'violet', 'orange']);

    const HandleClick = (e) => {
        const el = parseInt(e)        
        let s = bool[el];
        let copy = [...bool]; // create a shallow copy of the array that is going to be modified
        copy.splice(el, 1, !s); // modify the element of the copied array
        setBool( 
            bool => copy // set the modified array as the new one
        )
    }

    return (
        <>
        <button
            value='0'
            className={bool[0] ? "new" : "red"}
            onClick={(e) => HandleClick(e.target.value)}
        >
            {bool[0] ? colorComb[0] : color[0]}
        </button>
        <button
            value='1'
            className={bool[1] ? "new2" : "yellow"}
            onClick={(e) => HandleClick(e.target.value)}
        >
            {bool[1] ? colorComb[1] : color[1]}
        </button>
        <button
            value='2'
            className={bool[2] ? "new3" : "blue"}
            onClick={(e) => HandleClick(e.target.value)}
        >
            {bool[2] ? colorComb[2] : color[2]}
        </button>
        </>
    )
}

export { Buttons as default};