import React, { Component } from 'react'
import '../Rightside.css'

export default class RightSide extends Component {
    render() {
        var {EventSelect} = this.props
        return (
            <div>
                <div className="rihgt">
                    <div class="container">
                        <img src={EventSelect.img} />
                        <div id="theBox" class="floatyBox">
                            <div id="name" class="nameIn">
                                <h3>{EventSelect.name}</h3>
                                <h4>{EventSelect.Major}</h4>
                            </div>
                            <h3>Nationality :{EventSelect.Nationality} </h3>
                            <h3>city : {EventSelect.city}</h3>

                            <div> <h3>contact :
                           <br />{EventSelect.contact}
                        </h3></div>
                            <div><h3>email :
                        <br />{EventSelect.email}
                        </h3></div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
