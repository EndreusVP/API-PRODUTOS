//importar express
const express =  require("express")

const app = express()

//transforma json em js
app.use(express.json())

//lista de produtos
let produtos = []

//primeira rota 
app.get("/", (req, res) => {
    res.send("API funcionando")
})

app.get("/produtos", (req, res) => {
    res.json(produtos)
})

app.post("/produtos", (req, res) => {
    
})

//fznd o server escutar a porta 3000
app.listen(3000, () => {
    console.log("servidor rodando")
})

