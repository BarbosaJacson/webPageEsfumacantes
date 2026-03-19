// Aguarda o carregamento total da página
window.onload = function() {
    // Timer de 5 segundos para exibir o pop-up
    setTimeout(function() {
        const popup = document.getElementById('popup-vip');
        if(popup) {
            popup.style.display = 'flex';
        }
    }, 5000);
};
 
// Função para fechar o pop-up
function closePopup() {
    document.getElementById('popup-vip').style.display = 'none';
}
// 1. DADOS (O Array deve vir primeiro)

// 2. A FUNÇÃO (Defina a função ANTES de chamá-la)
function renderizarCardapio() {
    const vitrine = document.getElementById('vitrine-produtos');
    if (!vitrine) return; 

    vitrine.innerHTML = ''; 

    cardapio.forEach(produto => {
        if (produto.disponivel) {
            vitrine.innerHTML += `
                <div class="product-card">
                    <div class="product-img-container">
                        <img src="${produto.imagem}" alt="${produto.nome}" class="product-img">
                    </div>
                    <div class="product-info">
                        <h3>${produto.nome}</h3>
                        <p>${produto.descricao}</p>
                        <div class="product-footer">
                            R$ ${Number(produto.preco).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                            <button class="add-btn" onclick="abrirDetalhes(${produto.id})">+</button>
                        </div>
                    </div>
                </div>
            `;
        }
    });
    
}

// 3. O GATILHO (Fica no final do arquivo)
window.onload = function() {
    renderizarCardapio(); // Agora ele vai achar a função definida acima!

    setTimeout(() => {
        const popup = document.getElementById('popup-vip');
        if(popup) popup.style.display = 'flex';
    }, 5000);
};

// Função de fechar o popup
function closePopup() {
    document.getElementById('popup-vip').style.display = 'none';
};

// Função para abrir o modal e preencher com os dados do produto
function abrirDetalhes(id) {
    // 1. Procura o produto no seu Array 'cardapio' pelo ID
    const produto = cardapio.find(p => p.id === id);
    
    if (produto) {
        // 2. Preenche os elementos do Modal com os dados do produto
        document.getElementById('modal-img').src = produto.imagem;
        document.getElementById('modal-titulo').innerText = produto.nome;
        document.getElementById('modal-descricao-longa').innerText = produto.descricaoLonga;
        document.getElementById('modal-preco').innerText = `R$ ${produto.preco}`;
        
        // 3. Mostra o modal (muda de 'none' para 'flex')
        const modal = document.getElementById('modal-produto');
        modal.style.display = 'flex';
    }
}

// Função para fechar o modal
function fecharModal() {
    document.getElementById('modal-produto').style.display = 'none';
}

// Bônus: Fechar o modal se o usuário clicar fora da caixa branca
window.onclick = function(event) {
    const modal = document.getElementById('modal-produto');
    if (event.target == modal) {
        fecharModal();
    }
};
// Fecha o modal ao pressionar a tecla 'Escape'
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        fecharModal();
    }
});
// 1. O cardápio começa como um array vazio
let cardapio = []; 

async function carregarCardapioDoBanco() {
    try {
        const resposta = await fetch('http://localhost:8080/products');
        // 2. Aqui os dados chegam do Java/MySQL
        cardapio = await resposta.json(); 
        
        console.log("Cardápio sincronizado com o Banco de Dados!");

        // 3. AQUI ESTÁ O SEGREDO: 
        // Agora que o cardápio está cheio, mandamos o JS desenhar na tela
        renderizarCardapio(); 

    } catch (erro) {
        console.error("Erro ao carregar dados reais:", erro);
    }
}

// 4. Inicia o processo
carregarCardapioDoBanco();