import React from "react";
// import HandleClick from "./HandleClick1";
// import ColorContext from "../context/color-context";
import Header from "./Header";

class ColorUpgrade extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            switch: [ false, false, false],
            color: [ 'red', 'yellow', 'blue'],
            colorComb: [ 'green', 'violet', 'orange']
        }
    }

    handleClick = (e) => {
        const el = parseInt(e)        
        let s = this.state.switch[el];
        let copy = [...this.state.switch]; // create a shallow copy of the array that is going to be modified
        copy.splice(el, 1, !s); // modify the element of the copied array
        this.setState( {
            switch: copy // set the modified array as the new one
        })
        console.log(this.state.switch) // debugging :)
    }
    
    render() {
        return (
            // <ColorContext.Provider value={ this.state }> 
            <div className="container">
                {/* <HandleClick pass = {this.state} /> */}
                <Header/>
                <button 
                    value='0'
                    className={this.state.switch[0] ? "new" : "red"} 
                    onClick={(e) => this.handleClick(e.target.value)}
                    >
                    {this.state.switch[0] ? this.state.colorComb[0] : this.state.color[0]}
                    </button>
                    <button 
                    value='1'
                    className={this.state.switch[1] ? "new2" : "yellow"} 
                    onClick={(e) => this.handleClick(e.target.value)}
                    >
                    {this.state.switch[1] ? this.state.colorComb[1] : this.state.color[1]}
                    </button>
                    <button 
                    value='2'
                    className={this.state.switch[2] ? "new3" : "blue"} 
                    onClick={(e) => this.handleClick(e.target.value)}
                    >
                    {this.state.switch[2] ? this.state.colorComb[2] : this.state.color[2]}
                    </button>
            </div>
            // </ColorContext.Provider>
            
        )
    }
}

export default ColorUpgrade;