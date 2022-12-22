import React, { Component, useState } from "react";

class Counter extends Component {
    state = {
        count: 0,
        imageUrl: "https://picsum.photos/200",
        tags: ['tag1', 'tag2', 'tag3', 'tag4']
    }
 
handleIncrement = ()=>{
    this.setState({count: this.state.count + 1})
    // console.log("I am clicked now", this)
}
handleDecrement = () =>{
    this.setState({count: this.state.count - 1 })
}

formatCount(){
    const {count} = this.state
    return count === 0 ? "Zero" : count
}
getBadgeClasses(){
    let classes = "badge m-2 badge-"
  return  classes += this.state.count === 0 ? "warning" : "primary";
}
renderTags(){
    if (this.state.tags.length === 0) return <p>There are no tags available!!</p>
     return <ul>{this.state.tags.map(tag=><li key={tag}>list of tags</li>)}</ul>
}

  render() {
   
    return (
      <React.Fragment>
        {/* <img src={this.state.imageUrl} alt=""/> */}
        <h1 className={this.getBadgeClasses()}>{this.formatCount()}</h1>
        <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm m-2">Increment</button>
        <button onClick={this.handleDecrement} className="btn btn-secondary btn-sm m-2">Decrement</button>
       
        {this.renderTags()}
      </React.Fragment>
    );
  }
}

export default Counter;
