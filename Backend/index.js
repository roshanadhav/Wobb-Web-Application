const express = require("express") ;
const app = express() ;
const mongoose = require("mongoose" ) ;
const Catagory = require("./models/cards")
const cors = require("cors");


app.use(cors());
app.use(express.json());


function main(){
    mongoose.connect("mongodb://127.0.0.1:27017/wobb")
    .then(()=>{
        console.log("wobb database is connected")
    })
    .catch((err)=>{
        console.log("Error in Connecting the Wobb database " , err ) ;
    })
}

main() ;

app.get("/api/brands", async (req, res) => {
    try {
        const data = await Catagory.find(); // Wait for the query to resolve
        res.status(200).json(data); // Send the data as JSON response
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ message: "Internal Server Error" }); // Handle errors
    }
});

app.get("/" , (req,res)=>{
    res.send("working") ;
})



app.listen(8080 , ()=>{
    console.log("Server Listning On port 8080" ) ;
})