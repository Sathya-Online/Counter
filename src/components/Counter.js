import React from "react";
import './Counter.css'

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: Number(props.count)
        }
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
    }

    increase(){
        this.setState({count: this.state.count + 1});
    }

    decrease(){
        this.setState({count: this.state.count - 1});
    }

    static getDerivedStateFromProps(props, state){
        console.log("I'm getDerivedStateFromProps just before render method during mounting and before shouldComponentUpdate method during updating phase!")
        return {count: state.count}
    }

    shouldComponentUpdate() {
        console.log("I'm shouldComponentUpdate just before render method!")
        return true;
    }

    componentDidMount(){
        console.log("I'm componentDidMount after render method during mounting phase!")
        setTimeout(()=>{
            alert("I'm from componentDidMount")
        }, 1000)
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("I'm getSnapshotBeforeUpdate just before componentDidUpdate method and after render method during updating phase!")
        console.log('previous count: '+prevState.count);
        console.log('current count: '+this.state.count);
        return {}
    }

    componentDidUpdate(){
        console.log("I'm componentDidUpdate after render method during updating phase!")    
    }

    render(){
        console.log("I'm render method!")
        return <React.Fragment>
                     <h1>Counter Application using Class Based Component</h1>
                     <h2>Count: {this.state.count}</h2>
                     <button onClick={this.increase}>Increase</button>
                     <button onClick={this.decrease}>Decrease</button>
               </React.Fragment>
    }
}

export default Counter;