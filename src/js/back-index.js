export default function backIndex() {
  const botaoVoltar = document.querySelector(".back")

  function voltarIndex(event) {
    event.preventDefault()
    window.location.href = "/src/pages/index.html"
  }

  botaoVoltar.addEventListener('click', voltarIndex)
}