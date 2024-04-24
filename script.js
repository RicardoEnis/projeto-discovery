function toggleMode () {
   const html = document.documentElement

html.classList.toggle('light')

const img = document.querySelector("#profile img")

if(html.classList.contains('light')) {
        img.setAttribute('src', './assets/avatar-light.png')
        
} else { img.setAttribute('src', './assets/avatar.png')
}

if(html.classList.contains('light')) {
    img.setAttribute('alt', 'foto de pessoa sorrindo de oclus escuro')
    
} else { img.setAttribute('alt', 'foto de pessoa sorrindo')

}

}

function showLinks(event) {
    // Verifica se o container já está presente no documento
    var linkContainer = document.getElementById('linkContainer');

    // Se o container já existir, remove-o e sai da função
    if (linkContainer) {
        document.body.removeChild(linkContainer);
        return;
    }

    // Cria uma div para conter os links
    linkContainer = document.createElement('div');
    linkContainer.id = 'linkContainer';

    // Adiciona os links
    linkContainer.innerHTML = `
        <a href="https://ricardoenis.github.io/godpedia">GodPedia</a><br>
        <a href="https://ricardoenis.github.io/lucky-biscuit/">Lucky biscuit</a><br>
    `;

    // Estiliza o container
    linkContainer.style.border = '1px solid var(--stroke-color)';
    linkContainer.style.minWidth = '540px';
    linkContainer.style.background = 'var(--surface-color)';
    linkContainer.style.borderRadius = '8px';
    linkContainer.style.padding = '16px 24px';
    linkContainer.style.position = 'absolute';
    linkContainer.style.textAlign = 'center';

    // Obtém as coordenadas do botão clicado
    var buttonRect = event.target.getBoundingClientRect();

    // Define as coordenadas do container
    linkContainer.style.top = buttonRect.bottom + window.scrollY + 8 + 'px'; // Adiciona um espaço de 8px abaixo do botão
    linkContainer.style.left = '50%'; // Centraliza horizontalmente
    linkContainer.style.transform = 'translateX(-50%)'; // Centraliza o container com base em seu próprio tamanho

    // Adiciona o container ao corpo do documento
    document.body.appendChild(linkContainer);
}
