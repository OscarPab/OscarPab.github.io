const buttonNo = document.querySelector('#no')
const buttonYes = document.querySelector('#yes')
const messageBox = document.querySelector('#message')

let fontSize = 2

let messages = [
  '¿Estás segurx?',
  'Piénsalo bien',
  'Piénsalo muy bien',
  'Piénsalo',
  'Mira el otro botón',
  'No lo hagas',
  '¡Es una trampa!',
  '¡No me presiones!',
  '¿Estás segurx de esto?',
  'Reconsidera',
  'Haz clic en el botón correcto',
  'Vuelve a intentarlo',
  '¡No, no, no!',
  'Estás haciendo un error',
  '¡Por favor, no!',
  '¿Seguro quieres hacer esto?',
  'Hay otra opción',
  'Medítalo un poco más',
  'No es buena idea',
  'Piensa dos veces',
  'Esto podría ser un error',
  'Reflexiona antes de seguir',
  'Dale una segunda vuelta',
  'Estás seguro de esto?',
  'Inténtalo de nuevo',
  'Estás seguro?',
  '¿Realmente quieres hacer esto?',
  '¡Espera!',
  'Lo estás pensando bien?',
  'Mejor piensa de nuevo'
]

let colors = [
  'red',
  'blue',
  'green',
  'purple',
  'orange',
  'pink',
  'cyan'
]

let positions = [
  { top: '20%', left: '10%' },
  { top: '50%', left: '70%' },
  { top: '80%', left: '30%' },
  { top: '10%', left: '80%' },
  { top: '60%', left: '50%' }
]

buttonNo.addEventListener('click', () => {
  fontSize += 0.5
  buttonYes.style.fontSize = `${fontSize}rem`

  const indexRandom = Math.floor(Math.random() * messages.length)
  buttonNo.textContent = messages[indexRandom]

  const randomColor = colors[Math.floor(Math.random() * colors.length)]
  buttonNo.style.backgroundColor = randomColor

  const randomPosition = positions[Math.floor(Math.random() * positions.length)]
  buttonNo.style.position = 'absolute'
  buttonNo.style.top = randomPosition.top
  buttonNo.style.left = randomPosition.left
})

buttonYes.addEventListener('click', () => {
  messageBox.style.display = 'flex'
})
