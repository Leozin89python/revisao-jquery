let port = 3000
let express = require('express')
let app = express()

const cors = require('cors')

let Url = require('./db/db.json')

const { uuid } = require('uuidv4')

app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))

app.use(cors())

let employees = []

app.get('/server',(req, res)=>{
    
    return res.json({
       employees
    })
})
app.post('/server',(req,res)=>{
    //id = uuid
    const id = uuid()

    let contents = {
        id,
        nivel:req.body.nivel,
        tecnologia:req.body.tecnologia
    }

    employees.push(contents)
    return res.json(contents)
})
/**corrigir os erros e fazer o update */
app.delete('/server/:id',(req,res)=>{
    const { id } = req.params

    let contents ={
        id,
        nivel:req.body.nivel,
        tecnologia:req.body.tecnologia
    }

    const mapToFound = employees.findIndex(content => content.id === id)
    employees[mapToFound] = contents

    const deleteElement = employees.splice(contents, 1)

    return res.status(204)
			  .json([])
})
app.listen(port,()=>{
    console.log(`online in port: ${port}`)
})
