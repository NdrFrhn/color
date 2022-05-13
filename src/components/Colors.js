import React from "react";

class Colors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            switch1: false,
            switch2: false,
            switch3: false,
            color1: 'red',
            color2: 'yellow',
            color3: 'blue',
        }
    }

    handleClick1 = (i) => {
        const currentState = this.state.switch1
        this.setState( {switch1: ! currentState} )
        this.handleTitleClick1();
    }
    handleClick2 = (i) => {
        const currentState = this.state.switch2
        this.setState( {switch2: ! currentState} )
        this.handleTitleClick2();
    }
    handleClick3 = (i) => {
        const currentState = this.state.switch3
        this.setState( {switch3: ! currentState} )
        this.handleTitleClick3();
    }

    handleTitleClick1 = () => {
        // const {state} = useContext(ColorContext);
        const switch1 = this.state.switch1;
        if (!switch1) {
            return this.setState( {color1: 'green'} );
        } else if (switch1) {
            return this.setState( {color1: 'red'} )
        }
    }

    handleTitleClick2 = () => {
        const title = this.state.color2;
        const switch2 = this.state.switch2;
        if (!switch2) {
            return this.setState( {color2: 'violet'} );
        } else if (switch2) {
            return this.setState( {color2: 'yellow'} )
        }
    }

    handleTitleClick3 = () => {
        const title = this.state.color3;
        const switch3 = this.state.switch3;
        if (!switch3) {
            return this.setState( {color3: 'orange'} );
        } else if (switch3) {
            return this.setState( {color3: 'blue'} )
        }
    }

    render() {
        return (
            <div className="container">
                <button className={this.state.switch1 ? "new" : "red"} onClick={this.handleClick1}>{this.state.color1}</button>
                <button className={this.state.switch2 ? "new2" : "yellow"} onClick={this.handleClick2}>{this.state.color2}</button>
                <button className={this.state.switch3 ? "new3" : "blue"} onClick={this.handleClick3}>{this.state.color3}</button>    
            </div>
        )
    }
}

export default Colors;