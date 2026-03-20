// 1. DADOS FIXOS
const cardapio = [
    {
        id: 1,
        nome: "Dog Smoked Cream Cheese Parmesão com Molho Pesto",
        descricao: "Molho Cream Cheese Parmesão com Pesto.",
        descricaoLonga: `Produzido Artesanalmente:
- Salsicha de Frango (≅ 100g, 22cm), curada por 7 dias;
- Molho Cream Cheese Artesanal: Iorgute natural e especiarias;
- Parmesão: Queijo parmesao ralado;
- Molho Pesto Artesanal: Manjericão, alho, azeite e parmesao;
- Geleia de Tomate: Tomate, açucar, maçã, cravo e canela;
- Pão tipo brioche artesanal: 130g;
- Ketchup artesanal: Tomate e goiaba;
- Mostarda artesanal: Mostarda e mel.
Obs.: 100% natural, sem industrializados!`,
        preco: 30.90,
        imagem: "assets/images/pesto.jpg",
        disponivel: true
    },
    {
        id: 2,
        nome: "Dog Smoked Cream Cheese Parmesão",
        descricao: "Molho Cream Cheese com Parmesão e bacon.",
        descricaoLonga: `Produzido Artesanalmente:
- Salsicha de Frango (≅ 100g, 22cm), curada por 7 dias;
- Molho Cream Cheese Artesanal: Iorgute natural e especiarias;
- Parmesão: Queijo parmesao ralado;
- Bacon Artesanal: Farofa de bacon artesanal;
- Pão tipo brioche artesanal: 130g;
- Ketchup artesanal: Tomate e goiaba;
- Mostarda artesanal: Mostarda e mel.
Obs.: 100% natural, sem industrializados!`,
        preco: 29.90,
        imagem: "assets/images/Parmesão.jpg",
        disponivel: true
    },
    {
        id: 3,
        nome: "Dog Smoked Romeu e Julieta com Bacon",
        descricao: "Molho Cream Cheese de Parmesão, Geleia de Tomate e bacon crocante.",
        descricaoLonga: `Produzido Artesanalmente:
- Salsicha de Frango (≅ 100g, 22cm), curada por 7 dias;
- Molho Cream Cheese Artesanal: Iorgute natural e especiarias;
- Parmesão: Queijo parmesao ralado;
- Bacon Artesanal: Farofa de bacon artesanal;
- Geleia de Tomate: Tomate, açucar, maçã, cravo e canela;
- Pão tipo brioche artesanal: 130g;
- Ketchup artesanal: Tomate e goiaba;
- Mostarda artesanal: Mostarda e mel.
Obs.: 100% natural, sem industrializados!`,
        preco: 29.90,
        imagem: "assets/images/RJBacon.jpg",
        disponivel: true
    },
    {
        id: 4,
        nome: "Dog Smoked Cream Cheese Gorgonzola",
        descricao: "Molho Cream Cheese com Gorgonzola e bacon.",
        descricaoLonga: `Produzido Artesanalmente:
- Salsicha de Frango (≅ 100g, 22cm), curada por 7 dias;
- Molho Cream Cheese Artesanal: Iorgute natural e especiarias;
- Parmesão: Queijo parmesao ralado;
- Gorgonzola: Queijo gorgonzola;
- Bacon Artesanal: Farofa de bacon artesanal;
- Geleia de Tomate: Tomate, açucar, maçã, cravo e canela;
- Pão tipo brioche artesanal: 130g;
- Ketchup artesanal: Tomate e goiaba;
- Mostarda artesanal: Mostarda e mel.
Obs.: 100% natural, sem industrializados!`,
        preco: 29.90,
        imagem: "assets/images/Gorgonzola.jpg",
        disponivel: true
    },
    {
        id: 5,
        nome: "Dog Smoked Barbecue",
        descricao: "Zero lactose Molho Barbecue de maçã e bacon.",
        descricaoLonga: `Produzido Artesanalmente:
- Salsicha de Frango (≅ 100g, 22cm), curada por 7 dias;
- Bacon Artesanal: Farofa de bacon artesanal;
- Molho Barbecue: Caldo de costela, cerveja escura, maçã e especiarias;
- Pão tipo brioche artesanal: 130g;
- Ketchup artesanal: Tomate e goiaba;
- Mostarda artesanal: Mostarda e mel.
Obs.: 100% natural, sem industrializados!`,
        preco: 29.90,
        imagem: "assets/images/Barbecue.jpg",
        disponivel: true
    },
    {
        id: 6,
        nome: "Dog Smoked Romeu e Julieta",
        descricao: "Molho Cream Cheese com Geleia de Tomate.",
        descricaoLonga: `Produzido Artesanalmente:
- Salsicha de Frango (≅ 100g, 22cm), curada por 7 dias;
- Molho Cream Cheese Artesanal: Iorgute natural e especiarias;
- Geleia de Tomate: Tomate, açucar, maçã, cravo e canela;
- Pão tipo brioche artesanal: 130g;
- Ketchup artesanal: Tomate e goiaba;
- Mostarda artesanal: Mostarda e mel.
Obs.: 100% natural, sem industrializados!`,
        preco: 29.90,
        imagem: "assets/images/RJ.jpg",
        disponivel: true
    },
    {
        id: 7,
        nome: "Dog Smoked Romeu e Julieta Apimentado",
        descricao: "Molho Cream Cheese com Geleia de Abacaxi.",
        descricaoLonga: `Produzido Artesanalmente:
- Salsicha de Frango (≅ 100g, 22cm), curada por 7 dias;
- Molho Cream Cheese Artesanal: Iorgute natural e especiarias;
- Bacon Artesanal: Farofa de bacon artesanal;
- Geleia de Abacaxi: Abacaxi, açucar, maçã, pimenta dedo de moça, cravo e canela;
- Pão tipo brioche artesanal: 130g;
- Ketchup artesanal: Tomate e goiaba;
- Mostarda artesanal: Mostarda e mel.
Obs.: 100% natural, sem industrializados!`,
        preco: 29.90,
        imagem: "assets/images/Apimentado.jpg",
        disponivel: true
    }
];

// 2. FUNÇÃO DE RENDERIZAÇÃO
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
                            <span class="price">R$ ${Number(produto.preco).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                            <button class="add-btn" onclick="abrirDetalhes(${produto.id})">+</button>
                        </div>
                    </div>
                </div>
            `;
        }
    });
}

// 3. FUNÇÃO PARA ABRIR O MODAL (Escopo Global)
// Função para abrir o modal e preencher com os dados do produto
window.abrirDetalhes = function(id) {
    console.log("Tentando abrir produto ID:", id);
    
    // Busca o produto no array fixo
    const produto = cardapio.find(p => p.id === id);
    if (!produto) {
        console.error("Produto não encontrado!");
        return;
    }

    // 1. Título do lanche
    const titulo = document.getElementById('modal-titulo');
    if (titulo) titulo.innerText = produto.nome;

    // 2. Imagem do lanche
    const img = document.getElementById('modal-img');
    if (img) img.src = produto.imagem;

    // 3. Preço formatado (R$ 00,00)
    const preco = document.getElementById('modal-preco');
    if (preco) {
        preco.innerText = `R$ ${Number(produto.preco).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
    }

    // 4. Descrição Longa (Ingredientes) - AJUSTADO PARA SEU NOVO ID
    const descElement = document.getElementById('modal-descricaoLonga');
    if (descElement) {
        // Puxa a propriedade descricaoLonga do objeto
        descElement.innerText = produto.descricaoLonga;
        
        // Estilização para garantir a lista organizada
        descElement.style.whiteSpace = "pre-line"; 
        descElement.style.textAlign = "left";
        descElement.style.marginTop = "10px";
    } else {
        console.error("ERRO: Não achei o ID 'modal-descricaoLonga' no seu HTML!");
    }

    // 5. Exibe o modal (fundo escuro + card)
    const modal = document.getElementById('modal-produto');
    if (modal) {
        modal.style.display = 'flex';
    } else {
        console.error("ERRO: Não achei o ID 'modal-produto' no seu HTML!");
    }
};
    // 5. Exibir o Modal
    const modal = document.getElementById('modal-produto');
    if (modal) {
        modal.style.display = 'flex';
    } else {
        console.error("ERRO: Não achei o ID 'modal-produto' no seu HTML!");
    }
};
// 4. FUNÇÕES DE FECHAMENTO
window.fecharModal = function() {
    document.getElementById('modal-produto').style.display = 'none';
};

window.closePopup = function() {
    const popup = document.getElementById('popup-vip');
    if(popup) popup.style.display = 'none';
};

// 5. INICIALIZAÇÃO
window.onload = function() {
    renderizarCardapio();
    setTimeout(() => {
        const popup = document.getElementById('popup-vip');
        if(popup) popup.style.display = 'flex';
    }, 5000);
};

// Fechar ao clicar fora ou ESC
window.onclick = function(event) {
    const modal = document.getElementById('modal-produto');
    if (event.target == modal) fecharModal();
};
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') fecharModal(); });