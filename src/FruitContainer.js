import React, {Component} from 'react'
import List from './List.js'
import Input from './Input.js'

class FruitContainer extends Component {

    state = {
        // initialize the fruit list to the full list passed in props
        fruitsToDisplay: this.props.fruits
    }

    // this gets sent to Input component as a prop 
    // this has to live in the same component as the state that it changes
    handleFilterChange = (e) => {
        // remove fruits that don't contain the filter value
        const filteredFruitList = this.props.fruits.filter((f)=>{
            return f.toLowerCase().includes(e.target.value.toLowerCase())
        })

        // change the value of the filterValue state
        this.setState({
            fruitsToDisplay: filteredFruitList
        })
    }

    render(){
        return(
            <>
                <h1>Hello from fruit container!</h1>
                <Input onChange={this.handleFilterChange}/>
                <List fruits={this.state.fruitsToDisplay}/>
            </>

        )
    }
}

export default FruitContainer