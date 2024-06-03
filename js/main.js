const regex = /[а-яА-ЯёЁ]+/g;

const regexPhone = /\+?[\d\s\-\(\)]{10,15}/g;

const regexEmail =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/



const nameUser = document.querySelector('#name')
const email = document.querySelector('#email')
const phone = document.querySelector('#phone')


nameUser.addEventListener('input', (e) => {
    if (String(e.target.value).match(regex)) {
        nameUser.classList.remove('error')
    } else {
        nameUser.classList.add('error')
    }
})

email.addEventListener('input', (e) => {
    if (String(e.target.value).match(regexEmail)) {
        email.classList.remove('error')
    } else {
        email.classList.add('error')
    }
})

phone.addEventListener('input', (e) => {
    if (String(e.target.value).match(regexPhone)) {
        phone.classList.remove('error')
    } else {
        phone.classList.add('error')
    }
})
