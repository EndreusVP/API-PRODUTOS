let nome = window.document.getElementById("nome")
let categoria = window.document.getElementById("categoria")
let preco = Number(window.document.getElementById("preco").value)
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
            preco: preco
        })
    })

    nome.value = ""
    categoria.value = ""
    preco.value = ""

    listar()
    total()
    valorTotalProdutos()
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

listar()
total()
valorTotalProdutos()

