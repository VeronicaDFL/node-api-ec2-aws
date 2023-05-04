import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())


const dogs =[{
    name: 'Paco',
    breed: 'Chihuahua',
    age: 34,
},

{
name: 'Buba',
breed: 'Labrador',
age: 50,
},


{
    name: 'Bob',
    breed: 'Pitbull',
    age: 65,
    }

]

app.get('/',(req,res) => res.json(dogs))

app.listen(4000, () => console.log('Api running ...on port 4000'))