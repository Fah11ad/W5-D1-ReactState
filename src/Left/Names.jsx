import React, { Component } from 'react'

export default class Names extends Component {
    render() {
        return (
            <div>
                <div className="namebox" onClick = {()=>this.props.handleEventSelect(this.props.ele)} ><h5 className="coror" > {this.props.name} </h5></div>
            </div>
        )
    }
}
