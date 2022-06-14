const express = require('express')
const app = express()
const port = process.env.PORT || 8000
require('dotenv').config()
const mongoose = require('mongoose');
const Todohandelere = require('./Routehandeler/Todohandelere')
var cors = require('cors')

app.use(cors())
app.use(express.json())

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = `mongodb+srv://${process.env.NAME}:${process.env.KEY}@cluster0.23da0.mongodb.net/?retryWrites=true&w=majority`;
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   console.log("connet mongodb okay");
//   client.close();
// });

// mongose connections
mongoose.connect(`mongodb+srv://${process.env.NAME}:${process.env.KEY}@cluster0.23da0.mongodb.net/?retryWrites=true&w=majority`,{ useNewUrlParser: true , useUnifiedTopology: true } )
.then(()=> console.log("connected okay"))
.catch((err)=> console.log(err))


app.use('/todo', Todohandelere)



app.get('/', (req, res) => {
  res.send('Hello World! to learning mongosse')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})