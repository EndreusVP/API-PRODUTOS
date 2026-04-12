let nome = window.document.getElementById("nome")
let categoria = window.document.getElementById("categoria")
let preco = Number(window.document.getElementById("preco").value)
let lista = window.document.getElementById("lista")

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
    preco = ""
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
                precço: R$ ${produto.preco}
                <button onclick="remover(${produto.id})">X</button>
            </li>
        `
})}

listar()