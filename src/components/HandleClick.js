import React, {useContext} from "react";
import ColorContext from "../context/color-context";

// handleClick = (e) => {
//     const el = parseInt(e)        
//     let s = this.state.switch[el];
//     let copy = [...this.state.switch]; // create a shallow copy of the array that is going to be modified
//     copy.splice(el, 1, !s); // modify the element of the copied array
//     this.setState( {
//         switch: copy // set the modified array as the new one
//     })
//     console.log(this.state.switch) // debugging :)
// }

export { HandleClick as default};