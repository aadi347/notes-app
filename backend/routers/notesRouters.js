import express from 'express';
import { Notes } from '../models/noteModel.js';


const router = express.Router();

// post route.
router.post('/', async (req, res) => {
    try{
        if( !req.body.title || !req.body.content ) {
            return res.status(400).send({
                message: 'send all the requested fields title and content',
            });
        }

        const newNote = {
            title: req.body.title,
            content: req.body.content,
        };

        const note = await Notes.create(newNote);
        return res.status(201).send(note);
    }catch (error){
        console.log("error while posting book to the server", error.message);
        res.status(500).send( {message: error.message} );
    }
});


// getting all the books from the database.

router.get('/', async ( req, res) => {

    try{
        const notes = await Notes.find({});
        return res.status(200).json({
            count: notes.length,
            data: notes
        });
    }catch(error){
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});


// getting books from the database by id. 

router.get("/:id", async (req, res) => {
    try{
            const { id } = req.params;
            const notes =  await Notes.findById(id);
            return res.status(200).json(notes);
    }catch(error){
        console.log(error.message);
        res.status(500).send( {message: error.message} );
    }
})

// route for updating the notes

router.put("/:id", async (req, res) => {
    try{
        if(!req.body.title || !req.body.content){
            res.status(400).send({
                message: 'send all the required fields title and content',
            });
        }

        const {id} = req.params;
        const result = await Notes.findByIdAndUpdate(id, req.body);
        console.log(result);
        if(!result){
            return res.status(404).json({ message: 'Notes not found'});
        }

        return res.status(200).send({message: 'Notes updated successfully'});

    }catch(error){
        console.log(error.message);
        res.status(500).send( {message: error.message} );
    }
})

// route for deleting notes

router.delete("/:id", async (req, res) =>{
    try{
        const {id} = req.params;
        const result = await Notes.findByIdAndDelete(id);
        if(!result){
            return res.status(404).json({ message: 'note not deleted'});
        }

        return res.status(200).send({ message: 'note deleted successfully'});

    }catch(error){
        
        console.log(error.message);
        res.status(500).send( {message: error.message} );
    }
})


export default router;