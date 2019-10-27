import React, { Component } from 'react'
import Names from './Names'
export default class LeftSide extends Component {
    render() {
        var names = this.props.seta.map(ele=>{
            
            return  <Names  name = {ele.name} handleEventSelect = {this.props.handleEventSelect} ele = {ele}/>
        })
        return (
            <div>
                <div className="left">
                    <div className="Instructors">
                        <h2 className="coror">Welcome to</h2>
                        <h4 className="coror">Instructors board</h4>
                    </div>
                    {names}
                    
                   
                    
        </div>
            </div>
        )
    }
}
