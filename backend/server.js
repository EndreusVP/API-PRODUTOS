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
    const produto = req.body.produto
    const categoria = req.body.categoria
    const preco = req.body.preco    

    produtos.push({
        id: Date.now(),
        produto: produto,
        categoria: categoria,
        preco: preco 
    })

    res.json({mensagem: "Produto criado"})
})

app.delete("/produtos/:id", (req, res) => {
    let id = Number(req.params.id)

    produtos = produtos.filter(p => p.id != id)

    res.json({mensagem: "produto removida"})
})

//fznd o server escutar a porta 3000
app.listen(3000, () => {
    console.log("servidor rodando")
})

