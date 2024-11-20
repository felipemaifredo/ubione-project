// Executa o código após o DOM ser carregado
document.addEventListener("DOMContentLoaded", () => {
  // Seleciona os links apenas após o DOM estar carregado
  const contactLinks = document.querySelectorAll(".btn_scroll")

  // Inicia o observer
  const disconnectObserver = createObserver(0.5)

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
})

function createObserver(threshold = 1) {
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
    { threshold }
  )

  const elements = document.querySelectorAll(".init_hidden")

  elements.forEach((element) => observer.observe(element))

  return () => {
    elements.forEach((element) => observer.unobserve(element))
    observer.disconnect()
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const btnScrollLinks = document.querySelectorAll(".btn_scroll")

  btnScrollLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault()

      const element = e.target.getAttribute("href")
      const toSection = document.querySelector(element)?.offsetTop

      if (toSection !== undefined) {
        window.scroll({
          top: toSection - 100,
          behavior: "smooth",
        })
      }
    })
  })
})

(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const contactLinks = document.querySelectorAll(".btn_scroll")

    contactLinks.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault()

        const element = e.target.getAttribute("href")
        const toSection = document.querySelector(element)?.offsetTop

        if (toSection !== undefined) {
          window.scroll({
            top: toSection - 100,
            behavior: "smooth",
          })
        }
      })
    })
  })
})()