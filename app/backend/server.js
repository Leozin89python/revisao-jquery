let port = 3000
let express = require('express')
let app = express()

let Url = require('./db/db.json')

let uuid = require('uuidv4')

app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))




let employees = []

app.get('/server',(req, res)=>{
    
    return res.json({
       employees
    })
})
app.post('/server',(req,res)=>{
    //id = uuid

    let contents = {
        //id,
        nivel:req.body.nivel,
        tecnologia:req.body.tecnologia
    }

    employees.push(contents)
    return res.json(contents)
})

app.listen(port,()=>{
    console.log(`online in port: ${port}`)
})