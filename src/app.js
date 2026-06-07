// main kaam hota h server ko create karna

const express = require ('express');
const app = express();
app.use(express.json());
const notes = [];
const noteModel = require ("./models/note.model")

app.post('/notes' , async (req, res)=>{
    const data = req.body ;
    await noteModel.create({
        title: data.title,
        description: data.description,
    })

    res.status(201).json({
        message : "notes has been created sucessfully"
    })
})

app.get('/notes', async (req,res) => {

    const notes = await noteModel.find()

    res.status(200).json({

       message : " notes fetched sucessfully",
       notes : notes

    })
})

app.delete('/notes/:id' , async (req,res) =>{
    const id = req.params.id
    await noteModel.findOneAndDelete({
        _id : id
    })

    res.status(200).json({
        message : "message deleted sucessfully"
    })
})

app.patch('/notes/:id' , async (req,res)=> {
    const id = req.params.id
    const description = req.body.description

    await noteModel.findOneAndUpdate({
        _id : id
    },
        {description : description 
})
    res.status(200).json({
        message : "notes updated sucessfuly"
    })

})
module.exports = app