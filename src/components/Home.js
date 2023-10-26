import React, { Component } from "react";
// rce
export class Home extends Component {

    constructor(props){
        super();
        this.state={
            content:"subscribe"
        }
    }

    clickBtn(){
        this.setState({
            content:"Thank You"
        })
    }

    render() {
    return <div>
        <h1>{this.state.content}</h1>
        <button onClick={() => this.clickBtn()}>Click</button>
    </div>;
    }
}

export default Home;
