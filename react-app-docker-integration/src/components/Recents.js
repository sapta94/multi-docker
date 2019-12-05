import React, { Component } from 'react';
import axios from 'axios'
import {Card,Button} from 'react-bootstrap'

export default class Recents extends Component {
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        axios.get('/api/allRequests').then((resp)=>{
            this.setState({
                data:resp.data.data.rows
            })
        }).catch(err=>{
            console.log(err)
            alert('error in fetching data!')
        })
    }
    plotData=(id,cities)=>{
        window.open('/?requestID='+id+'&cities='+cities)
    }
    render() {
        return (
            <div>
                <h2> Recent Searches </h2>
                <div className='row'>
                    {
                        (this.state.data).map((item)=>{
                            return(
                                <div style={{margin:'10px'}} className='col-md-3'>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Body>
                                            <Card.Title>{'Request #'+item.id}</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">{item.date_time}</Card.Subtitle>
                                            <Card.Text>
                                                {
                                                    item.cities
                                                }
                                            </Card.Text>
                                            <Button onClick={()=>this.plotData(item.id,item.cities)} variant='primary'>See Results</Button>
                                            {/* <Card.Link style={{cursor:'pointer'}} onClick={()=>this.plotData(item.id)}>See Results</Card.Link> */}
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            
        );
    }
}
