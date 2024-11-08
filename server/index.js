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

// Get all user
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
        console.log(results)

    }catch(err){
        console.error('Error : api path get[/testdb]' ,err.message)
        res.status(500).json({
            err : 'มีข้อผิดพลาด : ',
            message : err.message
        })
    }

})

// Get by id
app.get('/user/:id',async(req,res) =>{
        
    try{
        let id = req.params.id
        const conn = await mysql.createConnection({
            host : 'localhost',
            user : 'root',
            password : 'Kosinth@1001',
            database : connDb
            //port : '3306'
        })
        const results = await conn.query('SELECT * FROM  Register WHERE ID = ?',id)
        //console.log('result : ',results[0].length)
        if (results[0].length>0){
            res.json({ 
                user : 'Get ID Ok',
                data : results[0]
            })
        }else{
            res.status(404).json({ 
                user : 'ไม่พบข่อมูล..',
                data : results[0]
            })
        }

    
    }catch(err){
        res.status(500).json({
            error : " error ",
            message : err.message
        })
        console.error('Error,index.js,path api get[/user/:id] =>',err.message)
    }
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


// Insert
app.post('/user',async(req,res)=>{
    try{
        const conn = await mysql.createConnection({
            host : 'localhost',
            user : 'root',
            password : 'Kosinth@1001',
            database : connDb
            //port : '3306'
        })
        let user = req.body
        const results = await conn.query('INSERT INTO Register SET ?',user)
        console.log('result : ',results)

        res.json({
            user : 'insert Ok',
            data : results[0]
        })
    
    }catch(err){
        res.status(500).json({
            error : " error ",
            message : err.message
        })
        console.error('Error,index.js,path api post[/user] =>',err.message)
    }
 
})

//Update
app.put('/user/:id',async(req,res)=>{
    try{
        let id = req.params.id
        let updateUser = req.body
        const conn = await mysql.createConnection({
            host : 'localhost',
            user : 'root',
            password : 'Kosinth@1001',
            database : connDb
            //port : '3306'
        })
        let user = req.body
        const results = await conn.query(
            'UPDATE Register SET ? WHERE id = ? ',
            [updateUser,id]
        )
        console.log('result : ',results)

        res.json({
            user : 'update Ok',
            data : results[0]
        })
    
    }catch(err){
        res.status(500).json({
            error : " error ",
            message : err.message
        })
        console.error('Error,index.js,path api put[/user/:id] =>',err.message)
    }
})
    
// Delete
app.delete('/user/:id',async(req,res)=>{

    try{
        let id = req.params.id
        const conn = await mysql.createConnection({
            host : 'localhost',
            user : 'root',
            password : 'Kosinth@1001',
            database : connDb
            //port : '3306'
        })
        const results = await conn.query('DELETE FROM Register WHERE ID = ?',id)
        //console.log('result : ',results[0].length)
        res.json({
            user : 'delete Ok',
            data : results[0]
        })
    
    }catch(err){
        res.status(500).json({
            error : " error ",
            message : err.message
        })
        console.error('Error,index.js,path api delete[/user/:id] =>',err.message)
    }

})


app.listen(port,(req,res) =>{
    console.log(`server is running port ${port}`)
})

