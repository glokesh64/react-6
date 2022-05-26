import React, { Component } from 'react'

 class message extends Component {
     message="good morning"
     ename='lokesh'
     emp={id:101,Nmae:"lokesh",salary:35000}
  render() {
    return <div>
        <h2>message component</h2>
        <hr/>
        <h4>message:{this.message}</h4>
        <h3>Employee Name:{this.ename}</h3>
        <hr/>
        <h4>Employee id:{this.emp.id}and salary:{this.emp.salary}</h4>
    </div>


      }
}

export default message