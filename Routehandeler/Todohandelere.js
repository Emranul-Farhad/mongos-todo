const express = require('express')
const router = express.Router()
const mongoose = require('mongoose');
const todoSchema = require ('../Schema/Todoschema')
const Todo = new mongoose.model('todo', todoSchema )

// get todo
router.get('/', (req,res)=> {})

// get todo by id
router.get('/:id', (req,res) => {} )

// todo post
router.post('/' , async(req,res)=> {
  const postodo = new Todo(req.body)
  await postodo.save((err)=> {
    if(err){
        res.status(500).json({
            error: "serverside error"
        })
    }
    else{
        res.status(200).json({
            message: "Success"
        })
    }
  } )
 

})

// post mulitple
router.post('/all', async(req,res)=>{
   await Todo.insertMany(req.body, (err)=>{
    if(err){
        res.status(500).json({
            error : "insert many problem from server"
        })
    }
    else{
        res.status(200).json({
            message: "insert many done"
        })
    }
   } )
})


// put by id
router.put('/:id', async(req,res)=> {
    await Todo.updateOne(
        {_id : req.params.id},
       {
        $set : {
            staus : "inactive"
        },

       },
     (err)=> {
        if(err){
            res.status(500).json({
                error : "Update error"
            })
        }
        else{
            res.status(200).json({
                message: "update done"
            })
        }
    }
    )
})


// delet todo
router.delete('/:id', (req,res)=> {})

module.exports = router
