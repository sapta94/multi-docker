import React, { Component } from 'react';
import {Button} from "react-bootstrap"
import axios from 'axios'

import ChartView from "./chart-view"


function getParamValue(paramName){
    var url = (window.location.href).split('?')[1]
    var val=null;
    var paramsArray = url.split('&')
    paramsArray.forEach((item)=>{
      if(item.split('=')[0]===paramName){
        val = item.split('=')[1]
        return 
      }
    })
    return val
  }


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            boxes:['',''],
            pollutionData:[]
        };
    }
    componentDidMount(){
        if(window.location.href.includes('?'))
            if(getParamValue('requestID')){
                axios.get('/api/databyId?requestId='+getParamValue('requestID')).then(resp=>{
                    this.setState({pollutionData:resp.data.data.rows})
                })
            }
    }
    changeValue=(e,index)=>{
        let val = e.target.value;
        let boxes = this.state.boxes;
        boxes[index] = val
        this.setState({
            boxes:boxes
        })
    }
    handleAdd = () =>{
        let boxes = this.state.boxes;
        boxes.push('')
        this.setState({
            boxes:boxes
        })
    }
    onSubmit=()=>{
        let boxes = this.state.boxes;
        let token = process.env.key
        var respData = []
        boxes.forEach((item,ind)=>{
            axios.get('https://api.waqi.info/feed/'+item+'/?token='+token).then((resp)=>{
                if(resp.data.status=='ok'){
                  respData.push(resp.data.data)
                }
                if(ind==boxes.length-1){
                    this.setState({
                        pollutionData:respData
                    },()=>{
                        var data=this.state.pollutionData||[];
                        var values=[]
                        data.forEach((item,ind)=>{
                            values.push(item.aqi)
                        })
                        axios.post('/api/insertRequest',{
                            cities:boxes.join(','),
                            time:respData[0].time.s,
                            aqi:values.join(',')
                        }).then((resp)=>{
                            console.log(resp)
                        })
                    })
                }
            }).catch(err=>{
                console.log(err)
                return
            })
        })
    }
    render() {
        var boxes = this.state.boxes
        return (
            <div>
                <div style={{margin:'10px'}} className='row'>
                    {
                        boxes.map((item,index)=>{
                            return(
                                <div className='col-md-3'>
                                    <div className="form-group">
                                        <label for="usr">Enter a city:</label>
                                        <input type="text" onChange={(e)=>this.changeValue(e,index)} className="form-control" value={item}/>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <i style={{marginTop:'35px',cursor:"pointer"}} onClick={()=>this.handleAdd()} class="fa fa-plus-circle fa-2x" aria-hidden="true"></i>
                </div>
                <Button variant="primary" onClick={()=>this.onSubmit()}>Submit</Button>
                {(this.state.pollutionData.length>0)?<ChartView pollutionData={this.state.pollutionData}/>:null}
            </div>
            
        );
    }
}

export default Home;