function adicionarRegistro() {
    const produto = document.getElementById('produto').value;
    const quantidade = document.getElementById('quantidade').value;
    const tipo = document.getElementById('tipo').value;
    const data = document.getElementById('data').value;

    const registrosDiv = document.getElementById('registros');
    const novoRegistro = document.createElement('div');
    novoRegistro.innerHTML = `<p><strong>${produto}</strong> - ${quantidade} (${tipo}) em ${data}</p>`;
    registrosDiv.appendChild(novoRegistro);

    // Limpar os campos do formulário após adicionar o registro
    document.getElementById('form').reset();
}
let estoque = {}; // Vamos usar um objeto para manter o controle do estoque por produto

function adicionarRegistro() {
    const produto = document.getElementById('produto').value;
    const quantidade = parseInt(document.getElementById('quantidade').value);
    const tipo = document.getElementById('tipo').value;
    const data = document.getElementById('data').value;

    // Certifique-se de que a propriedade para o produto existe no objeto estoque
    if (!estoque[produto]) {
        estoque[produto] = 0;
    }

    let saldo = 0;

    // Atualiza o estoque com base no tipo de registro
    if (tipo === 'entrada') {
        estoque[produto] += quantidade;
        saldo = estoque[produto];
    } else if (tipo === 'saida' && quantidade <= estoque[produto]) {
        estoque[produto] -= quantidade;
        saldo = -estoque[produto];
    } else {
        alert('Quantidade  em estoque para saída.');
        return;
    }

    const registrosDiv = document.getElementById('registros');
    const novoRegistro = document.createElement('div');
    novoRegistro.innerHTML = `<p><strong>${produto}</strong> - ${quantidade} (${tipo}) em ${data}. Saldo: ${saldo}</p>`;
    registrosDiv.appendChild(novoRegistro);

    // Mostra a quantidade atualizada em estoque
    alert(`Quantidade atual em estoque para ${produto}: ${estoque[produto]}`);

    // Limpar os campos do formulário após adicionar o registro
    document.getElementById('form').reset();
}