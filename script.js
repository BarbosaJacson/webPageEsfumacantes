const modalBootstrap = new bootstrap.Modal(document.getElementById('modal-produto'));
// 1. DADOS DO CARDÁPIO
const cardapio = [
    { id: 1, nome: "Dog Smoked Cream Cheese Parmesão com Molho Pesto", descricao: "Molho Cream Cheese Parmesão com Pesto.", descricaoLonga: "Produzido Artesanalmente:\n- Salsicha de Frango (≅ 100g, 22cm), curada por 7 dias;\n- Molho Cream Cheese Artesanal: Iorgute natural e especiarias;\n- Parmesão: Queijo parmesão ralado;\n- Molho Pesto Artesanal;\n- Geleia de Tomate;\n- Pão tipo brioche artesanal: 130g.\nObs.: 100% natural!", preco: 30.90, imagem: "./assets/images/pesto.jpeg", disponivel: true },
    { id: 2, nome: "Dog Smoked Cream Cheese Parmesão", descricao: "Molho Cream Cheese com Parmesão e bacon.", descricaoLonga: "Produzido Artesanalmente:\n- Salsicha de Frango (≅ 100g, 22cm), curada por 7 dias;\n- Molho Cream Cheese Artesanal;\n- Parmesão: Queijo parmesão ralado;\n- Bacon Artesanal;\n- Pão tipo brioche artesanal: 130g.\nObs.: 100% natural!", preco: 29.90, imagem: "./assets/images/Parmesão.jpeg", disponivel: true },
    { id: 3, nome: "Dog Smoked Romeu e Julieta com Bacon", descricao: "Molho Cream Cheese de Parmesão, Geleia de Tomate e bacon crocante.", descricaoLonga: "Produzido Artesanalmente:\n- Salsicha de Frango (≅ 100g);\n- Cream Cheese e Parmesão;\n- Bacon Artesanal;\n- Geleia de Tomate;\n- Pão tipo brioche artesanal.\nObs.: 100% natural!", preco: 29.90, imagem: "./assets/images/RJBacon.jpeg", disponivel: true },
    { id: 4, nome: "Dog Smoked Cream Cheese Gorgonzola", descricao: "Molho Cream Cheese com Gorgonzola e bacon.", descricaoLonga: "Produzido Artesanalmente:\n- Salsicha de Frango (≅ 100g);\n- Gorgonzola e Bacon;\n- Pão tipo brioche artesanal.\nObs.: 100% natural!", preco: 29.90, imagem: "./assets/images/Gorgonzola.jpeg", disponivel: true },
    { id: 5, nome: "Dog Smoked Barbecue", descricao: "Zero lactose Molho Barbecue de maçã e bacon.", descricaoLonga: "Produzido Artesanalmente:\n- Salsicha de Frango (≅ 100g);\n- Molho Barbecue Artesanal;\n- Bacon;\n- Pão tipo brioche artesanal.\nObs.: 100% natural!", preco: 29.90, imagem: "./assets/images/Barbecue.jpeg", disponivel: true },
    { id: 6, nome: "Dog Smoked Romeu e Julieta", descricao: "Molho Cream Cheese com Geleia de Tomate.", descricaoLonga: "Produzido Artesanalmente:\n- Salsicha de Frango (≅ 100g);\n- Cream Cheese e Geleia de Tomate;\n- Pão tipo brioche artesanal.\nObs.: 100% natural!", preco: 29.90, imagem: "./assets/images/RJ.jpeg", disponivel: true },
    { id: 7, nome: "Dog Smoked Romeu e Julieta Apimentado", descricao: "Molho Cream Cheese com Geleia de Abacaxi.", descricaoLonga: "Produzido Artesanalmente:\n- Salsicha de Frango (≅ 100g);\n- Geleia de Abacaxi Apimentada;\n- Pão tipo brioche artesanal.\nObs.: 100% natural!", preco: 29.90, imagem: "./assets/images/Apimentado.jpeg", disponivel: true }
];

// 2. RENDERIZAR VITRINE
function renderizarCardapio() {
    const vitrine = document.getElementById('vitrine-produtos');
    if (!vitrine) return;
    
    // Limpa e prepara o container para o Grid do Bootstrap
    vitrine.innerHTML = '';
    vitrine.className = "row g-4 justify-content-center"; // g-4 dá o espaçamento entre cards

    cardapio.forEach(produto => {
        if (produto.disponivel) {
            vitrine.innerHTML += `
                <div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
                    <div class="card border-0 shadow-sm h-100 rounded-4 overflow-hidden" style="width: 100%; max-width: 350px;">
                        <img src="${produto.imagem}" class="card-img-top" alt="${produto.nome}" style="height: 200px; object-fit: cover;">
                        <div class="card-body d-flex flex-column text-center">
                            <h5 class="card-title fw-bold text-dark">${produto.nome}</h5>
                            <p class="card-text text-muted flex-grow-1" style="font-size: 0.9rem;">${produto.descricao}</p>
                            <div class="d-flex justify-content-between align-items-center mt-3">
                                <span class="fs-5 fw-bold text-dark">R$ ${Number(produto.preco).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                                <button class="btn btn-danger rounded-circle shadow-sm d-flex align-items-center justify-content-center" 
                                        onclick="abrirDetalhes(${produto.id})" 
                                        style="width: 40px; height: 40px;">+</button>
                            </div>
                        </div>
                    </div>
                </div>`;
        }
    });
}

// 3. FUNÇÃO ABRIR MODAL COM WHATSAPP DINÂMICO
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

    // Gerar link do WhatsApp específico para o lanche
    const textoZap = encodeURIComponent(`Olá! Gostaria de fazer o pedido do lanche: ${produto.nome}.`);
    const linkZap = `https://wa.me/5575999240161?text=${textoZap}`;

    const modalFooter = document.getElementById('modal-footer');
    
    // Injeta o botão apenas se ele não existir, evitando duplicação
    const btnExistente = document.querySelector('.btn-zap-modal');

if (!btnExistente) {
    const zapHtml = `
    <a href="${linkZap}" target="_blank" class="btn btn-success btn-zap-modal w-100 fw-bold py-2 mt-2 d-flex align-items-center justify-content-center gap-2">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" style="width: 20px;">
        Pedir no Zap
    </a>`;
    modalFooter.insertAdjacentHTML('beforeend', zapHtml);
} else {
        btnExistente.href = linkZap;
    }

    modalBootstrap.show();
};

// 4. CONTROLE DE FECHAMENTO
window.fecharModal = function() {
    modalBootstrap.hide();
};

window.closePopup = function() {
    const popup = document.getElementById('popup-vip');
    if (popup) popup.style.display = 'none';
};

// 5. INICIALIZAÇÃO
window.onload = function() {
    renderizarCardapio();
    setTimeout(function() {
        const popup = document.getElementById('popup-vip');
        if (popup) popup.style.display = 'flex';
    }, 5000);
};

document.addEventListener('keydown', (e) => { 
    if (e.key === 'Escape') fecharModal(); 
});

// 7. RASTREAMENTO (Pixel/Marketing)
function rastrearCliqueIfood() {
    if (typeof fbq !== 'undefined') {
        fbq('track', 'Contact', {
            content_name: 'Botão iFood',
            content_category: 'Conversão de Saída'
        });
        console.log("Evento enviado ao Pixel!");
    }
}