export default function initModalVersion() {
  const botaoAbrirVersion = document.querySelector('[data-version="abrir"]')
  const botaoFecharVersion = document.querySelector('[data-version="fechar"]')
  const containerModalVersion = document.querySelector('[data-version="container"]')
  
  if(botaoAbrirVersion && botaoFecharVersion && containerModalVersion) {
    
    function toggleModal(event) {
      event.preventDefault()
      containerModalVersion.classList.toggle('ativo')
    }
    
    function cliqueForaModal(event) {
      if (event.target === this) {
        toggleModal(event)
      }
    }
    
    botaoAbrirVersion.addEventListener('click', toggleModal)
    botaoFecharVersion.addEventListener('click', toggleModal)
    containerModalVersion.addEventListener('click', cliqueForaModal)
  }
}