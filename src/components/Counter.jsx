import React, { Component, useState } from "react";

class Counter extends Component {
    state = {
        value: this.props.value,
        imageUrl: "https://picsum.photos/200",
        tags: ['tag1', 'tag2', 'tag3', 'tag4']
    }
 
handleIncrement = ()=>{
    this.setState({value: this.state.value + 1})
    // console.log("I am clicked now", this)
}
handleDecrement = () =>{
    this.setState({value: this.state.value - 1 })
}

formatCount(){
    const {value} = this.state
    return value === 0 ? "Zero" : value
}
getBadgeClasses(){
    let classes = "badge m-2 badge-"
  return  classes += this.state.value === 0 ? "warning" : "primary";
}
renderTags(){
    if (this.state.tags.length === 0) return <p>There are no tags available!!</p>
     return <ul>{this.state.tags.map(tag=><li key={tag}>list of tags</li>)}</ul>
}

  render() {

   
    return (
      <React.Fragment>
        <img src={this.state.imageUrl} alt=""/>
        <h1 className={this.getBadgeClasses()}>{this.formatCount()}</h1>
        <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm m-2">Increment</button>
        <button onClick={this.handleDecrement} className="btn btn-secondary btn-sm m-2">Decrement</button>
       
        {this.renderTags()}
      </React.Fragment>
    );
  }
}

export default Counter;
