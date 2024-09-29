import mongoose from "mongoose";

const NotesSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },

        content: {
            type: String,
            required: true,
        },
    },

    {
        timestamps:true,
    }
);

export const Notes = mongoose.model('Notes', NotesSchema);