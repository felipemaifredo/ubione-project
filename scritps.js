
// Executa o código após o DOM ser carregado
document.addEventListener("DOMContentLoaded", () => {
  // Inicia o observer
  const disconnectObserver = createObserver(0.5)
  // Opcional: Armazene a função de desconexão para uso posterior, se necessário
  // Exemplo: window.disconnectObserver = disconnectObserver
})

const contactLinks = document.querySelectorAll(".btn_scroll")

function createObserver(threshold = 1) {
  // Cria o IntersectionObserver
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("init_hidden_off")
        } else {
          entry.target.classList.remove("init_hidden_off")
        }
      })
    },
    { threshold } // Define o threshold passado como argumento
  )

  // Seleciona todos os elementos com a classe "init-hidden"
  const elements = document.querySelectorAll(".init_hidden")

  // Observa cada elemento
  elements.forEach((element) => observer.observe(element))

  // Retorna uma função para desconectar o observador
  return () => {
    elements.forEach((element) => observer.unobserve(element))
    observer.disconnect()
  }
}

// Adiciona um evento de clique a cada elemento
contactLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault()
    
    // Obtém o valor do atributo "href" do elemento clicado
    const element = e.target.getAttribute("href")
    
    // Seleciona o elemento correspondente no documento
    const toSection = document.querySelector(element)?.offsetTop

    if (toSection !== undefined) {
      // Faz o scroll suave para a posição da seção
      window.scroll({
        top: toSection - 100,
        behavior: "smooth",
      })
    }
  })
})