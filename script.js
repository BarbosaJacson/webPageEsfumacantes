// 1. DADOS FIXOS
const cardapio = [
    { id: 1, nome: "Dog Smoked Cream Cheese Parmesão com Molho Pesto", descricao: "Molho Cream Cheese Parmesão com Pesto.", descricaoLonga: "Produzido Artesanalmente:\n- Salsicha de Frango (≅ 100g, 22cm), curada por 7 dias;\n- Molho Cream Cheese Artesanal: Iorgute natural e especiarias;\n- Parmesão: Queijo parmesão ralado;\n- Molho Pesto Artesanal;\n- Geleia de Tomate;\n- Pão tipo brioche artesanal: 130g.\nObs.: 100% natural!", preco: 30.90, imagem: "./assets/images/pesto.jpeg", disponivel: true },
    { id: 2, nome: "Dog Smoked Cream Cheese Parmesão", descricao: "Molho Cream Cheese com Parmesão e bacon.", descricaoLonga: "Produzido Artesanalmente:\n- Salsicha de Frango (≅ 100g, 22cm), curada por 7 dias;\n- Molho Cream Cheese Artesanal;\n- Parmesão: Queijo parmesão ralado;\n- Bacon Artesanal;\n- Pão tipo brioche artesanal: 130g.\nObs.: 100% natural!", preco: 29.90, imagem: "./assets/images/Parmesão.jpeg", disponivel: true },
    { id: 3, nome: "Dog Smoked Romeu e Julieta com Bacon", descricao: "Molho Cream Cheese de Parmesão, Geleia de Tomate e bacon crocante.", descricaoLonga: "Produzido Artesanalmente:\n- Salsicha de Frango (≅ 100g);\n- Cream Cheese e Parmesão;\n- Bacon Artesanal;\n- Geleia de Tomate;\n- Pão tipo brioche artesanal.\nObs.: 100% natural!", preco: 29.90, imagem: "./assets/images/RJBacon.jpeg", disponivel: true },
    { id: 4, nome: "Dog Smoked Cream Cheese Gorgonzola", descricao: "Molho Cream Cheese com Gorgonzola e bacon.", descricaoLonga: "Produzido Artesanalmente:\n- Salsicha de Frango (≅ 100g);\n- Gorgonzola e Bacon;\n- Pão tipo brioche artesanal.\nObs.: 100% natural!", preco: 29.90, imagem: "./assets/images/Gorgonzola.jpeg", disponivel: true },
    { id: 5, nome: "Dog Smoked Barbecue", descricao: "Zero lactose Molho Barbecue de maçã e bacon.", descricaoLonga: "Produzido Artesanalmente:\n- Salsicha de Frango (≅ 100g);\n- Molho Barbecue Artesanal;\n- Bacon;\n- Pão tipo brioche artesanal.\nObs.: 100% natural!", preco: 29.90, imagem: "./assets/images/Barbecue.jpeg", disponivel: true },
    { id: 6, nome: "Dog Smoked Romeu e Julieta", descricao: "Molho Cream Cheese com Geleia de Tomate.", descricaoLonga: "Produzido Artesanalmente:\n- Salsicha de Frango (≅ 100g);\n- Cream Cheese e Geleia de Tomate;\n- Pão tipo brioche artesanal.\nObs.: 100% natural!", preco: 29.90, imagem: "./assets/images/RJ.jpeg", disponivel: true },
    { id: 7, nome: "Dog Smoked Romeu e Julieta Apimentado", descricao: "Molho Cream Cheese com Geleia de Abacaxi.", descricaoLonga: "Produzido Artesanalmente:\n- Salsicha de Frango (≅ 100g);\n- Geleia de Abacaxi Apimentada;\n- Pão tipo brioche artesanal.\nObs.: 100% natural!", preco: 29.90, imagem: "./assets/images/Apimentado.jpeg", disponivel: true }
];

// 2. FUNÇÃO RENDERIZAR
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
                </div>`;
        }
    });
}

// 3. FUNÇÃO ABRIR MODAL
window.abrirDetalhes = function(id) {
    const produto = cardapio.find(p => p.id === id);
    if (!produto) return;
    document.getElementById('modal-titulo').innerText = produto.nome;
    document.getElementById('modal-img').src = produto.imagem;
    document.getElementById('modal-preco').innerText = `R$ ${Number(produto.preco).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
    const desc = document.getElementById('modal-descricaoLonga');
    if (desc) {
        desc.innerText = produto.descricaoLonga;
        desc.style.whiteSpace = "pre-line";
    }
    const modal = document.getElementById('modal-produto');
    if (modal) modal.style.display = 'flex';
    
};

// 4. FUNÇÕES DE FECHAMENTO
window.fecharModal = function() {
    const modal = document.getElementById('modal-produto');
    if (modal) modal.style.display = 'none';
};

window.closePopup = function() {
    const popup = document.getElementById('popup-vip');
    if (popup) popup.style.display = 'none';
};
// Exemplo de como inserir no JavaScript do modal
const zapButton = `<a href="https://wa.me/5575999240161" class="btn-zap-modal">
                    <img src="assets/images/whatsapp-icon.png" style="width: 30px;">
                   </a>`;
// Adicione isso ao lado do botão de fechar ou do preço

// 5. INICIALIZAÇÃO ÚNICA
window.onload = function() {
    renderizarCardapio();
    setTimeout(function() {
        const popup = document.getElementById('popup-vip');
        if (popup) popup.style.display = 'flex';
    }, 5000);
};

// 6. EVENTOS GLOBAIS
window.onclick = function(event) {
    const modal = document.getElementById('modal-produto');
    if (event.target == modal) fecharModal();
};
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') fecharModal(); });

// Função para rastrear o clique no iFood
function rastrearCliqueIfood() {
    if (typeof fbq !== 'undefined') {
        fbq('track', 'Contact', {
            content_name: 'Botão iFood',
            content_category: 'Conversão de Saída'
        });
        console.log("Evento de clique no iFood enviado ao Pixel!");
    }
}
