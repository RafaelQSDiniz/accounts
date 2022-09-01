function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(usuario) {
    console.log(usuario)
    linha = document.createElement("tr");
    tdId = document.createElement("td");
    tdNome = document.createElement("td");
    tdId.innerHTML = matriz.sale_fee_amount
    tdNome.innerHTML = usuario.stop_time

    linha.appendChild(tdId);
    linha.appendChild(tdNome);

    return linha;
}

function main() {
    let data = fazGet("https://api.mercadolibre.com/sites/MLB/listing_prices?price=100&category_id=MLB196208&listing_type_id=gold_special");
    let matriz = JSON.parse(data);
    let tabela = document.getElementById("tabela");
    console.log(matriz)
    linha = document.createElement("tr");
    tdId = document.createElement("td");
    tdNome = document.createElement("td");
    tdId.innerHTML = matriz.sale_fee_amount
    tdNome.innerHTML = matriz.listing_type_name

    linha.appendChild(tdId);
    linha.appendChild(tdNome);
    tabela.appendChild(linha);
    // Para cada usuario
        // criar uma linha
        // adicionar na tabela
}

main()