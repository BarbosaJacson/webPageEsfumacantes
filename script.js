// Variável global para o controle do Modal
let modalBootstrap;
let cardapio = [];

async function carregarCardapio() {
    try {
        const response = await fetch('./cardapio.json');
        cardapio = await response.json();
        renderizarCardapio('Todos'); // Renderiza o cardápio após o carregamento
    } catch (error) {
        console.error('Erro ao carregar o cardápio:', error);
    }
}
document.addEventListener('DOMContentLoaded', () => {
    carregarCardapio();

    document.querySelectorAll('.nav-link').forEach(button => {
        button.addEventListener('click', function(e) {
            document.querySelectorAll('.nav-link').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

const categoriaClicada = e.target.innerText;
const vitrine = document.getElementById('vitrine-produtos');
if (categoriaClicada !== 'Todos' && categoriaClicada !== 'Hot Dogs' && categoriaClicada !== 'Sanduíches') {
    vitrine.innerHTML = `<h2 class="text-center text-muted mt-5">Em breve, teremos ${categoriaClicada}!</h2>`;
} else {   
    renderizarCardapio(categoriaClicada);
}
});
});
});

let horarios = {};

async function carregarHorarios() {
    try {
        const response = await fetch('./horarios.json');
        horarios = await response.json();
        console.log("Horários carregados:", horarios);
    } catch (error) {
        console.error('Erro ao carregar os horários:', error);
        return; // interrompe se der erro na busca do arquivo
    }

    const agora = new Date();
    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const horaAtual = `${horas}:${minutos}`;
    console.log("4. Hora atual calculada:", horaAtual);

    const faixas = horarios.programacao;
    console.log("5. Faixas encontradas na chave programacao:", faixas);

    const faixaAtual = faixas ? faixas.find(f => horaAtual >= f.inicio && horaAtual <= f.fim) : null;
    console.log("6. Faixa correspondente encontrada:", faixaAtual);

    const estaAberto = faixaAtual ? faixaAtual.aberto : false;
    console.log("7. Status final (estaAberto):", estaAberto);

    const btnStatus = document.getElementById('btn-status');
    const textoStatus = btnStatus ? btnStatus.querySelector('.texto-status') : null;

    if (btnStatus && textoStatus) {
        if (estaAberto) {
            btnStatus.classList.remove('badge-closed');
            btnStatus.classList.add('badge-open');
            textoStatus.innerText = 'Aberto agora';
        } else {
            btnStatus.classList.remove('badge-open');
            btnStatus.classList.add('badge-closed');
            textoStatus.innerText = 'Fechado agora';
        }
        console.log("8. DOM atualizado com sucesso!");
    } else {
        console.warn("ALERTA: Elemento #btn-status ou .texto-status não foi encontrado no DOM.");
    }
} 


// 2. RENDERIZAR VITRINE (Usando Grid do Bootstrap)
function renderizarCardapio(categoriaSelecionada = 'Todos') {
    const vitrine = document.getElementById('vitrine-produtos');
    if (!vitrine) return;
    
    vitrine.innerHTML = '';
    const produtosFiltrados = cardapio.filter(produto => {if (categoriaSelecionada === 'Todos') return true; return produto.categoria === categoriaSelecionada;});
    vitrine.className = "row g-4 justify-content-center";

    produtosFiltrados.forEach(produto => {
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
    const textoZap = encodeURIComponent(`Olá! Gostaria de pedir um lanche: ${produto.nome}`);
    const linkZap = `https://wa.me/5575999240161?text=${textoZap}`;

    
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


window.onload = function() {
    console.log("Página carregada. Iniciando scripts...");
    

    // Inicializa o modal do Bootstrap
    carregarHorarios();
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

// 6. EVENTOS DE TECLADO (Opcional)
document.addEventListener('keydown', (e) => { 
    if (e.key === 'Escape') fecharModal(); 
});
    
