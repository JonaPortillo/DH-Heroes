let express = require('express')
let path = require('path')
let app = express()
let port = 3030

const publicPath = path.resolve(__dirname, './public')
app.use(express.static(publicPath))


app.get("/",(req, res)=>{
    res.sendFile(path.resolve(__dirname,"./views/home.html"))
})
app.get("/babbage",(req, res)=>{
    res.sendFile(path.resolve(__dirname,"./views/babbage.html"))
})
app.get("/berners-lee",(req, res)=>{
    res.sendFile(path.resolve(__dirname,"./views/berners-lee.html"))
})
app.get("/clarke",(req, res)=>{
    res.sendFile(path.resolve(__dirname,"./views/clarke.html"))
})
app.get("/hamilton",(req, res)=>{
    res.sendFile(path.resolve(__dirname,"./views/hamilton.html"))
})
app.get("/lovelace",(req, res)=>{
    res.sendFile(path.resolve(__dirname,"./views/lovelace.html"))
})
app.get("/hopper",(req, res)=>{
    res.sendFile(path.resolve(__dirname,"./views/hopper.html"))
})
app.get("/turing",(req, res)=>{
    res.sendFile(path.resolve(__dirname,"./views/turing.html"))
})

app.listen(port,()=>{
    console.log(`
    Servidor corriendo en el puerto ${port}
    http://localhost:${port}
    `)
})