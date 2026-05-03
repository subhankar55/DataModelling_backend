import mongoose from "mongoose";


const patientSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        diagonsedWith: {
            type: String,
            required: true
        },
         address:{
            type: String,
            required: true  
         },
         age:{
            type: Number,
            required: true
         },
         bloodGroup:{
            type: String,
            required: true  
         },
         gender:{
            type: String,
            enum: ["M", "F", "O"],
            required: true  
         },
         

    },
    {}
);


export const Patient = new mongoose.model("Patient", patientSchema);

