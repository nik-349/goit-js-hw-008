import throttle from "lodash.throttle"
//===============================================================//
const refInputForm = document.querySelector('.feedback-form')
const refInputEmail = document.querySelector('[name = email]')
const refInputMessage = document.querySelector('[name = message]')
//================================================================//
refInputForm.addEventListener('submit', formInteraction)
refInputForm.addEventListener('input', throttle(formLocalStorage, 1000))
refInputEmail.addEventListener('blur', formValidBlur)
refInputMessage.addEventListener('blur', formValidBlur)
//================================================================//
const formData = {};
checkData()
//================================================================//
function formValidBlur() {
   if (this.value === '') {
      //  this.classList.add('error__completed')
        return alert('Everything must be completed!')
   } else if (this.value !== '') {
      this.classList.remove('error__completed')
    }
}
//===============================================================//


function formInteraction(event) {
    event.preventDefault()
   const formEl = event.currentTarget.elements;
   const elMail = formEl.email.value;
   const elMessage = formEl.message.value;
    if (elMail === '' || elMessage === '') {
       return alert('Everything must be completed!');        
    } else {
       
        console.log({
            email: elMail,
            password: elMessage
        })
       localStorage.removeItem("feedback-form-state")
    }
    refInputForm.reset()
}
//===============================================================//

function formLocalStorage(e) {
   e.preventDefault()
   formData[e.target.name] = e.target.value;
   localStorage.setItem("feedback-form-state", JSON.stringify(formData))

}

//===============================================================//
function checkData() {

   const form = localStorage.getItem("feedback-form-state")
   const parsForm = JSON.parse(form)
   if (form) {
      refInputEmail.value = parsForm.email
      refInputMessage.value = parsForm.message
   }
}
//===============================================================//

//===============================================================//