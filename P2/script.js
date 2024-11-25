// Alternância de Tema
const toggleTema = document.getElementById('toggleTema');
if (toggleTema) {
  toggleTema.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
  });
}

// Função para abrir detalhes de personagens
function abrirDetalhes(personagem) {
  localStorage.setItem('personagem', personagem);
  window.location.href = 'detalhes.html';
}

// Preenchimento dinâmico da página de detalhes
if (window.location.pathname.includes('detalhes.html')) {
  const detalhesSection = document.getElementById('detalhes-personagem');
  const personagem = localStorage.getItem('personagem');

  const personagens = {
    naruto: {
      nome: 'Naruto Uzumaki',
      imagem: 'assets/images/naruto.jpg',
      descricao: 'Naruto é o ninja mais determinado e sonha em ser Hokage.',
    },
    sasuke: {
      nome: 'Sasuke Uchiha',
      imagem: 'assets/images/sasuke.jpg',
      descricao: 'Sasuke é um prodígio do clã Uchiha em busca de vingança.',
    },
    sakura: {
      nome: 'Sakura Haruno',
      imagem: 'assets/images/sakura.jpg',
      descricao: 'Sakura é uma ninja médica habilidosa com força avassaladora.',
    },
  };

  const dados = personagens[personagem];
  if (dados) {
    detalhesSection.innerHTML = `
      <img src="${dados.imagem}" alt="${dados.nome}">
      <h2>${dados.nome}</h2>
      <p>${dados.descricao}</p>
    `;
  }
}

// Validação de formulário de contato
const formContato = document.getElementById('formContato');
if (formContato) {
  formContato.addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('mensagemSucesso').style.display = 'block';
  });
}

// Função para voltar à galeria
function voltarGaleria() {
  window.location.href = 'galeria.html';
}

