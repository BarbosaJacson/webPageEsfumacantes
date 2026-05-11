// Variável global para o controle do Modal
let modalBootstrap;

// 1. DADOS DO CARDÁPIO (Mantive seus dados)
const cardapio = [
    { id: 1, nome: "Dog Smoked Cream Cheese Parmesão com Molho Pesto", descricao: "Molho Cream Cheese Parmesão com Pesto.", descricaoLonga: "Produzido Artesanalmente:\n- Salsicha de Frango (≅ 100g, 22cm), curada por 7 dias;\n- Molho Cream Cheese Artesanal: Iorgute natural e especiarias;\n- Parmesão: Queijo parmesão ralado;\n- Molho Pesto Artesanal;\n- Geleia de Tomate;\n- Pão tipo brioche artesanal: 130g.\nObs.: 100% natural!", preco: 30.90, imagem: "./assets/images/pesto.jpeg", disponivel: true },
    { id: 2, nome: "Dog Smoked Cream Cheese Parmesão", descricao: "Molho Cream Cheese com Parmesão e bacon.", descricaoLonga: "Produzido Artesanalmente:\n- Salsicha de Frango (≅ 100g, 22cm), curada por 7 dias;\n- Molho Cream Cheese Artesanal;\n- Parmesão: Queijo parmesão ralado;\n- Bacon Artesanal;\n- Pão tipo brioche artesanal: 130g.\nObs.: 100% natural!", preco: 29.90, imagem: "./assets/images/Parmesão.jpeg", disponivel: true },
    { id: 3, nome: "Dog Smoked Romeu e Julieta com Bacon", descricao: "Molho Cream Cheese de Parmesão, Geleia de Tomate e bacon crocante.", descricaoLonga: "Produzido Artesanalmente:\n- Salsicha de Frango (≅ 100g);\n- Cream Cheese e Parmesão;\n- Bacon Artesanal;\n- Geleia de Tomate;\n- Pão tipo brioche artesanal.\nObs.: 100% natural!", preco: 29.90, imagem: "./assets/images/RJBacon.jpeg", disponivel: true },
    { id: 4, nome: "Dog Smoked Cream Cheese Gorgonzola", descricao: "Molho Cream Cheese com Gorgonzola e bacon.", descricaoLonga: "Produzido Artesanalmente:\n- Salsicha de Frango (≅ 100g);\n- Gorgonzola e Bacon;\n- Pão tipo brioche artesanal.\nObs.: 100% natural!", preco: 29.90, imagem: "./assets/images/Gorgonzola.jpeg", disponivel: true },
    { id: 5, nome: "Dog Smoked Barbecue", descricao: "Molho Barbecue de maçã e bacon.", descricaoLonga: "Produzido Artesanalmente:\n- Salsicha de Frango (≅ 100g);\n- Molho Barbecue Artesanal;\n- Bacon;\n- Pão tipo brioche artesanal.\nObs.: 100% natural!", preco: 29.90, imagem: "./assets/images/Barbecue.jpeg", disponivel: true },
    { id: 6, nome: "Dog Smoked Romeu e Julieta", descricao: "Molho Cream Cheese com Geleia de Tomate.", descricaoLonga: "Produzido Artesanalmente:\n- Salsicha de Frango (≅ 100g);\n- Cream Cheese e Geleia de Tomate;\n- Pão tipo brioche artesanal.\nObs.: 100% natural!", preco: 29.90, imagem: "./assets/images/RJ.jpeg", disponivel: true },
    { id: 7, nome: "Dog Smoked Romeu e Julieta Apimentado", descricao: "Molho Cream Cheese com Geleia de Abacaxi.", descricaoLonga: "Produzido Artesanalmente:\n- Salsicha de Frango (≅ 100g);\n- Geleia de Abacaxi Apimentada;\n- Pão tipo brioche artesanal.\nObs.: 100% natural!", preco: 29.90, imagem: "./assets/images/Apimentado.jpeg", disponivel: true }
];

// 2. RENDERIZAR VITRINE (Usando Grid do Bootstrap)
function renderizarCardapio() {
    const vitrine = document.getElementById('vitrine-produtos');
    if (!vitrine) return;
    
    vitrine.innerHTML = '';
    // Adiciona as classes de linha do Bootstrap
    vitrine.className = "row g-4 justify-content-center";

    cardapio.forEach(produto => {
        if (produto.disponivel) {
            vitrine.innerHTML += `
                <div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
                    <div class="card border-0 shadow-sm h-100 rounded-4 overflow-hidden" style="width: 100%; max-width: 320px;">
                        <img src="${produto.imagem}" class="card-img-top" alt="${produto.nome}" style="height: 200px; object-fit: cover;">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title fw-bold text-dark" style="font-size: 1.1rem;">${produto.nome}</h5>
                            <p class="card-text text-muted flex-grow-1" style="font-size: 0.85rem;">${produto.descricao}</p>
                            <div class="d-flex justify-content-between align-items-center mt-3">
                                <span class="fs-4 fw-bold text-dark">R$ ${Number(produto.preco).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                                <button class="btn btn-danger rounded-circle shadow-sm d-flex align-items-center justify-content-center" 
                                        onclick="abrirDetalhes(${produto.id})" style="width: 40px; height: 40px;">+</button>
                            </div>
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
    document.getElementById('modal-descricaoLonga').innerText = produto.descricaoLonga;

    const modalFooter = document.getElementById('modal-footer');
    const textoZap = encodeURIComponent(`Olá! Gostaria de pedir o lanche: ${produto.nome}`);
    const linkZap = `https://wa.me/5575999240161?text=${textoZap}`;

    // Atualiza ou cria o botão do Zap
    let btnZap = document.querySelector('.btn-zap-modal');
    if (!btnZap) {
        const zapHtml = `
            <a href="${linkZap}" target="_blank" class="btn btn-success btn-zap-modal w-100 fw-bold py-2 mt-2 d-flex align-items-center justify-content-center gap-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" style="width: 20px;">
                Pedir no Zap
            </a>`;
        modalFooter.insertAdjacentHTML('beforeend', zapHtml);
    } else {
        btnZap.href = linkZap;
    }

    if(modalBootstrap) modalBootstrap.show();
};

window.fecharModal = function() {
    if(modalBootstrap) modalBootstrap.hide();
};

window.closePopup = function() {
    const popup = document.getElementById('popup-vip'); // ID tem que ser igual ao HTML
    if (popup) {
        popup.style.display = 'none';
    }
};

// 5. INICIALIZAÇÃO SEGURA
window.onload = function() {
    console.log("Página carregada. Iniciando scripts...");

    // Inicializa o modal do Bootstrap
    const modalElement = document.getElementById('modal-produto');
    if (modalElement) {
        modalBootstrap = new bootstrap.Modal(modalElement);
        console.log("Modal Bootstrap pronto.");
    }
    
    // Chama a função para desenhar os lanches na tela
    renderizarCardapio();

    // Faz o Pop-up VIP aparecer após 5 segundos
    setTimeout(function() {
        const popup = document.getElementById('popup-vip');
        if (popup) {
            popup.style.display = 'flex';
            console.log("Pop-up VIP exibido.");
        }
    }, 5000);
};

// 6. EVENTOS DE TECLADO (Opcional, mas bom ter)
document.addEventListener('keydown', (e) => { 
    if (e.key === 'Escape') fecharModal(); 
});