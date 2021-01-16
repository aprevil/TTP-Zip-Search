import React, {Component} from 'react';
import './city.css'

class city extends Component{
    render(){
        return(
            <div>
                
                <ul>
                <h4 id ="header" key = {this.props.index}>City: {this.props.City} </h4>
                    <li><strong>Location: </strong> {this.props.Location}</li>
                    <li><strong>Zip:</strong> {this.props.Zipcode} </li>
                    <li><strong>State:</strong> {this.props.State} </li>
                    <br></br>
                </ul>
            </div>
        )

    }
}
export default city;
/*<h1>zip: {this.props.zip}</h1>
            <h1>state: {this.props.state}</h1>*/