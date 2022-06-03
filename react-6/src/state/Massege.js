import React, {Component} from 'react'
class Message extends Component{
    state ={
        message:"Hello"

    }
    gmHandler=()=>{
        console.log("Test case two")
        this.setState({message:"Hello,good morning"})

    }
    render (){
        console.log("Test case one")
        return <div>
            <h1>message component</h1>
            <h2>message:{this.state.message}</h2>
            <button onClick ={this.gmHandler}>gm</button>
        </div>
    }
} 
export default Message