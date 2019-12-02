import React, { Component } from 'react';
import axios from 'axios'

export default class Recents extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    componentDidMount(){
        axios.get('/api/allRequests').then((resp)=>{
            console.log(resp.data.data.rows)
        }).catch(err=>{
            console.log(err)
            alert('error in fetching data!')
        })
    }
    render() {
        return (
            <div> Recent Searches </div>
        );
    }
}
