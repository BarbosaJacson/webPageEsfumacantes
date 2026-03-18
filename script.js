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
        preco: "29,90",
        imagem: "assets/images/pesto.jpg",
        disponivel: true
    },
    {
        id: 2,
        nome: "Dog Smoked Cream Cheese Parmesão",
        descricao: "Molho Cream Cheese com Parmesão com bacon.",
        descricaoLonga: `Produzido Artesanalmente:
                        - Salsicha de Frango (≅ 100g, 22cm), curada por 7 dias;
                        - Molho Cream Cheese Artesanal: Iorgute natural e especiarias;
                        - Parmesão: Queijo parmesao ralado;
                        - Bacon Artesanal: Farofa de bacon artesanal;
                        - Pão tipo brioche artesanal: 130g;
                        - Ketchup artesanal: Tomate e goiaba;
                        - Mostarda artesanal: Mostarda e mel.
                        Obs.: 100% natural, sem industrializados!`,
        preco: "29,90",
        imagem: "assets/images/Parmesão.jpg", // Use uma imagem que você já tenha
        disponivel: true
    },
    {
        id: 3,
        nome: "Dog Smoked Romeu e Julieta com Bacon",
        descricao: "Molho Cream Cheese com Geleia de Tomate e bacon crocante.",
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
        preco: "29,90",
        imagem: "assets/images/RJBacon.jpg", 
        disponivel: true
    },
    {
        id: 4,
        nome: "Dog Smoked Cream Cheese Gorgonzola",
        descricao: "Molho Cream Cheese com Gorgonzola com bacon.",
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
        preco: "29,90",
        imagem: "assets/images/Gorgonzola.jpg", // Use uma imagem que você já tenha
        disponivel: true
    },
    {
        id: 5,
        nome: "Dog Smoked Barbecue",
        descricao: "Hot Dog artesanal zero lactose com Bacon e Molho Barbecue.",       
        descricaoLonga: `Produzido Artesanalmente:
                        - Salsicha de Frango (≅ 100g, 22cm), curada por 7 dias;
                        - Bacon Artesanal: Farofa de bacon artesanal;
                        - Molho Barbecue: Caldo de costela, cerveja escura, maçã e especiarias;
                        - Pão tipo brioche artesanal: 130g;
                        - Ketchup artesanal: Tomate e goiaba;
                        - Mostarda artesanal: Mostarda e mel.
                        Obs.: 100% natural, sem industrializados!`,
        preco: "29,90",
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
        preco: "29,90",
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
        preco: "29,90",
        imagem: "assets/images/Apimentado.jpg", 
        disponivel: true
    }
    
];

// 2. A FUNÇÃO (Defina a função ANTES de chamá-la)
function renderizarCardapio() {
    const vitrine = document.getElementById('vitrine-produtos');
    if (!vitrine) return; // Segurança extra

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
                            <span class="price">R$ ${produto.preco}</span>
                            <button class="add-btn">+</button>
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