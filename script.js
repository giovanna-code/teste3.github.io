// Evento de clique no botão de pesquisa
document.querySelector('.search-bar button').addEventListener('click', () => {
    const query = document.querySelector('.search-bar input').value;
    console.log(`Pesquisa: ${query}`);
    alert(`Você pesquisou por: "${query}"`);
  });
  