const reservationModal = document.getElementById('exampleModal')
const contactModal = document.getElementById('contactModal')

const myInput = document.getElementById('myInput')

reservationModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

contactModal.addEventListener('shown.bs.modal', () => {
    myInput.focus()
  })