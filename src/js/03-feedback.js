import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector("form"),
    input: document.querySelector("input"),
    message: document.querySelector("textarea"),
    
}

let formData = {};
const STORAGE_KEY = "feedback-form-state"

refs.form.addEventListener("input", throttle(onFormInput,500));
refs.form.addEventListener("submit", onFormSubmit);
checkLocalStorage();

function onFormInput () {
    formData = {
        email: refs.input.value,
        message: refs.message.value,
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    
}

function onFormSubmit (event) {
    event.preventDefault();
    console.log( JSON.parse(localStorage.getItem(STORAGE_KEY)));
    event.currentTarget.reset();
    
    localStorage.removeItem(STORAGE_KEY);
    
}

function checkLocalStorage() {
    const recordLocalStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (recordLocalStorage) {        
        refs.input.value = recordLocalStorage.email || "";
        refs.message.value = recordLocalStorage.message || "";
    }
}