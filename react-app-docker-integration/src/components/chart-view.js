import React, { Component } from 'react';
import {Bar,Line,Pie} from "react-chartjs-2";
import _ from "underscore"
class ChartView extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            graphData:{},
            type:'bar'
         };
    }
    componentDidMount(){
        this.modifyData()
    }

    componentDidUpdate(oldProps){
        if(!_.isEqual(oldProps,this.props)){
            this.modifyData()
        }
    }

    handleChange=(type)=>{
        this.setState({
            type:type
        },()=>{
            this.modifyData()
        })
    }

    modifyData=()=>{
        var data=this.props.pollutionData||[];
        var values=[],lables=[]
        data.forEach((item,ind)=>{
            lables.push((item.city.name).split(' ')[0])
            values.push(item.aqi)
        })
        let graphData={}
        graphData.labels = lables
        if(this.state.type=='bar')
            graphData.datasets = [
                {
                    label: 'AQI',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: values
                }
            ]
        else if(this.state.type=='line'){
            graphData.datasets= [
                {
                  label: 'AQI',
                  fill: false,
                  lineTension: 0.1,
                  backgroundColor: 'rgba(75,192,192,0.4)',
                  borderColor: 'rgba(75,192,192,1)',
                  borderCapStyle: 'butt',
                  borderDash: [],
                  borderDashOffset: 0.0,
                  borderJoinStyle: 'miter',
                  pointBorderColor: 'rgba(75,192,192,1)',
                  pointBackgroundColor: '#fff',
                  pointBorderWidth: 1,
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                  pointHoverBorderColor: 'rgba(220,220,220,1)',
                  pointHoverBorderWidth: 2,
                  pointRadius: 1,
                  pointHitRadius: 10,
                  data: values
                }
              ]
        } else{
            graphData.datasets= [{
                data: values,
                backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
                ],
                hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
                ]
            }]
        }
        this.setState({graphData:graphData})
    }
    render() {
        return (
            <div className="row graph-card">
                <h3 style={{marginLeft:'0.3 rem'}}>Results</h3>
                <div className='graphType'>
                    <label><input onChange={()=>this.handleChange('bar')} type="radio" class="radio-inline" name="graph-type"/> Bar</label>
                    <label><input onChange={()=>this.handleChange('line')} type="radio" class="radio-inline" name="graph-type" /> Line</label>
                    <label><input onChange={()=>this.handleChange('pie')} type="radio" class="radio-inline" name="graph-type" /> Pie</label>
                </div>
                {
                    (this.state.type=='bar')?
                    <Bar
                        data={this.state.graphData}
                        width={100}
                        height={50}
                        options={{
                            maintainAspectRatio: true
                        }}
                    />:(this.state.type=='line')?
                    <Line data={this.state.graphData} />:<Pie data={this.state.graphData} />
                }
                
            </div>
        );
    }
}

export default ChartView;