let nome = window.document.getElementById("nome")
let categoria = window.document.getElementById("categorias")
let preco = window.document.getElementById("preco")
let lista = window.document.getElementById("lista")
let totalProdutos = window.document.getElementById("totalProdutos")
let valorTotal = window.document.getElementById("valorTotal")

async function add() {
    await fetch("http://localhost:3000/produtos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
            produto: nome.value,
            categoria: categoria.value,
            preco: Number(preco.value)
        })
    })

    nome.value = ""
    categoria.value = ""
    preco.value = ""

    listar()
    total()
    valorTotalProdutos()
    totalCategoria()
}

async function listar() {
    let resposta = await fetch("http://localhost:3000/produtos")
    let produtos = await resposta.json()

    lista.innerHTML = ""
    
    produtos.forEach(produto => {
        lista.innerHTML += `
            <li>
                nome: ${produto.produto} -
                categoria: ${produto.categoria} -
                preço: R$ ${produto.preco}
                <button onclick="remover(${produto.id})">X</button>
            </li>
        `
})}

async function remover(id) {
    await fetch(`http://localhost:3000/produtos/${id}`, {
        method: "DELETE", 
    })

    listar()
    total()
    valorTotalProdutos()
    totalCategoria()
}

async function total() {
    let resposta = await fetch("http://localhost:3000/produtos/total")
    let total = await resposta.json()

    totalProdutos.innerHTML = total
}

async function valorTotalProdutos() {
    let resposta = await fetch("http://localhost:3000/produtos/valortotal")
    let valorTotalProdutos = await resposta.json()

    valorTotal.innerHTML = `R$ ${valorTotalProdutos}`
}

async function totalCategoria() {
    let resposta = await fetch("http://localhost:3000/produtos/totalcategoria")
    let totalCategoria =  await resposta.json()
    categoria.innerHTML = totalCategoria
}

listar()
total()
valorTotalProdutos()
totalCategoria()

