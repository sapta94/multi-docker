(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{202:function(e,t,a){},203:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(30),i=a.n(o),l=(a(88),a(89),a(90),a(13)),c=a(14),s=a(16),u=a(15),h=a(17),d=a(206),p=a(207),m=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{bg:"light",variant:"light"},r.a.createElement(d.a.Brand,{href:"#home"},"Pollution"),r.a.createElement(p.a,{className:"mr-auto"},r.a.createElement(p.a.Link,{href:"#home"},"Home"),r.a.createElement(p.a.Link,{href:"#features"},"Recents"),r.a.createElement(p.a.Link,{href:"#pricing"},"Settings")))}}]),t}(n.Component),b=a(205),f=a(79),g=a.n(f),E=a(36),v=a(81),y=a.n(v),C=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){a.setState({type:e},(function(){a.modifyData()}))},a.modifyData=function(){var e=a.props.pollutionData||[],t=[],n=[];e.forEach((function(e,a){n.push(e.city.name.split(" ")[0]),t.push(e.aqi)}));var r={};r.labels=n,"bar"==a.state.type?r.datasets=[{label:"AQI",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",borderWidth:1,hoverBackgroundColor:"rgba(255,99,132,0.4)",hoverBorderColor:"rgba(255,99,132,1)",data:t}]:"line"==a.state.type?r.datasets=[{label:"AQI",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:t}]:r.datasets=[{data:t,backgroundColor:["#FF6384","#36A2EB","#FFCE56"],hoverBackgroundColor:["#FF6384","#36A2EB","#FFCE56"]}],a.setState({graphData:r})},a.state={graphData:{},type:"bar"},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.modifyData()}},{key:"componentDidUpdate",value:function(e){y.a.isEqual(e,this.props)||this.modifyData()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"row graph-card"},r.a.createElement("h3",{style:{marginLeft:"0.3 rem"}},"Results"),r.a.createElement("div",{className:"graphType"},r.a.createElement("label",null,r.a.createElement("input",{onChange:function(){return e.handleChange("bar")},type:"radio",class:"radio-inline",name:"graph-type"})," Bar"),r.a.createElement("label",null,r.a.createElement("input",{onChange:function(){return e.handleChange("line")},type:"radio",class:"radio-inline",name:"graph-type"})," Line"),r.a.createElement("label",null,r.a.createElement("input",{onChange:function(){return e.handleChange("pie")},type:"radio",class:"radio-inline",name:"graph-type"})," Pie")),"bar"==this.state.type?r.a.createElement(E.a,{data:this.state.graphData,width:100,height:50,options:{maintainAspectRatio:!0}}):"line"==this.state.type?r.a.createElement(E.b,{data:this.state.graphData}):r.a.createElement(E.c,{data:this.state.graphData}))}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).changeValue=function(e,t){var n=e.target.value,r=a.state.boxes;r[t]=n,a.setState({boxes:r})},a.handleAdd=function(){var e=a.state.boxes;e.push(""),a.setState({boxes:e})},a.onSubmit=function(){var e=a.state.boxes,t=Object({NODE_ENV:"production",PUBLIC_URL:""}).TOKEN,n=[];e.forEach((function(r,o){g.a.get("https://api.waqi.info/feed/"+r+"/?token="+t).then((function(t){"ok"==t.data.status&&n.push(t.data.data),o==e.length-1&&a.setState({pollutionData:n})})).catch((function(e){console.log(e)}))}))},a.state={boxes:["",""],pollutionData:[]},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state.boxes;return console.log(Object({NODE_ENV:"production",PUBLIC_URL:""})),r.a.createElement("div",null,r.a.createElement("div",{style:{margin:"10px"},className:"row"},t.map((function(t,a){return r.a.createElement("div",{className:"col-md-3"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"usr"},"Enter a city:"),r.a.createElement("input",{type:"text",onChange:function(t){return e.changeValue(t,a)},className:"form-control",value:t})))})),r.a.createElement("i",{style:{marginTop:"35px",cursor:"pointer"},onClick:function(){return e.handleAdd()},class:"fa fa-plus-circle fa-2x","aria-hidden":"true"})),r.a.createElement(b.a,{variant:"primary",onClick:function(){return e.onSubmit()}},"Submit"),this.state.pollutionData.length>0?r.a.createElement(C,{pollutionData:this.state.pollutionData}):null)}}]),t}(n.Component);a(202);var D=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(m,null),r.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},83:function(e,t,a){e.exports=a(203)},88:function(e,t,a){},89:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"}},[[83,1,2]]]);
//# sourceMappingURL=main.19202dc5.chunk.js.map