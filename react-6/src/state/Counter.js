import { Component } from 'react'
class Counter extends Component{
    state = {
        product_Name: "realme Buds Q2 Neo Bluetooth Headset",
        image       :"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAKgAfAMBIgACEQEDEQH/xAAaAAEBAQADAQAAAAAAAAAAAAAABQYBAgME/9oACAEBAAAAANM46Dr2D0Djg8PL19zr6Ah+IClQDjCTwGuvAwc8BrrwMHPAa68DBzwGuvAwc8BrrwMHPAa68DBzwGuvAwc8BrrwMHPAa68DBzwGuvAwc8BrrwMHPAa68DBzwGuvAwc8BrrwMHPAa68CB84CtRB1HTtydfQOOg45D0P/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAoCAhADEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFVAQ/8QAMBAAAAMECgIBBAIDAAAAAAAAAAIDAQQFNRESFiAwMlFyc5JUZIETFCFhEDFScaP/2gAIAQEAAT8A/gzaGUiinMKpdBVLoKpdAegjGUJtNSZjPwKpdBVLoKpdBVLoGNaVtDf6vK/2Rn7uIEWIkwqyv1D/AOQ+i+eb/wAihIi5Wt+ovXZsYW4fK28rmT+Q8xpN2XURagZtRotCj4x+wtCj4x+wtCj4x+wtCj4x+wtCj4x+wtCj4x+wtCj4x+wtCj4x+wdHwr67nVKRpKD1by2dP5EVmL1vwYHL1ea8tmT+RFZi9b8GBy9bmvLZ0/kRWYvW/BgcuX5by2ZP5EVmL1vwYHL1ea8tnT+RFZi9b8GBy9XmvK5iCKzF634MDl6vNeVzEEVmL1vwYHL1ea8rmIIrMXrfgwOXq815XMQRWYvW/BgcvV5ryuYgisxet+DA5erzXlcxBFZi9b8GBy9XmvK5iCKzF634MDl6vNeVzEEVmL1vwYHL1ea8rmIIrMXrfgwOXq815XMQRWYvW/BgcvV5ryuYge4L9y8KrfcZzZags77bOgs77bOgs77bOgs/7jOgs77bOgs77bOgs77bOgs77bOgcnP7J2OlXr0nrXlcyf8Au6QtUv7bmbq0Ufm4fK28dlLBWozCszUVi6sFYurA39Ho+KQxrGM/JqRWLqwVi6sFYuozNZpc/8QAFBEBAAAAAAAAAAAAAAAAAAAAYP/aAAgBAgEBPwAx/8QAFxEBAQEBAAAAAAAAAAAAAAAAEQAQYP/aAAgBAwEBPwDkiIjf/9k=",
        price       : 1500,
        qty         : 1
    }
    incrhandler =()=>{
        this.setState({qty:this.state.qty+1})
    }
    decrHandler=()=>{
        this.setState({qty:this.state.qty-1})

    }
    render () {
        return(
            <div>
                <div className="Counter mt-5">
                    <div className="row">
                        <div className="col-md-7">
                            <table className="table table-hover">
                                <thead className="bg-info">
                                    <tr>
                                        <th>NAME</th>
                                        <th>IMAGE</th>
                                        <th>PRICE</th>
                                        <th>QUANTITY</th>
                                        <th>TOTAL</th>
                                    </tr>

                                </thead>
                                <tbody>
                                        <tr>
                                            <td>{this.state.product_Name}</td>
                                            <td><img src={this.state.image}/></td>
                                            <td>{this.state.price}</td>
                                            <td><button onClick={this.decrHandler}>-</button>
                                            {this.state.qty}
                                            <button onClick={this.incrhandler}>+</button></td>
                                            <td>{this.state.qty* this.state.price}</td>
                                        </tr>
                                    </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Counter