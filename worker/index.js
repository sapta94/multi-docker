const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Credentials: true")
  next();
});

app.use(bodyParser.urlencoded({ extended:true}))
app.use(bodyParser.json()) 

app.use(cors());


// Postgres Client Setup
const { Pool } = require('pg');
const pgClient = new Pool({
  user: keys.pgUser,
  host: keys.pgHost,
  database: keys.pgDatabase,
  password: keys.pgPassword,
  port: keys.pgPort
});
pgClient.on('error', () => console.log('Lost PG connection'));

pgClient
  .query('CREATE TABLE IF NOT EXISTS requests (id serial primary key,date_time varchar,cities varchar)')
  .catch(err => console.log(err));

pgClient
  .query('CREATE TABLE IF NOT EXISTS request_data_mapping (id serial,request_id int4, aqi float8 ,city varchar)')
  .catch(err => console.log(err));

app.get('/allRequests',async (req,res)=>{
  var query = 'select * from requests'
  try{
    const requests=await pgClient.query(query)
    return res.json({
      status:true,
      data:requests
    })
  }catch(err){
    console.log(err)
    return res.json({
      status:false,
      messgae:'failed'
    })
  }
})

app.post('/insertRequest',async (req,res)=>{
  var time=req.body.time||null;
  var cities = req.body.cities||null;
  var aqi = req.body.aqi||null;

  try{
    var query = `insert into requests(date_time,cities) values (${time},${cities}) returning id`
    const result=await pgClient.query(query)
    console.log('result is ',result)
    var id = result[0].id

    var aqiarray=aqi.split(',')
    var cityarray = cities.split(',')
    cityarray.forEach((item,index) => {
      queryArray.push(`(${id},${aqiarray[index]},${item})`)
    });
    query =`insert into request_id,aqi,city values ${queryArray.join(',')}`
    await pgClient.query(query)
    return res.json({
      status:true,
      messgae:'success'
    })
  }catch(err){
    console.log(err)
    return res.json({
      status:false,
      messgae:'failed'
    })
  }
})

const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log("***listening on port "+PORT)