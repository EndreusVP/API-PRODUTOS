let nome = window.document.getElementById("nome")
let categoria = window.document.getElementById("categoria")
let preco = window.document.getElementById("preco")

async function add() {
    await fetch("http://localhost:3000/produtos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
            produto: nome.value,
            categoria: categoria.value,
            preco: preco.value
        })
    })
}