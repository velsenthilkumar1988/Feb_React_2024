import { Component } from "react";
import { Button } from "react-bootstrap";

class StateTutorials extends Component{

    // constructor(props){
    //     super(props)
    //     this.state = {
    //         dateValue : new Date().getDate(),
    //         dayValue : new Date().getDay(),
    //         yearValue : new Date().getFullYear()
    //     }
    // }
    state ={
        dateValue : new Date().getDate(),
        dayValue : new Date().getDay(),
        yearValue : new Date().getFullYear(),
        text: "Hello Welcome",
        showText : true
    }

    handleChangeText=()=>{
        this.setState({
            text : 'Hello React'
        })
    }

    render(){
        return(
            <div>
                <h2>State Tutorials</h2>
                <h3 className="p-2">Today is {this.state.dateValue} / {this.state.dayValue} / {this.state.yearValue}</h3>
                <h4>{this.state.showText ? <span>{this.state.text}</span> : null}</h4>
                <button onClick={this.handleChangeText} className="btn btn-primary shadow p-2">Change Text Color</button>
            </div>
        )
    }
}
export default StateTutorials;