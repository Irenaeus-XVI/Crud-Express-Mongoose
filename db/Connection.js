import mongoose from "mongoose";

export const connection = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/ROUTE-ASSIGNMENT-5-MONGOOSE").then(() => {
        console.log("DB Connected");
    }).catch((err) => {
        console.log("DB Error ", err);
    });
}