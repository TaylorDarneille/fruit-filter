import React, {Component} from 'react'

class List extends Component {
    render(){
        const fruitItems = this.props.fruits.map((f, i)=>{
            return <li key={i}>{f}</li>
        })
        return (
            <ul>{fruitItems}</ul>
        )
    }
}

export default List