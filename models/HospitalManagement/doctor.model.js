import mongoose from "mongoose";


const doctorSchema = new mongoose.Schema(
    {},
    {}
);


export const Doctor = new mongoose.model("Doctor", doctorSchema);

