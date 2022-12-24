import React, { Component } from 'react'
import Counter from '../components/Counter';

class Counters extends Component {
    state = {  
        counters: [
           {id: 1, value: 0},
           {id: 2, value: 0},
           {id: 3, value: 0},
           {id: 4, value: 0},
           {id: 5, value: 0},
           {id: 6, value: 0}
        ]
    } 
    handleDelete = countersId =>{
        const counters = this.state.counters.filter(c => c.id !== countersId);
        this.setState({counters})
        console.log("You just cliked me", countersId)
    }
    render() { 
        return (
            <div>
               {this.state.counters.map(counter=> 
               <Counter key= {counter.id} onDelete={this.handleDelete} value={counter.value} selected={true}/>
               )}
            </div>
        );
    }
}
 
export default Counters;
