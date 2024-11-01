const itensMenu = [
    { nome: 'Inicio', url: 'index.html' },
    { nome: 'Sobre', url: 'sobre.html' },
    { nome: 'Contato', url: 'contato.html' }
];

function criarMenu() {
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');

    document.body.appendChild(header);
    header.appendChild(nav);
    nav.appendChild(ul);

    // Estilizando o header e o ul após a criação
    header.style.backgroundColor = '#071D41';
    header.style.fontFamily = 'Arial';

    ul.style.height = '40px';
    ul.style.display = 'flex';
    ul.style.justifyContent = 'center';
    ul.style.alignItems = 'center';
    ul.style.gap = '20px';
    ul.style.listStyleType = 'none';
}

function adicionarItensAoMenu() {
    const ul = document.querySelector('ul');
    itensMenu.forEach(item => {
        const li = document.createElement('li');
        const link = document.createElement('a');

        link.textContent = item.nome.toUpperCase();
        link.href = item.url;
        link.style.textDecoration = 'none';
        link.style.color = 'white';

        li.appendChild(link);
        ul.appendChild(li);
    });
}

// Chamando as funções para criar o menu e adicionar os itens
criarMenu();
adicionarItensAoMenu();
