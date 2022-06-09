import React, { Component } from 'react'

class Message extends Component {
    state ={
        emp_sal:30000
    };
    btnHandler=(value)=>{
        this.setState({
            emp_sal:30000 + value,
        });
    }
  render() {
    return (
      <div>
          <h1>Employee sal:{this.state.emp_sal}</h1>
            <button onClick={this.btnHandler.bind(this,50000)}>Hike 50k</button>
            <hr/>
            <button onClick={this.btnHandler.bind(this,100000)}>Hike 100k</button>
            <hr/>
            <button onClick={this.btnHandler.bind(this,0)}>Hike 0</button>
            
      </div>
    )
  }
}

export default Message;