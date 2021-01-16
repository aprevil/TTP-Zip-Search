import React, {Component} from 'react';
import axios from 'axios';
import Cityy from './city';
import './city.css';

class Zip extends Component {
    constructor(props){
        super(props)
        this.state ={
            cities: [],
            city: "",
            zipCode: "",
            input:""
        }
    }
   /* test input on startup
    async componentDidMount(){
        try{
            const response = await axios.get(`http://ctp-zip-api.herokuapp.com/zip/11210`);
            console.log(response);
            console.log(response.data.City);
            
            this.setState({
            cities: response.data,
            city: response.data[0].City
        })
            console.log(this.state.cities);

        }catch(error){
            console.error(error);
        }
        
    }*/

    handleInput = (e) =>{
        let temp = e.target.value;
        this.setState({
            input: temp 
        })
        
    }
    handleSubmit = (event) =>{
        this.updateZip();
        event.preventDefault();
    }
    async updateZip(){
        console.log('ran')
        try{
            const response = await axios.get(`http://ctp-zip-api.herokuapp.com/zip/${this.state.input}`);
            this.setState({
                cities: response.data
            })
        }
        catch (error){
            console.log(error);
        }

    }


    render(){
        return(
        <div>
            <h1 id = "title">US Zip Code Search</h1>
            <form onSubmit = {this.handleSubmit} >
                <input type = "text" value = {this.state.input} onChange ={this.handleInput}/>
                <input type = "submit" value = "Submit"/>
            </form>
            
            {this.state.cities.map((city, index) =>{
                return <Cityy key = {index} City = {city.City} Zipcode = {city.Zipcode} State = {city.State} Location ={city.Location}/>                     
            })}

        </div>

        ) 
            
    }
}
export default Zip;
