const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const mysql = require('mysql2/promise')
const cors = require('cors');
//app use port
const port = 8002
app.use(bodyparser.json())
app.use(cors())

// get mysql DB
let connDb = 'TestDB';
let pathparam = 'testdb-list'

app.get(`/${pathparam}`, async(req,res)=>{
    //MySql connect 
    //User Name ; Root 
    //Pasword ; Kosinth@1001
    try{
        const conn = await mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'Kosinth@1001',
        database : connDb
        //port : '3306'
        })
        //concat field
        //const results = await conn.query('select concat(lname,"|",fname) as prodtname from Register')

        /*  Select Date Now  ---> current date
           const results = await conn.query('SELECT  DATE_FORMAT(NOW(), "%d/%m/%Y") AS "dt_now" ')
        */
        const results = await conn.query('SELECT *,DATE_FORMAT(dt_timestamp, "%d/%m/%Y") AS "dt_name" FROM Register')
        res.json(results[0])

    }catch(err){
        console.error('Error : api path : /testdb' ,err.message)
        res.status(500).json({
            err : 'มีข้อผิดพลาด : ',
            message : err.message
        })
    }

})

app.get('/',(req,res)=>{
    //send json
    let users ={ 
        id : "1001",
        name : "kosinth buaung",
        address : " 12/8 kaotaleang sukhothai 64120"
    }
    //res.send('Hello world ... 555')
     //send json
    res.json(users);
})

app.get('/user/:id',(req,res) =>{
        let user = req.params.id
        res.json({
            message : "user Id",
            user : user
        })

})

app.get('/user/:id/:name',(req,res) =>{
    let user = req.params.id
    let name = req.params.name
    res.json({
        message : "user Id",
        user : user,
        name : name
    })
})

app.post('/user',(req,res)=>{
    try{
        let user = req.body
        console.log(user)
        res.json({
            user : user
        })
    
    }catch(err){
        res.json({
            error : " error ",
            message : err.message
        })

    }
 
})

app.listen(port,(req,res) =>{
    console.log(`server is running port ${port}`)
})

