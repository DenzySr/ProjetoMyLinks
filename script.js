function Clique() {
  const html = document.documentElement
  // html.classList.toggle("light")
  // isto contem dentro do classlist.toggle
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }

  //pegar tag img
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/Avatar2.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }

  //substituir a imagem
  //se tiver light mode, adicionar imagem light
  //se tiver sem light mode, manter original.
}
