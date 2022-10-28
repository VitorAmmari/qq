export default function backIndex() {
  const botaoVoltar = document.querySelector(".back")

  function voltarIndex(event) {
    event.preventDefault()
    window.location.href = "/home"
  }

  botaoVoltar.addEventListener('click', voltarIndex)
}