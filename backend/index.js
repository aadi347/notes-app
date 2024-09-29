import express from 'express';
import mongoose from 'mongoose';
import axios from 'axios';
import { Notes } from './models/noteModel.js';
import router from './routers/notesRouters.js';
import cors from 'cors';


const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const mongoDbUrl = 'mongodb+srv://aadi678a:c2lHH94nGFTbm8YL@notez.koyy2.mongodb.net/?retryWrites=true&w=majority&appName=Notez';
mongoose
.connect(mongoDbUrl)
.then(() => {
    console.log("your database is connected");
    app.listen(port, () => {
        console.log(`app is up and running on ${port} 🔥`);
    });
})

.catch((error) => {
    console.log(error);
});


app.get("/", (req, res) => {
    return res.status(204).send("Welcome to the my noteszz app");
});


app.use('/notes', router);

