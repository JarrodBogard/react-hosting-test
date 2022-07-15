import React from "react"

// export function Button(props) {
//     // console.log(props)
//     const {label = "Default", handleClick = () => console.log("I am default")} = props
//     return <button onClick={handleClick}>{label}</button>
// }

class ButtonClass extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        const { label= "Default", handleClick = () => console.log("I am Default") } = props
        // return <button onClick={this.props.handleClick}>{this.props.label}</button>
        return <button onClick={handleClick}>{label}</button>
    }
}