import { Component } from "react";
import StateTutorials from "./StateTutorial";

class ClassBasedCom extends Component{
    render(){
        return(
            <div className="container">
                <h2>Class Based Components </h2>
                <StateTutorials/>
            </div>
        )
    }
}
export default ClassBasedCom;