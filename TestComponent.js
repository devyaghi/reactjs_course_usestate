import React from "react";

export default class TestComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state={name:''}
    }


    handleNameChange=(e)=>{
        this.setState({name:e.target.value});
    }



    render() {
        return (
         <form>
            <div>{this.state.name}</div>
            <input type="text" onChange={this.handleNameChange}/>
         </form>
        )
    }

}