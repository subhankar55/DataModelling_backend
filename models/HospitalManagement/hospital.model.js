import mongoose from "mongoose";


const hospitalSchema = new mongoose.Schema(
    {},
    {}
);


export const Hospital = new mongoose.model("Hospital", doctorSchema);

