import express from "express"
import dotenv from "dotenv"
dotenv.config()

const app = express()

app.get("/",(req,res) => {
    return res.status(200).json("hiii nakul")
})
app.get("/health",(req,res) => {
    return res.status(200).json("hiii health")
})

app.listen(process.env.PORT, () => {
    console.log("server is started")
})